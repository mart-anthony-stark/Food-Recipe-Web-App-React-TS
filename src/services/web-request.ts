import axios from "axios";

const BASE_URL = "https://spoonacular.com";

export const recipeRequest = axios.create({
  baseURL: BASE_URL,
});
