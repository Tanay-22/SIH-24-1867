import { Button } from "flowbite-react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Disaster from "./pages/disaster/Disaster";
import Dashboard from "./pages/dashboard/Dashboard";
import AboutUs from "./pages/aboutUs/AboutUs";
import AlertForm from "./components/AlertForm";

import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-disaster" element={<Disaster />} />
        <Route path="/show-dashboard" element={<Dashboard />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
