import React from "react";
import { ImStarFull } from "react-icons/im";
import colors from "../../constants/colors";

function Rate({ rate, size ,text}) {
  const getStar = () => {
    const rows = [];
    for (let i = 0; i < rate; i++) {
      rows.push(
        <ImStarFull className="mr-2" color={colors.secondary} size={size} />
      );
    }
    for (let i = 0; i < 5 - rate; i++) {
      rows.push(
        <ImStarFull className="mr-2" color={colors.white} size={size} />
      );
    }
    return rows;
  };
  return (
    <div className="flex justify-center  items-center">
      <span className={text?"text-white text-center mt-1 mr-2":"hidden"}>{text}</span>
      {getStar()}
    </div>
  );
}
Rate.defaultProps = {
  size: -1,
};
export default Rate;
