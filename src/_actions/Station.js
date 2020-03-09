import { GET_STATIONS, ADD_STATION } from "../config/Constants";
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
export const actionAddStation = data => {
  return {
    type: ADD_STATION,
    payload: async () => {
      const res = await API.post(`/station`, data);
      return res.data;
    }
  };
};
