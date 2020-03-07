import { GET_STATIONS } from "../config/Constants";
import { API } from "../config/Api";

export const actionGetStations = () => {
  return {
    type: GET_STATIONS,
    payload: async () => {
      const res = await API.get(`/stations`);
      return res.data.data;
    }
  };
};
