import React from "react";
import { Context } from "../../context/Context";

const Welcome = () => {
  const { user } = Context();
  return (
    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-10">
      <div className="max-w-md text-center">
        <h2 className="font-extrabold text-2xl text-slate-900">
          Welcome {user?.userName}
        </h2>
        <p className="text-xl text-slate-600 font-semibold md:text-3xl">
          to your dashboard
        </p>
      </div>
    </div>
  );
};

export default Welcome;
