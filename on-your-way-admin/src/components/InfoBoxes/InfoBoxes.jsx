import React from "react";

function InfoBoxes({ from, to, pay }) {
  return (
    <div className="flex w-full justify-between ">
      <div className="border border-x-zinc-50 p-1 rounded-lg w-24   ">
        <p className="text-xs font-extralight text-zinc-50">From</p>
        <p className="font-semibold">{from}</p>
      </div>
      <div className="border border-x-zinc-50 p-1 rounded-lg w-24 ml-2">
        <p className="text-xs font-extralight text-zinc-50">To</p>
        <p className="font-semibold">{to}</p>
      </div>
      <div className="border border-x-zinc-50 p-1 rounded-lg w-24 ml-2 ">
        <p className="text-xs font-extralight text-zinc-50">Pay</p>
        <p className="font-semibold">{pay}</p>
      </div>
    </div>
  );
}

export default InfoBoxes;
