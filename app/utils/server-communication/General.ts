import { appAuth } from "@/firebaseConfig";
import axios, { AxiosError } from "axios";

axios.defaults.baseURL = "https://serverfinancehelper.onrender.com/api/";

axios.interceptors.request.use(async function (config) {
  const token = await appAuth.currentUser.getIdToken();
  // console.log(token);
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const err = error as AxiosError;
    console.log("Response error:", err);
    const url = err.request.responseURL as string;
    const path = url.replace(axios.defaults.baseURL, "");
    console.log("ERROR: error at path", path);
    const obj = JSON.parse(err.request._response);
    console.log("Error response message:", obj.message);
    return Promise.reject(error);
  }
);