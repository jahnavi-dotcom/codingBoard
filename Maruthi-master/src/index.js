import React from 'react';
import ReactDOM from 'react-dom/client';
// import the App component
import App from './App';
import {BrowserRouter} from 'react-router-dom'
// Include the Bootstrap and Custom Css to the App\
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

