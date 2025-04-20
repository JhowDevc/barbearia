// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';


function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para a Home */}
        <Route path="/" element={<Home />} />


      </Routes>
    </Router>
  );
}

export default App;
