import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Banner from './components/Banner';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='services' element={<Services />} />
      <Route path='home' element={<Banner />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

