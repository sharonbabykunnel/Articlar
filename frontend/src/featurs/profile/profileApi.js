import axios from "axios";
import Failed from "../../helpers/Failed";
import Success from "../../helpers/Success";

const API_URL = import.meta.env.VITE_API_URL;
const profileApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const changePasswordApi = async (password, newPassword, userId) => {
  try {
    const res = await profileApi.post(`/api/profile/changePassword/`, {
      password,
      newPassword,
      userId,
    });
    Success(res.data.message);
    return res.data;
  } catch (error) {
    console.log("checking:error", error);
    Failed(
      error.response.data.message ? error.response.data.message : error.message
    );
  }
};

export const changePreferencesApi = async (preferences, id) => {
  try {
    const res = await profileApi.post(`/api/profile/changePreferences`, { preferences, id });
    Success(res.data.message);
    return res.data;
  } catch (error) {
    console.log("checking:error", error);
    Failed(
      error.response.data.message ? error.response.data.message : error.message
    );
  }
};

export const changeInformationApi = async (profile, id) => {
  try {
    const res = await profileApi.post(`/api/profile/changeProfile`, { profile,id });
    Success(res.data.message);
    return res.data;
  } catch (error) {
    console.log("checking:error", error);
    Failed(
      error.response.data.message ? error.response.data.message : error.message
    );
  }
};
