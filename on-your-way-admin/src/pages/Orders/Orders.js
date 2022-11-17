import React from "react";

import LeftPanel from "../../components/LeftPanel/LeftPanel";
import Navbar from "../../components/Navbar/Navbar";

function Orders() {
  return (
    <div className=" w-full h-screen bg-dark   overflow-x-hidden ">
      <Navbar />
      <LeftPanel active={"orders"} />
      <section className="absolute top-[10%] right-0 h-auto w-3/4 p-5 flex flex-col bg-dark  ">
        <p className="text-white text-4xl mt-5 font-bold text-left">Orders</p>
        <div className="flex flex-col justify-center items-center"> </div>
      </section>
    </div>
  );
}

export default Orders;
