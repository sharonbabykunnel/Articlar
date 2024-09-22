import axios from 'axios'
import Failed from '../../helpers/Failed';
import Success from '../../helpers/Success';

const API_URL = import.meta.env.VITE_API_URL;
const authApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const signupApi = async (userDetails) => {
  try {
    const res = await authApi.post(`/api/auth/signup`, userDetails);
    console.log(res,'res')  
    localStorage.setItem('accessToken', res.data.accessToken);
    Success(res.data.messagge);
    return res.data;
  } catch (error) {
    console.log("checking:error", error);
    Failed(
      error.res.data.message ? error.res.data.message : error.message
    );
  }
};

export const signinApi = async (userData) => {
    try {
        console.log(userData);
        const res = await authApi.post(`/api/auth/signin`, userData);
        console.log('res:cheking', res.data);
        Success(res.data.message)
        localStorage.setItem('accessToken', res.data.accessToken);
        return res.data
    } catch (error) {
        Failed(error.res.data.message ? error.res.data.message : error.message)
    }
}