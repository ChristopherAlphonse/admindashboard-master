import "./index.css";

import React,{StrictMode} from "react";

import App from "./App";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      
      <App />
      
    </Provider>
  </StrictMode>
);
