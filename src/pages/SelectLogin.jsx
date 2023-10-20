import React from "react";

const SelectLogin = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="w-1/2 h-screen p-4 flex justify-center items-center flex-col text-center bg-orange-500">
        <h2 className="text-5xl font-normal mb-4 text-white">
          <span className="text-white font-bold">Have</span> an Account?
        </h2>
        <a href="/login">
          <button className=" text-white hover:bg-orange-600 w-fit font-bold py-2 px-8 rounded border-white border-2">
            Login
          </button>
        </a>
      </div>
      <div className="w-1/2 h-screen p-4 flex justify-center items-center flex-col text-center">
        <h2 className="text-5xl font-normal mb-4 text-orange-500">
          <span className="text-black font-bold">Don't Have</span> an Account?
        </h2>
        <a href="/register">
          <button className=" bg-orange-500 hover:bg-orange-600 text-white w-fit font-bold py-2 px-8 rounded">
            Register
          </button>
        </a>
      </div>
    </div>
  );
};

export default SelectLogin;
