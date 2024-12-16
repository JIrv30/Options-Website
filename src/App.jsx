import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './pages/Home'; // Example page components
import Choices from './pages/Choices';
import Curriculum from './pages/Curriculum';
import FAQs from './pages/FAQs';
import Subjects from './pages/Subjects';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choices" element={<Choices />} />
        <Route path="/Curriculum" element={<Curriculum />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/subjects" element={<Subjects />} />
      </Routes>
    </Router>
  );
};

export default App;
