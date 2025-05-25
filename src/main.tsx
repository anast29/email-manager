import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { worker } from "./__mocks__/browser";
import App from "./App";
import { simulateEmailReceiving } from "./simulateEmailReceiving";
import "./index.css";

worker.start().then(() => {
  simulateEmailReceiving();

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
