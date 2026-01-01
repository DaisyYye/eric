import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Services from './Services';
import './css/App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/services" element={<Services/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
