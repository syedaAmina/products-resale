import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
const NotFound = () => {
  useTitle("404");
  return (
    <section className="flex items-center h-full p-16  dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img src="/images/notfound.svg" alt="not" />
          <div className="mt-14">
            <p className="text-2xl text-slate-600 font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-400">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded dark:bg-slate-900 text-white"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
