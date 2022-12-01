import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import { createNewOrder, updateProduct } from "../../apis/productApiCall";
import { Context } from "../../context/Context";
import toast from "react-hot-toast";
const Modal = ({ product, setShowModal }) => {
  const { user } = Context();
  const { name, newPrice, _id } = product;
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBooked = async (data) => {
    setLoading(true);
    try {
      const orderInfo = {
        productInfo: _id,
        location: data.location,
        phoneNumber: data.phoneNumber,
      };
      await createNewOrder(orderInfo);
      await updateProduct(_id, { isSold: true });
      toast.success("Order Created");

      setLoading(false);
      setError("");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="modal bg-slate-800 py-14 px-10  rounded  text-black lg:w-2/5 w-5/6  shadow relative overflow-hidden transition-all duration-200">
      {error && <p className="p-2 bg-red-200 text-slate-900 my-3 ">{error}</p>}
      <button
        className="absolute right-0 top-0 p-2 bg-red-900 text-white "
        onClick={() => setShowModal(false)}
      >
        <FaTimes />
      </button>
      <form
        className="grid grid-cols-1 lg:grid-cols-2 gap-3"
        onSubmit={handleSubmit(handleBooked)}
      >
        <div className="lg:col-span-1 w-full">
          <input
            type="text"
            defaultValue={user?.displayName}
            readOnly
            className="px-2 py-3 rounded bg-white  w-full text-xs text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
            placeholder="title"
          />
        </div>
        <div className="lg:col-span-1 w-full">
          <input
            type="text"
            defaultValue={user?.email}
            readOnly
            className="px-2 py-3 rounded bg-white  w-full text-xs text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
            placeholder="title"
          />
        </div>
        <div className="lg:col-span-1 w-full">
          <input
            type="text"
            defaultValue={name}
            readOnly
            className="px-2 py-3 rounded bg-white  w-full text-xs text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div className="lg:col-span-1 w-full">
          <input
            type="text"
            defaultValue={newPrice}
            readOnly
            className="px-2 py-3 rounded bg-white  w-full text-xs text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div className="lg:col-span-1 w-full">
          <input
            type="text"
            className="px-2 py-3 rounded bg-white  w-full text-xs text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
            placeholder="your location"
            {...register("location", {
              required: true,
            })}
          />
        </div>
        <div className="lg:col-span-1 w-full">
          <input
            type="text"
            {...register("phoneNumber", {
              required: true,
            })}
            placeholder="your phone number"
            className="px-2 py-3 rounded bg-white  w-full text-xs text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
          />
        </div>
        <div className="lg:col-span-2 w-full">
          {loading ? (
            <button className="py-3 w-full text-gray-900 text-sm rounded bg-slate-300  capitalize">
              Loading...
            </button>
          ) : (
            <button className="bg-slate-900 text-white w-full py-3 rounded">
              Book Now
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Modal;
