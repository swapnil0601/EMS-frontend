import React, { useState } from "react";
import Image from "../assets/register1.svg";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
const RegisterAdmin = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/account/register", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex h-screen">
      <a href="/" className="absolute top-5 left-5">
        <ArrowLeft />
      </a>
      <div className="w-1/2 flex justify-center items-center">
        <form className="p-2 bg-white w-2/3" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-4">
            Register as <span className="font-bold">Admin</span>
          </h2>
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Firstname
            </label>
            <input
              type="firstname"
              id="firstname"
              className="w-full border rounded py-2 px-3"
              placeholder="Enter your First Name"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Lastname
            </label>
            <input
              type="text"
              id="lastname"
              className="w-full border rounded py-2 px-3"
              placeholder="Enter your Lastname"
              value={formData.lastname}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Role
            </label>
            <select
              id="role"
              className="w-full border rounded py-2 px-3"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
          <p className="mt-2">
            Already have an account?{" "}
            <a href="/login" className="font-semibold">
              Login
            </a>
          </p>
        </form>
      </div>
      <div
        className="w-1/2 bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>
    </div>
  );
};
export default RegisterAdmin;
