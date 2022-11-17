import React from "react";
import InfoBoxes from "../InfoBoxes/InfoBoxes";
import PikerInfo from "../PikerInfo/PikerInfo";
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
     
    </div>
  );
}

export default OrderInfo;
