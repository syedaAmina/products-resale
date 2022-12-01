import React from "react";
import useTitle from "../../hooks/useTitle";
import AboutUs from "./AboutUs";
import AdvertisedMent from "./AdvertisedMent";
import Category from "./Category";

import Hero from "./Hero";

const Home = () => {
  useTitle("Car Bazar");
  return (
    <section>
      <Hero />
      <AdvertisedMent />
      <Category />
      <AboutUs />
    </section>
  );
};

export default Home;
