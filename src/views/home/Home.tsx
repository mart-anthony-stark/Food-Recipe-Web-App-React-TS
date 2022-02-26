import { Suspense, lazy } from 'react';
import './home.css'
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="categories">
        <div className="category">
          <LazyLoadImage src="/src/assets/img/steak.jpg" effect="blur"/>
        </div>
      </div>
    </>
  );
};

export default Home;
