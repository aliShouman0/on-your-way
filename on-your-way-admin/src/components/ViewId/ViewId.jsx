import React from "react";

function ViewId({ frontImage, backImage, close }) {
  return (
    <div className="fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] h-screen w-screen z-[1000]">
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-12 bg-primary h-1/2 w-1/2  rounded-lg">
        <button
          onClick={close}
          className="absolute top-3 left-3 text-lg text-white font-extrabold"
        >
          X
        </button>
        <div className="flex justify-between items-center  h-full w-full ">
          <img
            src={frontImage}
            alt="frontImage"
            className="w-1/2 h-full mr-3 rounded-xl"
          />
          <img
            src={backImage}
            alt="backImage"
            className="w-1/2 h-full  rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default ViewId;
