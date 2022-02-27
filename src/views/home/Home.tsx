import { Suspense, lazy } from "react";
import "./home.css";
import Banner from "../../components/banner/Banner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading";

interface Category {
  name: string;
  src: string;
  link: string;
}

const categories: Category[] = [
  {
    name: "Main course",
    src: "/src/assets/img/steak.jpg",
    link: "/categories/main-course",
  },
  {
    name: "Side dish",
    src: "/src/assets/img/side-dish.jpg",
    link: "/categories/side-dish",
  },
  {
    name: "Desserts",
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
        {categories.map(({ name, src, link }) => (
          <Link to={link}>
            <div className="category center-items">
              <div className="image">
                <LazyLoadImage src={src} effect="blur" />
              </div>
              <h2 className="category-name">{name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
