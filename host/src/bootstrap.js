import "sessions/App";
import mount from "chat/App";

const title = document.createElement("h1");
title.append("Event app");
document.getElementById("root-host").prepend(title);

mount(document.getElementById("root-chat"));