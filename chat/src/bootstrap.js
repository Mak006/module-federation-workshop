import * as gen from "txtgen";

function mount(el) {
  const h1 = document.createElement("h1");
  h1.append("What attendees are saying");

  const ul = document.createElement("ul");
  for (let index = 0; index < 5; index++) {
    const li = document.createElement("li");
    li.innerText = gen.sentence();
    ul.append(li);
  }

  el.append(h1);
  el.append(ul);
}

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("root-chat-dev");
  if (el) {
    mount(el);
  }
}

export default mount;
