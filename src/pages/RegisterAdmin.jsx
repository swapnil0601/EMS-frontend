import React from "react";
import Image from "../assets/register1.svg";
import { ArrowLeft } from "lucide-react";
const RegisterAdmin = () => {
  return (
    <div className="flex h-screen">
      <a href="/" className="absolute top-5 left-5">
        <ArrowLeft />
      </a>
      <div className="w-1/2 flex justify-center items-center">
        <div className="p-2 bg-white w-2/3">
          <h2 className="text-2xl font-semibold mb-4">
            Register as <span className="font-bold">Admin</span>
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded py-2 px-3"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded py-2 px-3"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded py-2 px-3"
              placeholder="Enter your Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
          <p className="mt-2">
            Already have an account?{" "}
            <a href="/login-admin" className="font-semibold">
              Login
            </a>
          </p>
        </div>
      </div>
      <div
        className="w-1/2 bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>
    </div>
  );
};
export default RegisterAdmin;
