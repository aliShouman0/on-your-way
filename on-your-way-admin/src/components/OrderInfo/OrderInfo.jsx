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
  editApproved,
  picked,
  ended,
}) {
  return (
    <div className="bg-darker p-5 flex flex-col rounded-md text-white h-2/5 w-auto   my-5">
      <div className="flex items-center mt-2 mb-4 ">
        <div className="w-12 h-12  ">
          <img
            src={userImage}
            alt="userImage"
            className="rounded-full w-12 h-12"
          />
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
      <div className="border border-white border-opacity-40 p-3 mt-5 mb-2 rounded-lg w-full   ">
        <p className="text-sm text-white ">{description}</p>
      </div>
      {picked === 1 ? (
        <>
          <SharpInfoBoxes
            status={status}
            AverageTime={AverageTime}
            currentLocation={currentLocation}
          />
          <div className="flex w-full justify-between ">
            <button
              onClick={() => comments(id)}
              className="bg-white font-bold w-24 text-black p-2 text-xs disabled:bg-gray-500 disabled:cursor-not-allowed cursor-pointer"
              disabled={!ended}
            >
              Comments
            </button>
            <button
              onClick={() => piker(id)}
              className="bg-white font-bold w-24 text-black p-2 text-xs cursor-pointer"
            >
              Shipper
            </button>
            <button
              onClick={editApproved}
              className="bg-white font-bold w-24 text-black p-2 text-xs cursor-pointer"
            >
              {!approved ? "Approve" : "Reject"}
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={editApproved}
          className="bg-white font-bold w-full mt-2 text-black p-2 text-xs cursor-pointer"
        >
          {!approved ? "Approved" : "Disapprove"}
        </button>
      )}
    </div>
  );
}

export default OrderInfo;
