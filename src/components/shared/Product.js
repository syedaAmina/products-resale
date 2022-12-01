import React, { useState } from "react";
import { GiClockwork } from "react-icons/gi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdLocationOn, MdReportOff } from "react-icons/md";
import { BsBagPlusFill, BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { Context } from "../../context/Context";
import Modal from "./Modal";
const Product = ({ productInfo }) => {
  const [showModal, setShowModal] = useState(false);
  const { user, wishlist } = Context();
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const {
    name,
    image,
    originalPrice,
    newPrice,
    usedYear,
    createdAt,
    _id,
    location,
    sellerInfo,
  } = productInfo;
  const navigate = useNavigate();
  const handleBooked = () => {
    if (!user) {
      navigate("/login");
    }
    setShowModal(true);
  };

  const handleWishList = (product) => {
    if (!user) {
      navigate("/login");
    }
    wishlist(product);
  };

  return (
    <div className="lg:col-span-1 w-full">
      {showModal && (
        <Modal product={{ name, _id, newPrice }} setShowModal={setShowModal} />
      )}

      <div className="bg-white rounded-md shadow overflow-hidden  cursor-pointer transition-all duration-300">
        <div className="relative">
          <img
            src={image}
            alt="car"
            className="rounded-t-md md:h-44 object-fit"
          />

          <small className="flex absolute top-3 p-1 gap-1 rounded left-3 bg-white text-slate-900 items-center  text-xs">
            <GiClockwork />
            {timeAgo.format(new Date(createdAt))}
          </small>
        </div>

        <div className="px-5 py-3 ">
          <div className="flex items-center gap-1 mb-2">
            <small className="flex items-center  text-xs text-slate-500 gap-1">
              <MdLocationOn />
              {location}
            </small>
            <small className="flex items-center  text-xs text-slate-500 gap-1">
              <FaRegCalendarCheck />
              {usedYear} year used
            </small>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-700">{name}</h3>
          </div>

          <div className="flex items-center gap-2 justify-between my-2">
            <div className="flex items-center gap-1">
              <div className="relative">
                <img
                  src="https://www.shareicon.net/data/2016/05/24/770107_man_512x512.png"
                  alt=""
                  className="h-8 w-8 rounded border border-slate-300"
                />
                {sellerInfo?.isVerified && (
                  <span className="-bottom-1 left-5 absolute inline-flex items-center p-1 mr-2 text-sm font-semibold text-white bg-blue-600 rounded-full  ">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Icon description</span>
                  </span>
                )}
              </div>
              <div className="text-xs">
                <h2 className="text-slate-600 font-bold">
                  {sellerInfo?.userName}
                </h2>
                <p className="text-slate-500">{sellerInfo?.userRole}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xs line-throw text-slate-400 line-through">
                ${originalPrice}
              </h3>
              <h3 className="text-sm text-slate-600">${newPrice}</h3>
            </div>
          </div>
          <div className="flex items-center justify-start text-center mt-3 text-slate-400 mb-2">
            <div className="flex items-center gap-2">
              <button
                className="hover:text-slate-700 duration-200 transition-all h-8 w-8 rounded bg-gray-200 flex items-center justify-center"
                title="Book Now"
                onClick={() => {
                  handleBooked(_id);
                }}
              >
                <BsBagPlusFill size="16" />
              </button>
              <button
                className="hover:text-slate-700 duration-200 transition-all h-8 w-8 rounded bg-gray-200 flex items-center justify-center"
                title="Add to wishlist"
                onClick={() => handleWishList(productInfo)}
              >
                <BsHeart size="16" />
              </button>
              <button
                className="hover:text-slate-700 duration-200 transition-all h-8 w-8 rounded bg-gray-200 flex items-center justify-center"
                title="Report to admin"
              >
                <MdReportOff size="16" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
