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
