import { GET_STATIONS } from "../config/Constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  loading: false,
  error: false
};

const Station = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_STATIONS}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${GET_STATIONS}_FULFILLED`:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case `${GET_STATIONS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default Station;
