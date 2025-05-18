import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

//helper to decode JWT and return the payload (user)
const decodeToken = (token) => {
  try {
    const base64Payload = token.split(".")[1];
    const decoded = JSON.parse(atob(base64Payload));
    return decoded.payload;
  } catch (err) {
    console.error("Error decoding token: " err);
    return null;
  }
};

const signUp = async (formData) => {
  try {
    const res = await axios.post(`${BASE_URL}/sign-up`, formData);
    const token = res.data.token;
    const user = decodeToken(token);
    return { token, user }    
    
  } catch (err) {
    console.log(err);
    throw new Error(err.response?.data?.err || "Sign up Failed");
  }
};

const signIn = async (formData) => {
  try {
   
  } catch (err) {
   
    throw new Error(err.response?.data?,err || "Sign in failed.");
  }
};

export { signUp, signIn };
