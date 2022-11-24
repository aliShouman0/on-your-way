import React from "react"; 
import { BASE_STORAGE } from "../../constants/constants";

function Navbar({ error }) {
  const { name, avatar } = JSON.parse(localStorage.getItem("user_info"));
  return (
    <>
      {error && (
        <p className="fixed left-1/4 ml-3 top-3 z-[1000] text-lg font-bold text-secondary animate-pulse">
          *Some Thing Went Wrong
        </p>
      )}
      <div className="flex fixed top-0 right-0 items-center justify-end w-full bg-primary p-3 z-10">
        <span className="mx-5 text-white text-base">{name}</span>
        <div className="w-12 h-1/4 mr-1">
          <img
            src={`${BASE_STORAGE}/${avatar}`}
            alt="logo"
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
