import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? "#F1EFEF" : "#2D4356";
  };

  return (
    <>
      <Navbar title="TextEditor" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container my-3">
        <TextForm darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
