import { GET_SEARCH_TICKETS } from "../config/Constants";
import { API } from "../config/Api";

export const actionSearchTickets = data => {
  return {
    type: GET_SEARCH_TICKETS,
    payload: async () => {
      const res = await API.post("/search-tickets", data);
      return res.data;
    }
  };
};
