import {DAFTART_DIRI, GETDAFTAR_DIRI, UPDATE_DAFTAR, GETALLDAFTAR_DIRI} from '../config/constans';
import {API,setAuthToken} from '../config/api';
export const Daftar_diri = data => {
  return {
    type: DAFTART_DIRI,
    payload: async () => {
      const res = await API.post("/daftar", data);
      const  {data2}  = res.data;
      return data2;
    }
  };
};


export const getDaftar = () => {
	const token = localStorage.getItem("token")
    setAuthToken(token);
  return {
    type: GETDAFTAR_DIRI,
    payload: async () => {
      const res = await API.get("/daftar");
      const data  = res.data;
      return data;
    }
  };
};
export const getAllDaftar = () => {
  const token = localStorage.getItem("token")
    setAuthToken(token);
  return {
    type: GETALLDAFTAR_DIRI,
    payload: async () => {
      const res = await API.get("/daftars");
      const data  = res.data;
      return data;
    }
  };
};

export const updateDaftar = (id, data2)=> {
  return {
    type: UPDATE_DAFTAR,
    payload: async () => {
      const res = await API.put(`/daftar/${id}`, data2);
      const {data} = res.data;
      return data;
    }
  };
};

