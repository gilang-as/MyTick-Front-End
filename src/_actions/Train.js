import { GET_TRAINS, ADD_TRAIN } from "../config/Constants";
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
export const actionAddTrain = data => {
  return {
    type: ADD_TRAIN,
    payload: async () => {
      const res = await API.post(`/train`, data);
      return res.data;
    }
  };
};
