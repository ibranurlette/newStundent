import { AUTH } from "../config/constans";

// Setup Reducer for Redux
const initialState = {
  authenticated: false,
  error:null,
  isLogin:false,
  loading: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case `${AUTH}_PENDING`:
      return {
        ...state,
        error:null,
        loading: true
      };
    case `${AUTH}_FULFILLED`:
      return {
        ...state,
        authenticated: true,
        data: action.payload,
        error:null,
        isLogin:true,
        loading:false
      };
    case `${AUTH}_REJECTED`:
      return {
        ...state,
         loading:false,
        error: action.payload.response.data.message
      };
    default:
      return state;
  }
};

export default auth;
