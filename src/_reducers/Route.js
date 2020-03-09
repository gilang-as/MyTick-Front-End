import { GET_ROUTES, ADD_ROUTE } from "../config/Constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  add_route: [],
  loading: false,
  error: false
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_ROUTE}_PENDING`:
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
    case `${ADD_ROUTE}_REJECTED`:
    case `${GET_ROUTES}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };

    case `${ADD_ROUTE}_FULFILLED`:
      return {
        ...state,
        loading: false,
        add_route: action.payload
      };
    default:
      return state;
  }
};

export default User;
