import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Search({ value, setValue, placeholder}) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="p-3  border-none  outline-none rounded-md bg-primary text-white"
        placeholder={placeholder}
      />
      <AiOutlineSearch
        size={25}
        color="white"
        className="absolute top-3 right-3"
      />
    </div>
  );
}

export default Search;
