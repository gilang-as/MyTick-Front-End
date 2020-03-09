import { GET_SEARCH_TICKETS, BUY_TICKET } from "../config/Constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  buy_ticket: [],
  loading: false,
  error: false
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case `${BUY_TICKET}_PENDING`:
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
    case `${BUY_TICKET}_REJECTED`:
    case `${GET_SEARCH_TICKETS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    case `${BUY_TICKET}_FULFILLED`:
      return {
        ...state,
        buy_ticket: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default Auth;
