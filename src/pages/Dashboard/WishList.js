import React from "react";
import Product from "../../components/shared/Product";
import { Context } from "../../context/Context";

const WishList = () => {
  const { wishlistProduct } = Context();

  if (!wishlistProduct.length) {
    return (
      <div>
        <h1 className="text-xl font-bold uppercase">No Product in wishlist</h1>
        <p className="text-slate-600 text-sm mt-1">
          You did not add any product
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1  lg:grid-cols-3 gap-5">
      {[...wishlistProduct.filter((pd) => pd.isSold === false)]?.map((pd) => (
        <Product key={pd._id} productInfo={pd} />
      ))}
    </div>
  );
};

export default WishList;
