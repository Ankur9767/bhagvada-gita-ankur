import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Chapter from './Components/Chapter';

import Mainsearch from './Components/Mainsearch';
import Verses from './Components/Verses';
import Login from './Components/Login';
import Register from './Components/Register';
import About from './Components/About';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}>

      </Route>      
       <Route path="/Chapter/:chapter" element={<Chapter />}>
      </Route>  
      <Route path="/Search" element={<Mainsearch />}>
      </Route> 
      <Route path="/verse/:chapter" element={<Verses />}>
      </Route>
      <Route path="/login" element={<Login />}>
      </Route>
      <Route path="/signup" element={<Register />}>
      </Route>
      <Route path="/about" element={<About />}>
      </Route>
      
      
        
          
    </Routes>   
      
    </div>
    </BrowserRouter>
  );
}

export default App;
