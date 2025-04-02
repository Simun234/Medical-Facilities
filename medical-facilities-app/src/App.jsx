import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutUs";
import SanitaryDisinfectant from "./pages/sanitary-disinfectant";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about-page" element={<AboutPage />} />
        <Route path="sanitary-disinfectant" element={<SanitaryDisinfectant />} />
      </Routes>
    </Router>
  )
}

export default App
