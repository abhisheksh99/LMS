import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/student/HeroSection";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <main>
      
      <Routes>
         {/* Home page */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HeroSection />} />
        </Route>
         {/* Login page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default App;