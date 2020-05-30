import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import "./config/appConfig";
import { persistor, store } from "./config/redux";
import apiClient from "./network/apiClient";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

const onBeforeLift = () => {
  apiClient.setAuthTokenInHeader(store.getState().auth.token);
};
// console.log(store);
const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} onBeforeLift={onBeforeLift}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} onBeforeLift={onBeforeLift}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
