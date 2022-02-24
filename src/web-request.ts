import axios from "axios";

const host: string = "edamam-recipe-search.p.rapidapi.com";
const key: string = "6beb7eba69msh0e9a5664feff189p18af5ejsn08f8c1ca38ae";

const getRecipe = (url: string, payload: any) => {
  return axios.create({
    method: "GET",
    url,
    params: payload.params,
  });
};

export default {
  getRecipe,
};
