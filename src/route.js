//import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/home';



function RouteAll() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteAll;
