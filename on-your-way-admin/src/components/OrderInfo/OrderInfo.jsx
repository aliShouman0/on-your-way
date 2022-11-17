import React from "react";
import InfoBoxes from "../InfoBoxes/InfoBoxes"; 
import SharpInfoBoxes from "../SharpInfoBoxes/SharpInfoBoxes";

function OrderInfo({
  id,
  userImage,
  userName,
  mainImage,
  image1,
  image2,
  description,
  from,
  to,
  pay,
  status,
  AverageTime,
  currentLocation,
  piker,
  comments,
  approved,
  editApproved
}) {
  return (
    <div className="bg-darker p-5 flex flex-col rounded-md text-white w-30 m-5">
      <div className="flex items-center mt-2 mb-4 ">
        <div className="w-12 h-1/5  ">
          <img src={userImage} alt="userImage" />
        </div>
        <span className="text-md ml-5">{userName}</span>
      </div>
      <InfoBoxes from={from} to={to} pay={pay} />
      <div className="flex justify-between mt-4  w-full h-3/4">
        <img src={mainImage} alt="mainImage" className="w-24 h-20 rounded-md" />
        <img
          src={image1}
          alt="mainImage"
          className="w-24 ml-2 h-20 rounded-md"
        />
        <img
          src={image2}
          alt="mainImage"
          className="w-24 ml-2 h-20 rounded-md"
        />
      </div>
      <div className="border border-x-zinc-50 p-3 mt-5 mb-2 rounded-lg w-full   ">
        <p className="text-sm text-zinc-50">{description}</p>
      </div>
      <SharpInfoBoxes
        status={status}
        AverageTime={AverageTime}
        currentLocation={currentLocation}
      />
      <div className="flex w-full justify-between ">
        <button
          onClick={() => comments(id)}
          className="bg-white w-24 text-black p-2 font-semibold text-xs cursor-pointer"
        >
          Comments
        </button>{" "}
        <button
          onClick={() => piker(id)}
          className="bg-white w-24 text-black p-2 font-semibold text-xs cursor-pointer"
        >
          Picker
        </button>{" "}
        <button
          onClick={editApproved}
          className="bg-white w-24 text-black p-2 font-semibold text-xs cursor-pointer"
        >
         {approved? "Approved":"Disapprove"}
        </button>
      </div>
    </div>
  );
}

export default OrderInfo;
