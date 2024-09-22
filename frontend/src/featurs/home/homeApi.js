import axios from "axios";
import Failed from "../../helpers/Failed";
import Success from "../../helpers/Success";

const API_URL = import.meta.env.VITE_API_URL;
const homeApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setPreferenceApi = async (preferences,id) => {
    try {
        const res = await homeApi.post(`/api/auth/setPreferences/${id}`, { preferences });
        console.log(res)
      Success(res.data.message);
      return res.data;
    } catch (error) {
      console.log("checking:error", error);
      Failed(error.response.data.message ? error.response.data.message : error.message);
    }
}

export const getArticleApi = async (id) => {
    try {
        const res = await homeApi.get(`/api/home/getArticle/${id}`);
        console.log(res)
      Success(res.data.message);
      return res.data;
    } catch (error) {
      console.log("checking:error", error);
      Failed(error.response.data.message ? error.response.data.message : error.message);
    }
}