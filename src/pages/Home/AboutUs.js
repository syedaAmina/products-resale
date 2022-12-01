import React from "react";
import { FaCarAlt, FaCaretSquareUp } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="lg:col-span-1">
            <img src="/images/hero.png" alt="" />
          </div>
          <div className="lg:col-span-1">
            <h1 className="font-bold uppercase text-2xl">Who We Are?</h1>
            <p className="text-slate-600 text-sm mt-2 max-w-md">
              Business Messenger and start delivering personalized experiences
              at every stage of the customer journey.
            </p>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
              <div className="col-span-1 grid grid-cols-4 items-center justify-center">
                <div className="col-span-1 flex items-center justify-center">
                  <FaCarAlt color="#0f172a" size="24" />
                </div>
                <div className="col-span-3">
                  <h4 className="text-xs font-bold text-slate-600">
                    Best Rate Guarantee
                  </h4>
                  <p className="text-slate-400 text-xs mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-4 items-center justify-center">
                <div className="col-span-1 flex items-center justify-center">
                  <FaCaretSquareUp color="#0f172a" size="24" />
                </div>
                <div className="col-span-3">
                  <h4 className="text-xs font-bold text-slate-600">
                    Awesome Customer Support
                  </h4>
                  <p className="text-slate-400 text-xs mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-4 items-center justify-center">
                <div className="col-span-1 flex items-center justify-center">
                  <FaCarAlt color="#0f172a" size="24" />
                </div>
                <div className="col-span-3">
                  <h4 className="text-xs font-bold text-slate-600">
                    Free Cancellation
                  </h4>
                  <p className="text-slate-400 text-xs mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-4 items-center justify-center">
                <div className="col-span-1 flex items-center justify-center">
                  <FaCarAlt color="#0f172a" size="24" />
                </div>
                <div className="col-span-3">
                  <h4 className="text-xs font-bold text-slate-600">
                    Your Best Security
                  </h4>
                  <p className="text-slate-400 text-xs mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-4 items-center justify-center">
                <div className="col-span-1 flex items-center justify-center">
                  <FaCarAlt color="#0f172a" size="24" />
                </div>
                <div className="col-span-3">
                  <h4 className="text-xs font-bold text-slate-600">
                    Third party not allow
                  </h4>
                  <p className="text-slate-400 text-xs mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col-span-1 grid grid-cols-4 items-center justify-center">
                <div className="col-span-1 flex items-center justify-center">
                  <FaCarAlt color="#0f172a" size="24" />
                </div>
                <div className="col-span-3">
                  <h4 className="text-xs font-bold text-slate-600">
                    Variety of Car Brands
                  </h4>
                  <p className="text-slate-400 text-xs mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
