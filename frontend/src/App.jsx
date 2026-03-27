import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import DarkModeToggle from './components/DarkModeToggle';

import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Placements from './pages/Placements';
import Research from './pages/Research';
import CampusLife from './pages/CampusLife';
import Students from './pages/Students';
import Alumni from './pages/Alumni';
import Contact from './pages/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <div className={darkMode ? 'dark' : ''}>
          <div className="min-h-screen bg-white dark:bg-[#040c18] text-gray-900 dark:text-gray-100 transition-colors duration-500">
            <ScrollProgress />
            <Navbar darkMode={darkMode} />
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/placements" element={<Placements />} />
                <Route path="/research" element={<Research />} />
                <Route path="/campus-life" element={<CampusLife />} />
                <Route path="/students" element={<Students />} />
                <Route path="/alumni" element={<Alumni />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>

            <Footer />
          </div>
        </div>
      )}
    </Router>
  );
}
