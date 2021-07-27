import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import { configureStore } from "./store";
import App from "./components/App";
import "regenerator-runtime";
import { createPusherConnector } from "nextjs2/Connectors";

function pusherConnector(set, context = {}) {
  console.log("test1 ✅ sessions connected to pusher");
  return createPusherConnector({
    channelId: "my-channel",
    eventId: "my-event",
    pusher: context.pusher,
    set,
  });
}

const INITIAL_STATE_KEY = "sessions-initial-state";

async function mount(
  el,
  {
    onNavigate,
    history = createMemoryHistory(),
    reactiveMap = "🔥🔥🔥🔥 TODO new MyProjectReactiveMap() 🔥🔥🔥🔥",
    scopedMap = new Map(),
  } = {}
) {
  const initialState = scopedMap.get(INITIAL_STATE_KEY);
  const usernameItem = await reactiveMap.item("username", {
    initialiser: async () => {
      const response = await fetch(`http://localhost:8889/api/viewer`);
      const viewer = await response.json();
      return viewer.username;
    },
  });

  const username = usernameItem.get();

  const store = configureStore({
    ...initialState,
    viewer: {
      ...initialState?.viewer,
      username,
    },
  });

  const cleanups = [
    // usernameItem.connect(pusherConnector),
    usernameItem.listen((username) => {
      store.dispatch({ type: "UPDATE_USERNAME", username });
    }),
  ];

  if (onNavigate) cleanups.push(history.listen((e) => onNavigate(e.pathname)));
  if (el) ReactDOM.render(<App history={history} store={store} />, el);

  return {
    onParentNavigate: (pathname) => {
      const currentPathname = history.location.pathname;
      if (currentPathname !== pathname) history.push(pathname);
    },
    unmount: () => {
      cleanups.forEach((cleanup) => cleanup());
      scopedMap.set(INITIAL_STATE_KEY, store.getState());
      ReactDOM.unmountComponentAtNode(el);
    },
  };
}

if (process.env.NODE_ENV === "development") {
  const root = document.getElementById("root-sessions-dev");
  if (root) {
    mount(root, { history: createBrowserHistory() });
  }
}

export default mount;
