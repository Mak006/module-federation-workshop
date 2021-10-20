import React from "react";
import mountSessions from "sessions/App";

export default function SessionsApp() {
    const ref = React.useRef();
    React.useEffect(() => {
        mountSessions(ref.current);
    }, [ref.current]);

    return <div ref={ref} />;
}