import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdBarChart } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { Context } from "../../context/Context";
const Header = () => {
  const { user, logOutUser } = Context();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setShowMobileNav(false);
  }, [location.pathname]);
  return (
    <header className="header py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex  flex-col">
            <h2 className="text-xl -mb-1 tracking-widest font-bold underline text-slate-900">Car Bazar</h2>
            <p className="text-xs tracking-tighter	mt-0 text-gray-600">used car sell buy</p>
          </div>

          <ul className="lg:flex items-center gap-5 text-sm hidden">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={logOutUser} className="bg-slate-900 hover:bg-slate-800 rounded py-2.5  px-8  text-white text-sm">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="bg-slate-900 hover:bg-slate-800 rounded py-2.5  px-8  text-white text-sm">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>

          <div className="lg:hidden text-white">
            <button className="-rotate-90 text-slate-900" onClick={() => setShowMobileNav(!showMobileNav)}>
              <MdBarChart size={32} />
            </button>

            <div className={`w-full sm:w-1/2 ${showMobileNav ? "translate-x-0" : "translate-x-full"} duration-300 transition-all  fixed top-0 right-0 bg-slate-900 h-full z-10`}>
              <div className="flex items-center justify-between px-8 py-10">
                <div className="flex  flex-col">
                  <h2 className="text-xl -mb-1 tracking-widest font-bold underline ">UNICAR</h2>
                  <p className="text-xs tracking-tighter	mt-0 text-gray-500">Your favorite car</p>
                </div>
                <button onClick={() => setShowMobileNav(!showMobileNav)}>
                  <FaTimes color="#4b5563" size="24" />
                </button>
              </div>
              <ul className="flex flex-col lg:hidden items-center justify-center h-2/3 gap-5 text-xl ">
                <li>
                  <Link className=" hover:text-slate-400 transition-all duration-100 hover:border-b-2 border-slate-500 pb-2" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className=" hover:text-slate-400 transition-all duration-100 hover:border-b-2 border-slate-500 pb-2" to="/blog">
                    Blog
                  </Link>
                </li>
                {user ? (
                  <>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <button onClick={logOutUser} className="bg-red-900 hover:bg-red-800 rounded py-2.5  px-8  text-white text-sm">
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login" className="bg-slate-100 hover:bg-slate-200 rounded py-2.5  px-8  text-slate-900 text-sm">
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
