import { DAFTART_DIRI,GETDAFTAR_DIRI,UPDATE_DAFTAR,GETALLDAFTAR_DIRI } from "../config/constans";

// Setup Reducer for Redux
const initialState = {
  data: [],
  error: false,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${DAFTART_DIRI}_PENDING`:
    case `${GETDAFTAR_DIRI}_PENDING`:
    case `${GETALLDAFTAR_DIRI}_PENDING`:
    case `${UPDATE_DAFTAR}_PENDING`:
      return {
        ...state,
          loading: true
      };
    case `${DAFTART_DIRI}_FULFILLED`:
    case `${GETDAFTAR_DIRI}_FULFILLED`:
    case `${GETALLDAFTAR_DIRI}_FULFILLED`:
    case `${UPDATE_DAFTAR}_FULFILLED`:
      return {
        ...state,
          loading: false,
        data: action.payload,
        error: false,
      };
    case `${DAFTART_DIRI}_REJECTED`:
    case `${GETDAFTAR_DIRI}_REJECTED`:
    case `${GETALLDAFTAR_DIRI}_REJECTED`:
    case `${UPDATE_DAFTAR}_REJECTED`:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
