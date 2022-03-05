import { useState, useEffect } from "react";
import { recipeRequest } from "../../services/web-request";

interface IRecipes {
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
  const [recipes, setRecipes] = useState<any>([]);

  const getRandomRecipe = async () => {
    const res = await recipeRequest.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const recipe = res.data.recipes[0];
    console.log(recipe);
    setRecipes([...recipes, recipe]);
    console.log("e", recipes);
  };

  useEffect(() => {
    getRandomRecipe();
  }, []);
  console.log(recipes);
  return (
    <div className="featured">
      {recipes.map((recipe: any) => {
        return <div>{recipe.title}</div>;
      })}
    </div>
  );
};

export default Featured;
