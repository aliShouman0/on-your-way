import React from "react";
import InputBox from "../InputBox/InputBox";
import Rate from "../Rate/Rate";

function PickerInfo({ image, email, name, phone, address, rate, close }) {
  return (
    <div className="fixed top-0 left-0  bg-[rgba(0,0,0,0.8)] h-screen w-screen z-[1000]">
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-8 bg-primary  h-auto w-auto   rounded-lg">
        <button
          onClick={close}
          className="absolute top-3 left-3 text-lg text-white font-extrabold"
        >
          X
        </button>
        <div className="flex items-center  justify-center h-full w-full">
          <div className="w-1/2 h-1/4 flex flex-col items-center justify-center mx-2 ">
            <img src={image} alt="userImage" className="mb-3 rounded-full" />
            <Rate rate={rate} size={24} />
          </div>
          <div className="w-1/2 h-full flex flex-col  items-center justify-center mx-2">
            <InputBox
              type="text"
              value={name}
              placeholder="Full Name"
              disabled={true}
            />
            <InputBox
              type="email"
              value={email}
              placeholder="Email"
              disabled={true}
            />
            <InputBox
              htmlFor="phone"
              type="text"
              value={phone}
              placeholder="phone"
              disabled={true}
            />
            <InputBox
              htmlFor="address"
              type="text"
              value={address}
              placeholder="Address"
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickerInfo;
