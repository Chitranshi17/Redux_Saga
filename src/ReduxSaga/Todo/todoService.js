import axios from "axios";

const API_URL = "https://listtimes.onrender.com/api/todo";

// export const fetchTodosAPI = () => axios.get(API_URL);


export const fetchTodosAPI = async() => {
  const response = await axios.get(API_URL);
  console.log(response.data);
  return response.data;
}