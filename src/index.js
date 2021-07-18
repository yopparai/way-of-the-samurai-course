import './index.css';
import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const renderEntireTree = (state) =>
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

renderEntireTree(state)

subscribe(renderEntireTree)