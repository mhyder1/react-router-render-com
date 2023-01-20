import React from 'react';
import './style.css';
import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Link to="/">Home</Link> <Link to="/about">About</Link>{' '}
      <Link to="/contact">Contact</Link>
      <p>Start editing to see some magic happen :)</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
