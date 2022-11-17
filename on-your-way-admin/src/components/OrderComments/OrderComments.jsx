import React from "react";
import InputBox from "../InputBox/InputBox";
import Rate from "../Rate/Rate";

function OrderComments({
  pikerImage,
  PikerName,
  pikerRate,
  pikerComment,
  ReceiverImage,
  ReceiverName,
  ReceiverRate,
  ReceiverComment,
  close,
}) {
  return (
    <div className="fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] h-screen w-screen z-[1000]">
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-12 bg-primary h-auto w-auto  rounded-lg">
        <button
          onClick={close}
          className="absolute top-3 left-3 text-lg text-white font-extrabold"
        >
          X
        </button>
        <div className="flex items-center  justify-evenly h-full w-full mx-5">
          <div className="flex flex-col  items-center">
            <div className="w-1/2 h-1/4 ">
              <img src={pikerImage} alt="userImage" />
            </div>
            <InputBox
              type="text"
              value={PikerName}
              placeholder="Full Name"
              disabled={true}
            />
            <InputBox
              type="text"
              value={pikerComment}
              placeholder="Comments"
              disabled={true}
              textarea={true}
            />
            <Rate rate={pikerRate} size={24} />
          </div>
          <div className="flex flex-col  items-center mx-5">
            <div className="w-1/2 h-1/4 ">
              <img src={ReceiverImage} alt="userImage" />
            </div>
            <InputBox
              type="text"
              value={ReceiverName}
              placeholder="Full Name"
              disabled={true}
            />
            <InputBox
              type="text"
              value={ReceiverComment}
              placeholder="Comments"
              disabled={true}
              textarea={true}
            />
            <Rate rate={ReceiverRate} size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderComments;
