import React from "react";

const SelectLogin = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="w-1/2 h-screen p-4 flex justify-center items-center flex-col text-center bg-orange-500">
        <h2 className="text-5xl font-normal mb-4 text-white">
          For <span className="text-white font-bold">Admin</span>
        </h2>
        <a href="/login-admin">
          <button className=" text-white hover:bg-white hover:text-black w-fit font-bold py-2 px-8 rounded border-white border-2">
            Login
          </button>
        </a>
        <p className="text-white mt-4">
          Don't have an account?{" "}
          <a href="/register-admin" className="font-bold">
            Register
          </a>{" "}
        </p>
      </div>
      <div className="w-1/2 h-screen p-4 flex justify-center items-center flex-col text-center">
        <h2 className="text-5xl font-normal mb-4 text-orange-500">
          For <span className="text-black font-bold">Employee</span>
        </h2>
        <a href="/login-employee">
          <button className=" bg-orange-500 hover:bg-orange-600 text-white w-fit font-bold py-2 px-8 rounded">
            Login
          </button>
        </a>
        <p className="text-black mt-4">
          Don't have an account?{" "}
          <a href="/register-employee" className="font-bold">
            Register
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default SelectLogin;
