import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CoverPage from "./pages/CoverPage";
import MyTask from "./pages/MyTask";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import NavBar1 from "./components/NavBar1";
import { useState } from "react";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const baseURL = "https://task-app-sojn.onrender.com"; // you can change this to localhost:3000 to test and run on my server
  return (
    <>
      <Router>
        <Toaster position="top-center" />
        <NavBar1 />
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/tasks" element={<MyTask baseURL={baseURL} />} />
          <Route path="/new" element={<NewTask baseURL={baseURL} />} />
          <Route path="/edit/:id" element={<EditTask baseURL={baseURL} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
