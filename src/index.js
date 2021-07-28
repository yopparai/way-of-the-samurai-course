import './index.css';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const renderEntireTree = (store) =>
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

renderEntireTree(store)

store.subscribe(() => {
    renderEntireTree(store)
})