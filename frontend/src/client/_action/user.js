import {GET_USERS} from "../config/constans";
import {API, setAuthToken} from "../config/api";

export const getUsers = () => {
    const token = localStorage.getItem("token")
    setAuthToken(token);
      return {
        type: GET_USERS,
        payload: async () => {
          const res = await API.get("/user")
          const data = res.data;
          return data;
        }
  };
};