import React from "react";
import mountChat from "chat/App";

export default function ChatApp() {
    const ref = React.useRef();
    React.useEffect(() => {
        mountChat(ref.current);
    }, [ref.current]);

    return <div ref={ref} />;
}