import { GET_ROUTES, ADD_ROUTE } from "../config/Constants";
import { API } from "../config/Api";

//Get All Pet by ID USER via Token
export const actionGetRoutes = () => {
  return {
    type: GET_ROUTES,
    payload: async () => {
      const res = await API.get(`/routes`);
      return res.data.data;
    }
  };
};
export const actionAddRoute = data => {
  return {
    type: ADD_ROUTE,
    payload: async () => {
      const res = await API.post(`/route`, data);
      return res.data;
    }
  };
};
