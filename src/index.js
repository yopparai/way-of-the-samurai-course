import './index.css';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {Provider} from "./StoreContext";

const renderEntireTree = (store) =>
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

renderEntireTree(store)

store.subscribe(() => {
    renderEntireTree(store)
})