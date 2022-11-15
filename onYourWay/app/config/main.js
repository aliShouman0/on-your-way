import axios from "axios";
import { useMutation } from "react-query";
import Toast from "react-native-root-toast";
import * as SecureStore from "expo-secure-store";
const baseUrl = "http://192.168.8.135:8000/api/ony";
const baseLink = "http://192.168.8.135:8000/storage/";

const postAPI = async (api_url, api_data, api_token = null) => {
  try {
    const result = await axios.post(api_url, api_data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer  " + api_token,
      },
    });
    if (result.data.refresh) {
      await save("access_token", result.data.refresh);
    }
    return result;
  } catch (error) {
    console.log("Error from POST API ", error);
    console.log("error.response ", error.response.data);
    return error.response.status;
  }
};

const getAPI = async (api_url, api_token) => {
  try {
    const result = await axios(api_url, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer  " + api_token,
      },
    });
    if (result.data.refresh) {
      await save("access_token", result.data.refresh);
    }
    return result;
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

const cancelOrder = async (data) => {
  const token = await SecureStore.getItemAsync("access_token");
  return await postAPI(`${baseUrl}/cancel_order`, data, token);
};

const receivedOrder = async (data) => {
  const token = await SecureStore.getItemAsync("access_token");
  return await postAPI(`${baseUrl}/received_order`, data, token);
};

const addOrder = async (data) => {
  const token = await SecureStore.getItemAsync("access_token");
  return await postAPI(`${baseUrl}/add_order`, data, token);
};

const getLocation = async (id) => {
  const token = await SecureStore.getItemAsync("access_token");
  return await getAPI(`${baseUrl}/get_location/${id}`, token);
};

const getMyPickup = async () => {
  const token = await SecureStore.getItemAsync("access_token");
  return await getAPI(`${baseUrl}/get_my_pickup`, token);
};

const addOrUpdatePickup = async (data) => {
  const token = await SecureStore.getItemAsync("access_token");
  return await postAPI(`${baseUrl}/add_update_pickup`, data, token);
};

const accessLocation = async (data) => {
  const token = await SecureStore.getItemAsync("access_token");
  return await postAPI(`${baseUrl}/access_location`, data, token);
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
  cancelOrder,
  receivedOrder,
  addOrder,
  getLocation,
  getMyPickup,
  addOrUpdatePickup,
  accessLocation, 
};
