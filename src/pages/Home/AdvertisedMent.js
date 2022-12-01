import React from "react";
import Product from "../../components/shared/Product";
import { useQuery } from "@tanstack/react-query";
import { getAdvertisedProduct } from "../../apis/productApiCall";
import Loader from "../../components/shared/Loader";
const AdvertisedMent = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["advertisement"],
    queryFn: getAdvertisedProduct,
  });

  if (isLoading) {
    return <Loader />;
  } else if (isError) {
    return <p>{error}</p>;
  } else if (data.length === 0) {
    return null;
  } else {
    return (
      <div className="py-10">
        <div className="container">
          <div className="max-w-md mb-10 mx-auto text-center ">
            <h1 className="font-bold uppercase text-2xl">Advertised</h1>
            <p className="text-slate-600 text-sm mt-2">
              Business Messenger and start delivering personalized experiences
              at every stage of the customer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {data?.map((pd) => (
              <Product key={pd._id} productInfo={pd} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default AdvertisedMent;
