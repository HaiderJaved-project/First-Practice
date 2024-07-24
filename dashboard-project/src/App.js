import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import './index.css';//tailwind is inclyded

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark:bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <Router>
        <Navbar isDarkMode={isDarkMode} toggleMode={toggleMode} />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
