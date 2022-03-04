import { useState, useEffect } from "react";
import { recipeRequest } from "../../services/web-request";

interface Recipe {
  id: number;
  title: string;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  dishTypes: string[];
  instructions: string;
  analyzedInstructions: [];
}

const Featured = () => {
  const [recipes, setRecipes] = useState([]);

  const getRandomRecipe = async () => {
    const recipes = await recipeRequest.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    console.log(recipes);
    setRecipes((prev: any) => {
      return prev.push(recipes);
    });
    return recipes;
  };

  useEffect(() => {
    getRandomRecipe();
  }, []);

  return <div className="featured"></div>;
};

export default Featured;
