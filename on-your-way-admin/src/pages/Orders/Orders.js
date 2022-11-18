import React, { useEffect, useState } from "react";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import Navbar from "../../components/Navbar/Navbar";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import PikerInfo from "../../components/PikerInfo/PikerInfo";
import OrderComments from "../../components/OrderComments/OrderComments";
import Search from "../../components/Search/Search";
import { getAllOrder, searchOrder, setApprovedOrder } from "../../config/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { BASE_STORAGE } from "../../constants/constants";

function Orders() {
  const navigate = useNavigate();
  const [pikerInfo, setPikerInfo] = useState(0);
  const [orderComments, setOrderComments] = useState(0);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [popUpData, setPopUpData] = useState({});
  const [popUpOpen, setPopUpOpen] = useState(0);

  const {
    isLoading,
    data: result,
    isError,
    refetch,
  } = useQuery(["allOrder"], getAllOrder);

  const {
    mutate: mutateSetApprovedOrder,
    isError: approvedOrderIsError,
    isLoading: approvedOrderIsLoading,
    data: approvedOrderResult,
  } = useMutation(setApprovedOrder);

  const {
    isLoading: searchOrderIsLoad,
    data: searchOrderResult,
    isError: searchOrderIsError,
    refetch: searchOrderRefetch,
    data: resultSearch,
    refetch: research,
  } = useQuery(["searchOrder"], () => searchOrder(search), { enabled: false });

  useEffect(() => {
    if (approvedOrderResult && approvedOrderResult.status === 200) {
      if (approvedOrderResult.data.status === 1) {
        refetch(); 
        setError(false);
      } else setError(true);
    } else if (!isLoading) setError(true);
    if (approvedOrderResult === 401) {
      navigate("/login");
      return;
    }
  }, [approvedOrderResult]);

  useEffect(() => {
    if (pikerInfo !== 0) {
      const res = data.find((item) => item.id === pikerInfo);
      setPopUpData(res);
      setPopUpOpen(1);
    }
    if (orderComments !== 0) {
      const res = data.find((item) => item.id === orderComments);
      setPopUpData(res); 
      setPopUpOpen(1);
    }
  }, [pikerInfo, orderComments]);

  useEffect(() => {
    if (result && result.status === 200) {
      if (result.data.status === 1) {
        setData(result.data.data); 
        setError(false);
      } else setError(true);
    } else if (!isLoading) setError(true);
    if (result === 401) {
      navigate("/login");
      return;
    }
  }, [result]);


  useEffect(() => {
    if (searchOrderResult && searchOrderResult.status === 200) {
      if (searchOrderResult.data.status === 1) {
        setData(searchOrderResult.data.data); 
        setError(false);
      } else setError(true);
    } else if (!searchOrderIsLoad) setError(true);
    if (searchOrderResult === 401) {
      navigate("/login");
      return;
    }
  }, [searchOrderResult]);

  useEffect(() => {
    if (search === "" || search === " ") {
      refetch();
    } else {
      research();
    }
  }, [search]);

  return (
    <div className=" w-full h-screen bg-dark   overflow-x-hidden ">
      <Navbar error={isError || error} />
      <LeftPanel active={"orders"} />
      {pikerInfo && popUpOpen && (
        <PikerInfo
          image={BASE_STORAGE + "/" + popUpData.pickup_info.picker_info.avatar}
          name={popUpData.pickup_info.picker_info.name}
          email={popUpData.pickup_info.picker_info.email}
          phone={popUpData.pickup_info.picker_info.phone}
          address={popUpData.pickup_info.picker_info.address}
          rate={
            popUpData.pickup_info.picker_info.rate /
            popUpData.pickup_info.picker_info.order_count
          }
          close={() => {
            setPopUpOpen(0);
            setPopUpData({});
            setPikerInfo(0);
          }}
        />
      )}
      {popUpOpen && orderComments && (
        <OrderComments
          pikerImage={
            BASE_STORAGE + "/" + popUpData.pickup_info.picker_info.avatar
          }
          PikerName={popUpData.pickup_info.picker_info.name}
          pikerRate={
            popUpData.ended_pickup_info.completed_pickup_info.picker_rated
          }
          pikerComment={
            popUpData.ended_pickup_info.completed_pickup_info.picker_comment
          }
          ReceiverImage={BASE_STORAGE + "/" + popUpData.user_info.avatar}
          ReceiverName={popUpData.user_info.name}
          ReceiverRate={
            popUpData.ended_pickup_info.completed_pickup_info.receiver_rated
          }
          ReceiverComment={
            popUpData.ended_pickup_info.completed_pickup_info.receiver_comment
          }
          close={() => {
            setPopUpOpen(0);
            setPopUpData({});
            setOrderComments(0);
          }}
        />
      )}
      <section className="absolute top-[10%] right-0 h-auto w-3/4 p-5 flex flex-col bg-dark  ">
        <div className="flex justify-between mt-5 items-center">
          <p className="text-white text-4xl  font-bold text-left">Orders</p>
          <Search
            value={search}
            setValue={setSearch}
            placeholder="Search Cities"
          />
        </div>
        <div className="flex flex-wrap justify-center items-center  mt-10">
          {isLoading ? (
            <Loading small={true} />
          ) : (
            data.map((order) => {
              const picker = order.picked ? order.pickup_info.picker_info : 0;
              const pickup = order.picked ? order.pickup_info : 0; 
              return (
                <OrderInfo
                  key={order.id}
                  picked={order.picked}
                  userImage={BASE_STORAGE + "/" + order.user_info.avatar}
                  userName={order.user_info.name}
                  mainImage={BASE_STORAGE + "/" + order.main_image}
                  image1={BASE_STORAGE + "/" + order.image1}
                  image2={BASE_STORAGE + "/" + order.image2}
                  description={order.description}
                  from={order.from}
                  to={order.to}
                  pay={order.pay}
                  status={pickup && pickup.status}
                  AverageTime={
                    pickup && new Date(pickup.arrived_time*1000).toLocaleDateString()
                  }
                  currentLocation={pickup && pickup.location}
                  piker={setPikerInfo}
                  comments={setOrderComments}
                  id={order.id}
                  ended={
                    order.picked && order.ended && order.pickup_info.completed
                  }
                  approved={order.approved}
                  editApproved={() => {
                    const data = new FormData();
                    data.append("order_id", order.id);
                    data.append("approved", order.approved ? 0 : 1);
                    mutateSetApprovedOrder(data);
                  }}
                />
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}

export default Orders;
