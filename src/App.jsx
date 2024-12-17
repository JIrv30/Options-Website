import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './pages/Home'; // Example page components
import Choices from './pages/Choices';
import Curriculum from './pages/Curriculum';
import FAQs from './pages/FAQs';
import SubjectPage from './pages/SubjectPage';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choices" element={<Choices />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/subjects/:subjectName" element={<SubjectPage />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}

      </Routes>
      </>
  );
};

export default App;
