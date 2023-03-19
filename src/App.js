import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import Rate from './pages/Rate';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import logo from './logo.svg';
import './App.css';
// import SearchBar from './components/searchbar';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/results" element={<Results/>} />
          <Route path="/rate" element={<Rate/>} />
          <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
