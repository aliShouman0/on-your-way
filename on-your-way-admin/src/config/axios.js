import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const postAPI = async (url, data) => {
  try {
    const result = await axios.post(BASE_URL + url, data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Credentials": true,
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
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Credentials": true,
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

export const setVerifiedUser = async (data) => {
  return await postAPI("/set_verified_user", data);
};

export const searchUser = async (like) => {
  return await getAPI(`/search_user/${like}`);
};

export const getAllOrder = async () => {
  return await getAPI(`/get_all_order`);
};

export const searchOrder = async (like) => {
  return await getAPI(`/search_orders/${like}`);
}; 

export const setApprovedOrder = async (data) => {
  return await postAPI("/set_approved_order", data);
};