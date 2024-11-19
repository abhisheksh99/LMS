import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HeroSection from "./pages/student/HeroSection";
import MainLayout from "./layout/MainLayout";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      {/* Content */}
      <div className="flex-grow mt-16 px-4">
        <Routes>
          {/* Home page */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HeroSection />} />
          </Route>
          {/* Login page */}
          <Route path="/login" element={<Login />} />
          {/* My Learning */}
          <Route path="/my-learning" element={<MyLearning />} />
          {/* Profile */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
