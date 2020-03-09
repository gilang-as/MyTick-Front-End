import { GET_STATIONS, ADD_STATION } from "../config/Constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  add_station: [],
  loading: false,
  error: false
};

const Station = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_STATION}_PENDING`:
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
    case `${ADD_STATION}_REJECTED`:
    case `${GET_STATIONS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case `${ADD_STATION}_FULFILLED`:
      return {
        ...state,
        loading: false,
        add_station: action.payload
      };
    default:
      return state;
  }
};

export default Station;
