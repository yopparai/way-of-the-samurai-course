import './index.css';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
