import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center my-20">
      <div className="spinner">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-slate-500"></div>
      </div>
    </div>
  );
};

export default Loader;
