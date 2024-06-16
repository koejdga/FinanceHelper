import { appAuth } from "@/firebaseConfig";
import axios from "axios";

axios.defaults.baseURL = "https://serverfinancehelper.onrender.com/api/";

axios.interceptors.request.use(async function (config) {
  const token = await appAuth.currentUser.getIdToken();
  console.log(token);
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getCategories = async () => {
  try {
    const res = await axios.get("users/getAllCategories");
    return [];
  } catch (e) {
    console.log("ERROR");
    console.log(e.message);
    return [];
  }
};

export const addCategory = async (name: string, limit: number | undefined) => {
  try {
    const res = await axios.get("users/getAllCategories");
    return [];
  } catch (e) {
    console.log("ERROR");
    console.log(e.message);
    return [];
  }
};
