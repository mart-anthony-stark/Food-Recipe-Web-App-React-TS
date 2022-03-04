import { Suspense, lazy } from "react";
import "./home.css";
import Banner from "../../components/banner/Banner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading";

interface Category {
  name: string;
  description: string;
  src: string;
  link: string;
}

const categories: Category[] = [
  {
    name: "Main course",
    description:
      "Dinner usually consists of just one main course, often a meat dish with potatoes and a vegetable or salad.",
    src: "/src/assets/img/steak.jpg",
    link: "/categories/main-course",
  },
  {
    name: "Side dish",
    description:
      "Essentially any food served on the side of the plate or to the side of the main plate.",
    src: "/src/assets/img/side-dish.jpg",
    link: "/categories/side-dish",
  },
  {
    name: "Desserts",
    description:
      "Usually sweet course or dish (as of pastry or ice cream) usually served at the end of a meal.",
    src: "/src/assets/img/dessert.jpg",
    link: "/categories/dessert",
  },
];

const Home = () => {
  return (
    <>
      <Banner />
      <Heading title="Categories" />
      <div className="categories">
        {categories.map(({ name, description, src, link }) => (
          <Link to={link} key={name}>
            <div className="category center-items">
              <div className="image">
                <div className="overlay center-items">
                  <span>See Recipes</span>
                </div>
                <LazyLoadImage src={src} effect="blur" />
              </div>
              <h2 className="category-name">{name}</h2>
              <p className="description">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
