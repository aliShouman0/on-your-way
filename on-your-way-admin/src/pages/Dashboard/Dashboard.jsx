import React from "react";
import { Bar } from "react-chartjs-2";
import colors from "../../constants/colors";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import LeftPanel from "../../components/LeftPanel/LeftPanel";
import Navbar from "../../components/Navbar/Navbar";

function Dashboard() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    legend: {
      labels: {
        fontColor: "white",
        color: "black",
        fontSize: 120,
      },
    },
    scales: {
      yAxes: {
        ticks: {
          beginAtZero: true,
          color: "black",
          fontSize: 12,
        },
      },
      xAxes: {
        ticks: {
          beginAtZero: true,
          color: "black",
          fontSize: 12,
        },
      },
    },
  };

  const labels = ["ALi", "Baker", "walaa", "Aya", "Mohammd", "Malak", "Alex"];

  const data = {
    labels,
    datasets: [
      {
        label: "User/Rate User/Cancel  pickup User/Profits",
        data: [8, 507, 143, 242, 586, 188, 479],
        backgroundColor: colors.darker,
      },
    ],
  };

  return (
    <div className=" w-full h-screen bg-dark   overflow-x-hidden ">
      <Navbar />
      <LeftPanel active={"dashboard"} />
      <section className="absolute top-[10%] right-0 h-auto w-3/4 p-5 flex flex-col bg-dark  ">
        <p className="text-white text-4xl mt-5 font-bold text-left">
          Statistics
        </p>
        <div className="flex flex-col justify-center items-center"></div>
      </section>
    </div>
  );
}

export default Dashboard;
