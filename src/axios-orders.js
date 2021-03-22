import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-4603b-default-rtdb.firebaseio.com/",
});

export default instance;
