import colors from "../../constants/colors";

export const extractor = (data, key) => {
  return data.map(function (element) {
    return element[key];
  });
};
