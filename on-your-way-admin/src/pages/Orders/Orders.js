import React, { useState } from "react";

import user from "../../assets/user.png";
import key from "../../assets/keyboard .jpg";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import Navbar from "../../components/Navbar/Navbar";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import PikerInfo from "../../components/PikerInfo/PikerInfo";
import OrderComments from "../../components/OrderComments/OrderComments";
import Search from "../../components/Search/Search";

function Orders() {
  const [pikerInfo, setPikerInfo] = useState(0);
  const [orderComments, setOrderComments] = useState(0);
  const [search, setSearch] = useState("");
  return (
    <div className=" w-full h-screen bg-dark   overflow-x-hidden ">
      <Navbar />
      <LeftPanel active={"orders"} /> 
      <section className="absolute top-[10%] right-0 h-auto w-3/4 p-5 flex flex-col bg-dark  ">
        <div className="flex justify-between mt-5 items-center">
          <p className="text-white text-4xl  font-bold text-left">Orders</p>
          <Search value={search} setValue={setSearch} placeholder="Search" />
        </div>
        <div className="flex flex-wrap justify-center items-center  mt-10">
          <OrderInfo
            userImage={user}
            userName={"Ali"}
            mainImage={key}
            image1={key}
            image2={key}
            description={"description"}
            from={"leb"}
            to={"be"}
            pay={"1700"}
            status={"na"}
            AverageTime={"Time"}
            currentLocation={"Location"}
            piker={setPikerInfo}
            comments={setOrderComments}
            id={10}
          />
        </div>
      </section>
    </div>
  );
}

export default Orders;
