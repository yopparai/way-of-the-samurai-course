import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Masha'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Misha'},
    {id: 5, name: 'Jenny'},
    {id: 6, name: 'Ivan'}
]
const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'}
]

const posts = [
    {id: 1, message: 'Hello!', likesCount: 24},
    {id: 2, message: 'How are you?', likesCount: 10},
]

ReactDOM.render(
    <React.StrictMode>
        <App dialogs={dialogs} messages={messages} posts={posts}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
