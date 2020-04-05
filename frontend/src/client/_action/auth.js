import {AUTH} from '../config/constans';
import {API} from '../config/api';

export const login = data => {
	console.log(data, "ini datanya")
  return {
    type: AUTH,
    payload: async () => {
      const res = await API.post("/login", data);
      console.log(res, "ini data res")
      const {token} = res.data;
      localStorage.setItem("token", token);
      return res.data;
    }
  };
};

export const register = data => {
  return {
    type: AUTH,
    payload: async () => {
        const res = await API.post("/register", data);
        const {token} = res.data;
         localStorage.setItem("token", token);
         return res.data;
    }

  };
};

