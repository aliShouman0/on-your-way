import axios from "axios";
import { useMutation } from "react-query";
import Toast from "react-native-root-toast";
import * as SecureStore from "expo-secure-store";
const baseUrl = "http://192.168.8.135:8000/api/ony";
const baseLink = "http://192.168.8.135:8000/storage/";

const postAPI = async (api_url, api_data, api_token = null) => {
  try {
    return await axios.post(api_url, api_data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer  " + api_token,
      },
    });
  } catch (error) {
    console.log("Error from POST API ", error);
    console.log("error.response ", error.response.data);
    return error.response.status;
  }
};

const getAPI = async (api_url, api_token) => {
  try {
    return await axios(api_url, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer  " + api_token,
      },
    });
  } catch (error) {
    console.log("Error from POST API ", error);
    console.log("error.response ", error.response.data);
    return error.response.status;
  }
};

const signUp = async (data) => {
  return await postAPI(`${baseUrl}/signup`, data);
};

const login = async (data) => {
  return await postAPI(`${baseUrl}/login`, data);
};

const me = async (data) => {
  const token = await SecureStore.getItemAsync("access_token");
  return await postAPI(`${baseUrl}/me`, data, token);
};

const getMyOrder = async () => {
  const token = await SecureStore.getItemAsync("access_token");
  return await getAPI(`${baseUrl}/get_my_order`, token);
};

const save = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};

const OrderStatus = async (id) => {
  const token = await SecureStore.getItemAsync("access_token");
  return await getAPI(`${baseUrl}/get_pickup/${id}`, token);
};

export default {
  getAPI,
  postAPI,
  baseUrl,
  baseLink,
  signUp,
  login,
  me,
  getMyOrder,
  save,
  OrderStatus,
};
