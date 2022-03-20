import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "tachyons";

import "./styles/index.css";
import App from "./containers/App";
import { store } from "./store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root") as HTMLElement
);
