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
import Home from "./pages/MusicPlayer/Home";
import Trending from "./pages/MusicPlayer/Trending/index.";
import TopMusic from "./pages/MusicPlayer/TopMusic";
import Blog from "./pages/MusicPlayer/Blog";
import Discover from "./pages/MusicPlayer/Discover";
import Genres from "./pages/MusicPlayer/Genres";
import Albums from "./pages/MusicPlayer/Albums";
import BrowseFeed from "./pages/MusicPlayer/BrowseFeed";
import Playlist from "./pages/MusicPlayer/Playlist";
import Uploads from "./pages/MusicPlayer/UpLoads";
import Events from "./pages/MusicPlayer/Events";

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
          <Route path="home" element={<Home />} />
          <Route path="trending" element={<Trending />} />
          <Route path="top-music" element={<TopMusic />} />
          <Route path="blog" element={<Blog />} />
          <Route path="discover" element={<Discover />} />
          <Route path="genres" element={<Genres />} />
          <Route path="albums" element={<Albums />} />
          <Route path="browse-feed" element={<BrowseFeed />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="uploads" element={<Uploads />} />
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
