import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const postAPI = async (url, data) => {
  try {
    const result = await axios.post(BASE_URL + url, data, {
      headers: {
        Authorization: "Bearer  " + localStorage.getItem("access_token"),
      },
    });
    return result;
  } catch (error) {
    console.log("Error from POST API ", error);
    console.log("error.response ", error.response.data);
    return error.response.status;
  }
};

export const getAPI = async (url) => {
  try {
    const result = await axios(BASE_URL + url, {
      headers: {
        Authorization: "Bearer  " + localStorage.getItem("access_token"),
      },
    });
    return result;
  } catch (error) {
    console.log("Error from POST API ", error);
    console.log("error.response ", error.response.data);
    return error.response.status;
  }
};


export const postLogin = async (data) => {
  return await postAPI("/login", data);
};

export const getMyInfo = async () => {
  return await postAPI("/me");
};

export const getAllUsers = async () => {
  return await getAPI("/get_all_users");
};

export const getUsersRate = async () => {
  return await getAPI("/get_users_rate");
};

export const getUsersProfit = async () => {
  return await getAPI("/get_users_profit");
};
