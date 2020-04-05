import {ADD_BAYAR,GETALLBAYAR} from "../config/constans";
import {API,setAuthToken} from "../config/api";

export const addBayar = data => {
  return {
    type: ADD_BAYAR,
    payload: async () => {
      const res = await API.post("/bayar", data);
      const  {data2}  = res.data;
      return data2;
    }
  };
};

export const getAllBayar = () => {
  const token = localStorage.getItem("token")
    setAuthToken(token);
  return {
    type: GETALLBAYAR,
    payload: async () => {
      const res = await API.get("/bayar");
      const data  = res.data;
      return data;
    }
  };
};