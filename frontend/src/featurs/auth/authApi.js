import axios from 'axios'
import Failed from '../../helpers/Failed';
import Success from '../../helpers/Success';

const authApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const signupApi = async (userDetails) => {
    try {
        const res = await authApi.post(`/api/signup`, userDetails);;
        Success(res.data.messagge)
    } catch (error) {
        Failed(error.response.data.message ? error.response.data.message : error.message);
    }
}

export default authApi;