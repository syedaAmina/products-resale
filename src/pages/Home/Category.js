import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { SiTesla, SiBmw, SiNissan } from "react-icons/si";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="py-10 bg-white mt-20 md-20">
      <div className="container">
        <div className="max-w-md mb-5 mx-auto text-center ">
          <h1 className="font-bold uppercase text-2xl"> Categories</h1>
        </div>

        <div className="flex items-center justify-center gap-5">
          <Link to={`/login?redirect=/category/tesla`} className="flex items-center gap-2 px-4 py-3 bg-slate-300 rounded text-sm text-slate-700">
            <SiTesla color="#0f172a" />
            Tesla
          </Link>
          <Link to={`/login?redirect=/category/bmw`} className="flex items-center gap-2 px-4 py-3 bg-slate-300 rounded text-sm text-slate-700">
            <SiBmw color="#0f172a" />
            Bmw
          </Link>
          <Link to={`/login?redirect=/category/nissan`} className="flex items-center gap-2 px-4 py-3 bg-slate-300 rounded text-sm text-slate-700">
            <SiNissan color="#0f172a" />
            Nissan
          </Link>
          <button className="lg:flex hidden items-center gap-2 px-4 py-3 bg-slate-300 rounded text-sm text-slate-700">
            <BsPlusCircle color="#0f172a" />
            20+ Brand
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
