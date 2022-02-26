import { Suspense, lazy } from 'react';
import './home.css'
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Heading from '../../components/Heading';


const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Heading title="Categories" />
      <div className="categories">
        <div className="category">
          <LazyLoadImage src="/src/assets/img/steak.jpg" effect="blur"/>
        </div>
        <div className="category">
          <LazyLoadImage src="/src/assets/img/side-dish.jpg" effect="blur"/>
        </div>
        <div className="category">
          <LazyLoadImage src="/src/assets/img/desert.jpg" effect="blur"/>
        </div>
      </div>
    </>
  );
};

export default Home;
