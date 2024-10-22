import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Landing from './Landing';
import User from './User';

// Example components for routing
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <Landing />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/user/*" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
