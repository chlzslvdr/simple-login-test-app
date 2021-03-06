import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./css/main.scss";
import "bootstrap/dist/css/bootstrap.css";

import App from "./modules/App";

import * as serviceWorker from "./serviceWorker";

import Firebase, { FirebaseContext } from "./components/Firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
