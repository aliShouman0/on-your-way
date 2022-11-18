import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import Loading from "../../components/Loading/Loading";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import Navbar from "../../components/Navbar/Navbar";
import { getUsersProfit, getUsersRate } from "../../config/axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loadProfit, loadRate, options } from "./controller";

function Dashboard() {
  const navigate = useNavigate();
  const [rateBar, setRateBar] = useState("");
  const [orderCountBar, setorderCountBar] = useState("");
  const [profitBar, setProfitBar] = useState("");
  const [error, setError] = useState(false);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const {
    isLoading,
    data: result,
    isError,
  } = useQuery(["users"], getUsersRate);

  const {
    isLoading: loading,
    data: resultProfit,
    isError: isErrorGetProfit,
    refetch,
  } = useQuery(["profit"], getUsersProfit, {
    refetchOnMount: false,
    retryOnMount: true,
    enabled: false,
  });

  useEffect(() => {
    if (result && result.status === 200) {
      if (result.data.status === 1) {
        const { userOrderCountData, userRateData } = loadRate(result.data.data);
        setRateBar(
          <Bar
            options={options}
            data={userRateData}
            width={25}
            height={15}
            className="m-10"
          />
        );
        setorderCountBar(
          <Bar
            options={options}
            data={userOrderCountData}
            width={25}
            height={15}
            className="m-10"
          />
        );
        refetch();
      } else setError(true);
    } else if (!isLoading) setError(true);
    if (result === 401) {
      navigate("/login");
      return;
    }
  }, [result]);

  useEffect(() => {
    if (resultProfit && resultProfit.status === 200) {
      if (resultProfit.data.status === 1) {
        const dataProfit = loadProfit(resultProfit.data.data);
        setProfitBar(
          <Bar
            options={options}
            data={dataProfit}
            width={25}
            height={15}
            className="m-10"
          />
        );
      } else setError(true);
    } else if (!loading) setError(true);
    if (result === 401) {
      navigate("/login");
      return;
    }
  }, [resultProfit]);

  return (
    <div className=" w-full h-screen bg-dark   overflow-x-hidden ">
      <Navbar error={isError || isErrorGetProfit || error} />
      <LeftPanel active={"dashboard"} />
      <section className="absolute top-[10%] right-0 h-auto w-3/4 p-5 flex flex-col bg-dark  ">
        <p className="text-white text-4xl mt-5 font-bold text-left">
          Statistics
        </p>

        {isLoading || loading ? (
          <Loading small={true} />
        ) : (
          <div className="flex flex-col justify-center items-center">
            {rateBar}
            {orderCountBar}
            {profitBar}
          </div>
        )}
      </section>
    </div>
  );
}

export default Dashboard;
