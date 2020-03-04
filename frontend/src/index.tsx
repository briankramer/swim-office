import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {initializeStore} from "./store/store";

ReactDOM.render(
    <Provider store={initializeStore()}>
        <App />
    </Provider>,
    document.getElementById('root'),
)
