import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faSpinner, faArrowLeft, faShoppingCart, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faSpinner, faArrowLeft, faShoppingCart, faArrowLeft);

const root = createRoot(document.getElementById('root')); // Create a root
root.render(
    <App />

);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
