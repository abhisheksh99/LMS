import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HeroSection from "./pages/student/HeroSection";
import MainLayout from "./layout/MainLayout";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/admin/Dashboard";
import Sidebar from "./pages/admin/Sidebar";
import CourseTable from "./pages/admin/course/CourseTable";
import AddCourse from "./pages/admin/course/AddCourse";
import EditCourse from "./pages/admin/course/EditCourse";
import CreateLecture from "./pages/admin/lecture/CreateLecture";
import EditLecture from "./pages/admin/lecture/EditLecture";


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

          {/* Admin Routes */}
          <Route path="/admin" element={<Sidebar />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="courses" element={<CourseTable />} />
            <Route path="courses/create" element={<AddCourse/>} />
            <Route path="courses/:courseId" element={<EditCourse/>} />
            <Route path="courses/:courseId/lecture" element={<CreateLecture/>} />
            <Route path="courses/:courseId/lecture/:lectureId" element={<EditLecture/>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;