import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/services';
import Products from './components/pages/products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';


function App() {
  return (
    <>
  <Router>
  <Navbar />
  
  <Routes>
  <Route path='/' element={<Home />} ></Route>
<Route path='/services' element={<Services />} ></Route>
<Route path='/products' element={<Products />} ></Route>
<Route path='/sign-up' element={<SignUp />} ></Route>

  </Routes>  
  <Footer />
  </Router> 
  </>
 
  );
}

export default App;
