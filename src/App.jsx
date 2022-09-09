import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Pages Imports
import HomePage from "./pages/HomePage";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import CheckEmail from "./pages/Auth/CheckEmail";
import ResetPassword from "./pages/Auth/ResetPassword";
import Success from "./pages/Auth/Success";

import MusicPlayer from "./pages/MusicPlayer";
import Trending from "./pages/MusicPlayer/Trending/index.";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* Auth Pages */}
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/password-reset" element={<ForgotPassword />} />
        <Route exact path="/new-password" element={<ResetPassword />} />
        <Route exact path="/reset-success" element={<Success />} />
        <Route exact path="/check-email" element={<CheckEmail />} />

        <Route exact path="/app" element={<MusicPlayer />}>
          <Route exact path="trending" element={<Trending />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
