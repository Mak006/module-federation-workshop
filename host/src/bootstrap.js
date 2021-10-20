import mount from "chat/App";
import sessionsMount from "sessions/App";

const title = document.createElement("h1");
title.append("Event app");
document.getElementById("root-host").prepend(title);

mount(document.getElementById("root-chat"));
sessionsMount(document.getElementById("root-sessions"));