import axios from "axios";
const apiUrl = "http://localhost:3000/api/v1";

export const signup = async (data) => {
  const response = await axios.post(`${apiUrl}/signup`, data);
  return response.data;
};
