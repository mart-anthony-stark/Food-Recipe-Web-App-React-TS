import { Suspense, lazy } from "react";
import "./home.css";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
      <Navbar />
      <Banner />
      <Heading title="Categories" />
      <div className="categories">
        {categories.map(({ name, src }) => (
          <div className="category center-items">
            <div className="image">
              <LazyLoadImage src={src} effect="blur" />
            </div>
            <h3>{name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
