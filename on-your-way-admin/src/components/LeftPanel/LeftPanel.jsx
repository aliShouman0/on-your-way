import React from "react";
import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { GrDropbox } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo-gold.png";

function LeftPanel({ active }) {
  const navigate = useNavigate();
  return (
    <aside className="fixed left-0 top-0 bg-darker h-screen w-1/4 flex flex-col items-center z-[100]   ">
      <div className="w-1/2 h-1/4 mt-6  ">
        <img src={logo} alt="Logo" />
      </div>

      <button
        className={`flex   justify-center mt-6  p-5 w-full ${
          active === "dashboard"
            ? "bg-secondary font-extrabold  text-black"
            : "bg-dark text-white"
        }`}
        onClick={() => navigate("/dashboard")}
      >
        <MdDashboard size={25} color="black" className="absolute left-12" />
        <span className="ml-5">Dashboard</span>
      </button>

      <button
        className={`flex   justify-center mt-8 p-5 w-full ${
          active === "users"
            ? "bg-secondary font-extrabold  text-black"
            : "bg-dark text-white"
        }`}
        onClick={() => navigate("/users")}
      >
        <HiUsers size={25} color="black" className="absolute left-12" />
        <span className="ml-5">Users</span>
      </button>

      <button
        className={`flex  justify-center mt-8 p-5 w-full ${
          active === "orders"
            ? "bg-secondary font-extrabold  text-black"
            : "bg-dark text-white"
        }`}
        onClick={() => navigate("/orders")}
      >
        <GrDropbox size={25} color="black" className="absolute left-12" />
        <span className="ml-5">Orders</span>
      </button>

      <button
        className={`flex justify-center mt-auto mb-10 p-3 w-3/4  rounded-full bg-dark text-white text-md `}
        onClick={() => navigate("/login")}
      >
        Logout
      </button>
    </aside>
  );
}

export default LeftPanel;
