import React from 'react';
import {BrowserRouter as Router, Route, Routes,useNavigate} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const BoysPage = () => {
  const history = useNavigate();
  function move(e) {
  e.preventDefault();
  history('/');
}
  return(
  <div className="name">
    <h1>Boys Page Hello</h1>
    <button onClick={move}>Home</button>
  </div>)
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} exact />
        <Route path="/boy" element={<BoysPage/>} />
      </Routes>
    </Router> 
  );
}

export default App;
