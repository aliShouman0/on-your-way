import React from "react";
import logo from "../../assets/logo-gold.png";

function Loading({ small=false }) {
  return (
    <div
      className={`${
        small ? " bg-dark h-full w-full" : "bg-primary h-screen w-screen "
      } overflow-hidden flex flex-col items-center justify-center text-center`}
    >
      <div className="w-1/6 h-1/6 my-20 animate-bounce   ">
        <img src={logo} alt="Logo" />
      </div>
      <p className="text-white  text-3xl my-10 animate-pulse ">Loading</p>
    </div>
  );
}

export default Loading;
