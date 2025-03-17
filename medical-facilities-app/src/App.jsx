import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutUs";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about-page" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App
