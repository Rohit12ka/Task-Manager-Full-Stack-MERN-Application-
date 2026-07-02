// import React from 'react'
// import { createRoot } from 'react-dom/client' // <--- Alag se createRoot import kiya
// import App from './App'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//     < App />
// )
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import './index.css';

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
// import React  from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
// import { Toaster } from "sonner";



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    {/* <Toaster richColors position="top-right" /> Added richColors and position for better defaults */}
  </BrowserRouter>
 
);