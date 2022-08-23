import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Pages Imports
import HomePage from "./pages/HomePage";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import ForgotPassword from "./pages/Auth/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* Auth Pages */}
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/password-reset" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
