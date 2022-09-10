import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} exact/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
