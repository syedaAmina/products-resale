import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "../../context/Context";
import useRedirect from "../../hooks/useRedirect";
import { createUserInDb } from "../../apis/authApiCall";

const SignIn = () => {
  const navigate = useNavigate();
  const redirect = useRedirect();
  const { createUser, updateUser, user, googleLogin } = Context();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { user } = await createUser(data.useremail, data.password);
      await updateUser(data.username);

      const newUser = {
        userName: user.displayName,
        userEmail: user.email,
        userRole: data.userrole,
      };
      await createUserInDb(newUser, false);
      setLoading(false);
      setError("");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [redirect, user, navigate]);
  return (
    <section className="py-10">
      <div className="container">
        <div className="lg:w-2/6 md:w-3/5 bg-white p-10 mx-auto rounded border-t-4 border-t-slate-900">
          <h1 className=" text-slate-500 text-center">Create Your Account</h1>
          {error && (
            <p className="p-2 bg-red-200 text-slate-900 my-3 ">{error}</p>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-4">
              <p className="text-sm text-slate-500 mb-1">
                <label htmlFor="email">Your Name</label>
              </p>
              <input
                type="text"
                className="bg-slate-100 w-full px-5 py-3 text-sm text-slate-700 focus:outline-none rounded placeholder:text-xs"
                placeholder="John Doe"
                {...register("username", {
                  required: true,
                })}
              />
            </div>
            <div className="my-4">
              <p className="text-sm text-slate-500 mb-1">
                <label htmlFor="email">Email Address</label>
              </p>
              <input
                type="email"
                className="bg-slate-100 w-full px-5 py-3 text-sm text-slate-700 focus:outline-none rounded placeholder:text-xs"
                placeholder="example@gmail.com"
                {...register("useremail", {
                  required: true,
                })}
              />
            </div>
            <div className="my-4">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm text-slate-500">
                  <label htmlFor="email">Password</label>
                </p>
              </div>
              <input
                type="password"
                className="bg-slate-100 w-full px-5 py-3 text-sm text-slate-700 focus:outline-none rounded placeholder:text-xs"
                placeholder="******"
                {...register("password", {
                  required: true,
                })}
              />
            </div>
            <div className="my-4">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm text-slate-500">
                  <label htmlFor="email">Your Role</label>
                </p>
              </div>
              <select
                id="countries"
                className="bg-slate-100 w-full px-5 py-3 text-sm text-slate-700 focus:outline-none rounded placeholder:text-xs"
                {...register("userrole", {
                  required: true,
                })}
                defaultValue="buyer"
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <div className="my-4">
              {loading ? (
                <button className="py-3 w-full text-gray-900 text-sm rounded px-5 bg-slate-300  capitalize">
                  Loading...
                </button>
              ) : (
                <input
                  type="submit"
                  className="cursor-pointer text-white w-full px-5 py-3 text-sm  focus:outline-none rounded placeholder:text-xs bg-slate-900"
                  value="SignIn"
                />
              )}
            </div>
            <div className="my-4">
              <p className="text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                  className="text-blue-500"
                  to={`/login?redirect=${redirect}`}
                >
                  Login
                </Link>
              </p>
            </div>
          </form>

          <button
            onClick={handleGoogleLogin}
            className="mt-2 w-full py-3 rounded bg-slate-200 text-slate-900 text-sm"
          >
            Signin with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
