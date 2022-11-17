import React from "react";
import user from "../../assets/user.png";

function Navbar() {
  const userName = "Ali Alrida";
  return (
    <div className="flex fixed top-0 right-0 items-center justify-end w-full bg-primary p-3 z-10">
      <span className="mx-5 text-white text-base">{userName}</span>
      <div className="w-12 h-1/4 mr-1">
        <img src={user} alt="logo" />
      </div>
    </div>
  );
}

export default Navbar;
