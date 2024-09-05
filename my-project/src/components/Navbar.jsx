import { Tooltip } from "flowbite-react";
import React from "react";
import { HiChat } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <div className="border-b-2 shadow-lg w-full top-0 left-0 h-16 flex items-center justify-between px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50">
      
      <img
        src="/Sanrakshak_1.png"
        alt="Logo"
        className="h-full object-contain cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:rotate-6"
      />

      <div className="flex mx-auto space-x-10">
        
        <span className="relative cursor-pointer text-lg font-semibold text-white before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300 before:ease-in-out" onClick={() => navigate('/')}>
          Home
        </span>

        <span className="relative cursor-pointer text-lg font-semibold text-white before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300 before:ease-in-out" onClick={() => navigate('/show-disaster')}>
          Disaster
        </span>

        <span className="relative cursor-pointer text-lg font-semibold text-white before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300 before:ease-in-out" onClick={() => navigate('/show-dashboard')}>
          Dashboard
        </span>

        <span className="relative cursor-pointer text-lg font-semibold text-white before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-white hover:before:w-full before:transition-all before:duration-300 before:ease-in-out" onClick={() => navigate('/about-us')}>
          About Us
        </span>
        
      </div>

      <Tooltip content="Chat with our chatbot for tips and help!">
        {/* Darker color on hover */}
        <HiChat className="cursor-pointer text-3xl text-white hover:text-indigo-800 transition duration-300" />
      </Tooltip>
      
    </div>
  );
}
