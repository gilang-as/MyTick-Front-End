import { GET_SEARCH_TICKETS } from "../config/Constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: false
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_SEARCH_TICKETS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_SEARCH_TICKETS}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${GET_SEARCH_TICKETS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default Auth;
