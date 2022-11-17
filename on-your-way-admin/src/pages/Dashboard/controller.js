import colors from "../../constants/colors";

export const extractor = (data, key) => {
  return data.map(function (element) {
    return element[key];
  });
};

export const options = {
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

export const loadRate = (data) => {
  const usersRateNames = extractor(data, "name");
  const rate = extractor(data, "rate");
  const orderCount = extractor(data, "order_count");
  const rates = rate.map((el, i) => el / orderCount[i]);
  const userRateData = {
    labels: usersRateNames,
    datasets: [
      {
        label: "User/Rate",
        data: rates,
        backgroundColor: colors.darker,
      },
    ],
  };
  const userOrderCountData = {
    labels: usersRateNames,
    datasets: [
      {
        label: "User/Order Count",
        data: orderCount,
        backgroundColor: colors.white,
      },
    ],
  };
  return { userOrderCountData, userRateData };
};

export const loadProfit = (data) => {
  const usersProfitNames = extractor(data, "name");
  const profit = extractor(data, "profit");
  const dataProfit = {
    labels: usersProfitNames,
    datasets: [
      {
        label: "User/Profits",
        data: profit,
        backgroundColor: colors.secondary,
      },
    ],
  };
  return dataProfit;
};
