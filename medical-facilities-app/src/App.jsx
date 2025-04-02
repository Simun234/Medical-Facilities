import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutUs";
import SanitaryDisinfectant from "./pages/sanitary-disinfectant";
import SanitaryForm from './pages/sanitary-form';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about-page" element={<AboutPage />} />
        <Route path="sanitary-disinfectant" element={<SanitaryDisinfectant />} />
        <Route path="sanitary-form" element={<SanitaryForm />} />
      </Routes>
    </Router>
  )
}

export default App
