import React from 'react';
import {BrowserRouter as Router, Route, Routes,useNavigate} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/Shop';
import Header from './components/Header/header';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} exact />
        <Route path="/shop" element={<ShopPage/>} />
      </Routes>
    </Router> 
  );
}

export default App;
