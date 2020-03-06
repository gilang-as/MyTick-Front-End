import { GET_ROUTES } from "../config/Constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: false
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ROUTES}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_ROUTES}_FULFILLED`:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case `${GET_ROUTES}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default User;
