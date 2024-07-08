import React from 'react';
import Labs from "./Labs"
import { HashRouter,  Route, Routes,  Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <h4>Mengxu Pan, CS5610 61065 SUM2 Section01 </h4>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>

      </div>
    </HashRouter>
    
  );
}

export default App;
