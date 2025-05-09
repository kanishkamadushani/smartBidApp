import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { NotificationsContextProvider } from "./context/NotificationsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <NotificationsContextProvider>
        <App />
      </NotificationsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
