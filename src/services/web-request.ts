import axios from "axios";


const getRequest = (url: string, payload: any) => {
  return axios.create({
    method: "GET",
    url,
    params: payload.params,
  });
};

export default {
  getRequest,
};
