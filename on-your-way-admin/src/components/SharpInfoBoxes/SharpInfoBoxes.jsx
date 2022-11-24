import React from "react";

function SharpInfoBoxes({ status, AverageTime, currentLocation }) {
  return (
    <div className="flex w-full justify-between items-center ">
      <div className=" w-24   ">
        <p className="text-xs  mb-2   text-zinc-50 opacity-70 ">
          Order
          <br />
          status
        </p>
        <p className="text-sm border border-white border-opacity-40  rounded-md  mb-4    p-2 h-10">
          {status}
        </p>
      </div>
      <div className=" w-24 ml-2">
        <p className="text-xs  mb-2   text-zinc-50 opacity-70 ">
          Arrival
          <br />
          time
        </p>
        <p className="text-sm border border-white border-opacity-40  rounded-md mb-4    p-2 h-10">
          {AverageTime}
        </p>
      </div>
      <div className=" w-24 ml-2 ">
        <p className="text-xs  mb-2   text-zinc-50 opacity-70 ">
          Current <br />
          location
        </p>
        <p className="text-sm border border-white border-opacity-40  rounded-md mb-4    p-2 h-10">
          {currentLocation}
        </p>
      </div>
    </div>
  );
}

export default SharpInfoBoxes;
