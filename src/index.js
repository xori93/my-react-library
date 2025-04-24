import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faSpinner, faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faSpinner, faArrowLeft, faShoppingCart);

const rootElement = document.getElementById('root'); // Get the root element
const root = createRoot(rootElement); // Create a root

root.render( // Use root.render to render your app
 
    <App />
 
);

reportWebVitals();