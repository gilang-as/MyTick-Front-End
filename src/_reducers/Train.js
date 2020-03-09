import { GET_TRAINS, ADD_TRAIN } from "../config/Constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  add_train: [],
  loading: false,
  error: false
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_TRAIN}_PENDING`:
    case `${GET_TRAINS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_TRAINS}_FULFILLED`:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case `${ADD_TRAIN}_REJECTED`:
    case `${GET_TRAINS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case `${ADD_TRAIN}_FULFILLED`:
      return {
        ...state,
        loading: false,
        add_train: action.payload
      };
    default:
      return state;
  }
};

export default User;
