import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NewsletterRegistration from './components/NewsletterRegistration';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<NewsletterRegistration />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;