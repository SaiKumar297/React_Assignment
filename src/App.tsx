import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'; // Import your custom CSS file
import NavBar from './components/NavBar';
import Header from './components/Header';
import Body from './components/Body';
import Cards from './components/Cards';


function App() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Header />
      </div>
      <div className={isFixed ? 'fixed-navbar' : ''}>
        <Body />
      </div>
      <div>
        <Cards />
      </div>
    </>
  );
}

export default App;
