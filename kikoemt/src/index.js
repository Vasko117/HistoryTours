import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalContextProvider} from "./Context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GlobalContextProvider>
);

