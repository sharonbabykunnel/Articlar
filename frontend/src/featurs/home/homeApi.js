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

export const getMyArticleApi = async (id) => {
    try {
        const res = await homeApi.get(`/api/home/getMyArticle/${id}`);
        console.log(res)
      Success(res.data.message);
      return res.data;
    } catch (error) {
      console.log("checking:error", error);
      Failed(error.response.data.message ? error.response.data.message : error.message);
    }
}

export const postArticleApi = async (text, files, userId, category, title) =>{
    try {
        const res = await homeApi.post(`/api/home/postArticle/`,{text,files,userId,category, title});
        console.log(res);
        Success(res.data.message);
        return res.data; 
    } catch (error) {
      console.log("checking:error", error);
      Failed(error.response.data.message ? error.response.data.message : error.message);
    }
}

export const updateArticleApi = async (id, text, files, category, title) => {
  try {
    const res = await homeApi.post(`/api/home/editArticle/`, {
      text,
      files,
      id,
      category,
      title
    });
    console.log(res);
    Success(res.data.message);
    return res.data;
  } catch (error) {
    console.log("checking:error", error);
    Failed(
      error.response.data.message ? error.response.data.message : error.message
    );
  }
};

export const likeArticleApi = async ( userId, id) =>{
    try {
        const res = await homeApi.post(`/api/home/likeArticle/${id}`,{userId});
        console.log(res);
        Success(res.data.message);
        return res.data; 
    } catch (error) {
      console.log("checking:error", error);
      Failed(error.response.data.message ? error.response.data.message : error.message);
    }
}

export const removeArticleApi = async ( userId, id) =>{
    try {
        const res = await homeApi.post(`/api/home/removeArticle/${id}`,{userId});
        console.log(res);
        Success(res.data.message);
        return res.data; 
    } catch (error) {
      console.log("checking:error", error);
      Failed(error.response.data.message ? error.response.data.message : error.message);
    }
}

export const deleteArticleApi = async ( id ) =>{
    try {
        const res = await homeApi.delete(`/api/home/deleteArticle/${id}`);
        console.log(res);
        Success(res.data.message);
        return res.data; 
    } catch (error) {
      console.log("checking:error", error);
      Failed(error.response.data.message ? error.response.data.message : error.message);
    }
}