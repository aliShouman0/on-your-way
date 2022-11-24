import React from "react";

function InfoBoxes({ from, to, pay }) {
  return (
    <div className="flex w-full justify-between ">
      <div className="border border-white border-opacity-40 p-1 rounded-lg w-24   ">
        <p className="text-xs   text-zinc-50 opacity-70">From</p>
        <p className="font-semibold">{from}</p>
      </div>
      <div className="border border-white border-opacity-40 p-1 rounded-lg w-24 ml-2">
        <p className="text-xs   text-zinc-50 opacity-70">To</p>
        <p className="font-semibold">{to}</p>
      </div>
      <div className="border border-white border-opacity-40 p-1 rounded-lg w-24 ml-2 ">
        <p className="text-xs   text-zinc-50 opacity-70">Pay</p>
        <p className="font-semibold">{pay}</p>
      </div>
    </div>
  );
}

export default InfoBoxes;
