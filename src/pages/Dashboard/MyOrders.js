import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getOrders } from "../../apis/productApiCall";
import Loader from "../../components/shared/Loader";
import { useNavigate } from "react-router-dom";
const MyOrders = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  } else if (isError) {
    return <h1>{error}</h1>;
  } else if (!data?.length) {
    return (
      <div>
        <h1 className="text-xl font-bold uppercase">No Order</h1>
        <p className="text-slate-600 text-sm mt-1">You did not add any order</p>
      </div>
    );
  } else {
    return (
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs uppercase  text-slate-100 bg-slate-900">
            <tr>
              <th scope="col" className="py-5 px-6">
                Image
              </th>
              <th scope="col" className="py-5 px-6">
                Title
              </th>

              <th scope="col" className="py-5 px-6">
                Price
              </th>
              <th scope="col" className="py-5 px-6">
                <button>Payment status</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((pd) => {
              const { productInfo, _id, isPaid } = pd;

              return (
                <tr className="bg-white border-b border-t" key={_id}>
                  <td className="py-4 px-6">
                    <img
                      src={productInfo?.image}
                      alt={productInfo?.name}
                      className="h-10 w-12 rounded"
                    />
                  </td>
                  <td className="py-4 px-6">{productInfo?.name}</td>
                  <td className="py-4 px-6">${productInfo?.newPrice}</td>
                  <td className="py-4 px-6">
                    {isPaid ? (
                      <button className="bg-slate-100 text-slate-900 px-2 text-xs py-1 rounded">
                        Paid
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          navigate(`/payment/${_id}`, { state: pd })
                        }
                        to={`/payment/${_id}`}
                        className="bg-slate-900 text-white px-2 text-xs py-1 rounded"
                      >
                        Pay Now
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default MyOrders;
