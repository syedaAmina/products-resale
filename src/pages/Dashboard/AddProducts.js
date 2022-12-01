import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createNewProduct } from "../../apis/productApiCall";
import toast from "react-hot-toast";
const AddProducts = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const previewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleImg = (e) => {
    const selectedImg = e.target.files[0];
    previewImage(selectedImg);
  };

  const onSubmit = async (data) => {
    const product = { ...data, image };
    setLoading(true);
    try {
      await createNewProduct(product);
      setLoading(false);
      setError("");
      toast.success("Product Added");
      navigate("/dashboard/products");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <>
      {error && <p className="p-2 bg-red-200 text-slate-900 my-3 ">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 items-center mb-4">
          <div className="w-full md:col-span-6">
            <input
              type="text"
              className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
              placeholder="title"
              {...register("name", {
                required: true,
              })}
            />
          </div>
          <div className="w-full md:col-span-2">
            <input
              type="number"
              className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
              placeholder="original price"
              {...register("originalPrice", {
                required: true,
              })}
            />
          </div>
          <div className="w-full md:col-span-2">
            <input
              type="number"
              className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
              placeholder="new price"
              {...register("newPrice", {
                required: true,
              })}
            />
          </div>
          <div className="w-full md:col-span-2">
            <input
              type="number"
              className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
              placeholder="purchase Year"
              {...register("purchaseYear", {
                required: true,
              })}
            />
          </div>
          <div className="w-full md:col-span-3">
            <input
              type="number"
              className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
              placeholder="used Year"
              {...register("usedYear", {
                required: true,
              })}
            />
          </div>
          <div className="w-full md:col-span-3">
            <input
              type="text"
              className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
              placeholder="phone number"
              {...register("phoneNumber", {
                required: true,
              })}
            />
          </div>
          <div className="w-full md:col-span-3">
            <select
              className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
              {...register("conditionType", {
                required: true,
              })}
            >
              <option>Choose condition</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
            </select>
          </div>
          <div className="w-full md:col-span-3">
            <select
              className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
              {...register("category", {
                required: true,
              })}
            >
              <option>Choose category</option>
              <option value="tesla">Tesla</option>
              <option value="bmw">Bmw</option>
              <option value="nissan">Nissan</option>
            </select>
          </div>
          <div className="w-full md:col-span-3">
            <input
              type="text"
              className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
              placeholder="location"
              {...register("location", {
                required: true,
              })}
            />
          </div>
          <div className="w-full md:col-span-3">
            <fieldset className="w-full dark:text-gray-100">
              <div className="flex">
                <input
                  type="file"
                  name="files"
                  id="files"
                  className="px-5 py-3.5 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
                  onChange={handleImg}
                />
              </div>
            </fieldset>
          </div>
          <div className="w-full md:col-span-6">
            <textarea
              type="text"
              {...register("description", {
                required: true,
              })}
              className="px-5 py-4 bg-white  w-full text-sm text-slate-600 placeholder:text-xs placeholder:text-gray-400 focus:outline-none"
              placeholder="description"
              rows="5"
            ></textarea>
          </div>
          <div className="w-full md:col-span-6 flex justify-end">
            {loading ? (
              <button className="bg-slate-200  px-5 py-3.5 rounded text-slate-900 text-sm">
                Loading...
              </button>
            ) : (
              <button className="bg-slate-900 px-5 py-3.5 rounded text-white text-sm">
                Add Product
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProducts;
