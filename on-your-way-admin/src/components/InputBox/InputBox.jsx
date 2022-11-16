import React from "react"; 

function InputBox({ value, setValue, type, htmlFor, placeholder }) {
  return (
    <div className="flex flex-col w-full my-3">
      <label htmlFor={htmlFor} className="text-white text-lg font-normal mb-2">
        {placeholder}
      </label>
      <input
        type={type}
        value={value}
        id={htmlFor}
        onChange={(e) => setValue(e.target.value)}
        className={`p-3 w-full border-none  outline-none rounded-lg `}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputBox;
