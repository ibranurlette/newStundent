import { ADD_BAYAR,GETALLBAYAR } from "../config/constans";

// Setup Reducer for Redux
const initialState = {
  data: [],
  error: false,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_BAYAR}_PENDING`:
    case `${GETALLBAYAR}_PENDING`:
      return {
        ...state,
          loading: true
      };
    case `${ADD_BAYAR}_FULFILLED`:
    case `${GETALLBAYAR}_FULFILLED`:
      return {
        ...state,
          loading: false,
        data: action.payload,
        error: false,
      };
    case `${ADD_BAYAR}_REJECTED`:
    case `${GETALLBAYAR}_REJECTED`:
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
