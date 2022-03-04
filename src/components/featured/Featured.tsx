import { useState, useEffect } from "react";

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
  const [recipes, setRecipes] = useState();

  const getRandomRecipe = async () => {
      
  };

  useEffect(() => {}, []);

  return <div className="featured"></div>;
};

export default Featured;
