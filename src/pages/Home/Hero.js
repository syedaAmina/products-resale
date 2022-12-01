import React from "react";
import hero from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="hero mt-20 md-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={hero} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
        <div className="text-center">
          <h1 className="text-5xl font-bold">Resale Car!</h1>
          <p className="py-6">
            Find second-hand Car for sale near you at the best price. <br></br> Explore the wide range of used Car from top brands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
