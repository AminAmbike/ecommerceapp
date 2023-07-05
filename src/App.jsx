import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./Navbar";
import {Shop} from './Shop';
import {Cart} from './Cart';
import Login from './Login';
import { ShopContextProvider } from './ShopContext';

// import Router from './Router.jsx';
// import './App.css';

function App() {
  
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          {/* Navbar above routes so it renders with every page */}
          <Navbar />  
          <Routes>
              <Route path='/' element={<Shop />}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
