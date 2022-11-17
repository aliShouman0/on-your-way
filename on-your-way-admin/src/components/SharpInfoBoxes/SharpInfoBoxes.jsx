import React from "react";

function SharpInfoBoxes({ status, AverageTime, currentLocation }) {
  return (
    <div className="flex w-full justify-between items-center ">
      <div className=" w-24   ">
        <p className="text-xs font-extralight mb-3 text-zinc-50">Status</p>
        <p className="text-sm border border-x-zinc-50 p-2 h-10">{status}</p>
      </div>
      <div className=" w-24 ml-2">
        <p className="text-xs font-extralight mb-3 text-zinc-50">
          Average
          <br />
          Time
        </p>
        <p className="text-sm border mb-4 border-x-zinc-50 p-2 h-10">
          {AverageTime}
        </p>
      </div>
      <div className=" w-24 ml-2 ">
        <p className="text-xs font-extralight mb-3 text-zinc-50">
          Current <br />
          Location
        </p>
        <p className="text-sm border mb-4 border-x-zinc-50 p-2 h-10">
          {currentLocation}
        </p>
      </div>
    </div>
  );
}

export default SharpInfoBoxes;
