import axios from "axios";
const baseUrl = "http://192.168.8.135:8000/api/ony";

const postAPI = async (api_url, api_data, api_token = null) => {
  try {
    return await axios.post(api_url, api_data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "token " + api_token,
      },
    });
  } catch (error) {
    console.log("Error from POST API ", error);
    console.log("error.response ", error.response);
    return error;
  }
};

const getAPI = async (api_url, api_token) => {
  try {
    return await axios(api_url, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "token " + token,
      },
    });
  } catch (error) {
    console.log("Error from get API ", error);
    console.log("error.response", error.response);
    return error;
  }
};

