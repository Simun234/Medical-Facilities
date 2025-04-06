import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutUs";
import SanitaryDisinfectant from "./pages/sanitary-disinfectant";
import SanitaryForm from './pages/sanitary-form';
import CallUs from "./pages/Call-us";
import EmailUs from "./pages/Email-us";
import Rewiev from './pages/Rewiev-service';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about-page" element={<AboutPage />} />
        <Route path="sanitary-disinfectant" element={<SanitaryDisinfectant />} />
        <Route path="sanitary-form" element={<SanitaryForm />} />
        <Route path="call-us" element={<CallUs />} />
        <Route path="email-us" element={<EmailUs />} />
        <Route path="rewiev-service" element={<Rewiev />} />
      </Routes>
    </Router>
  )
}

export default App
