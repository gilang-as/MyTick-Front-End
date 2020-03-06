import { GET_TRAINS } from "../config/Constants";
import { API } from "../config/Api";

//Get All Pet by ID USER via Token
export const actionGetTrains = () => {
  return {
    type: GET_TRAINS,
    payload: async () => {
      const res = await API.get(`/trains`);
      return res.data.data;
    }
  };
};
