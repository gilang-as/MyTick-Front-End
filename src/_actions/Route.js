import { GET_ROUTES } from "../config/Constants";
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
