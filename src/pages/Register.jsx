import React, { useEffect, useState } from "react";
import Image from "../assets/register1.svg";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
const Register = () => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);
  const { dispatch } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    departmentid: 1,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "departmentid") {
      const selectedDepartmentId = parseInt(value, 10);
      const selectedDepartment = departments.find(
        (department) => department.departmentId === selectedDepartmentId
      );
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: selectedDepartment?.departmentId,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/account/register", formData)
      .then((res) => {
        toast.success("Register Success");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("account", res.data.account);
        dispatch({
          type: "LOGIN",
          token: res.data.token,
          account: res.data.account,
        });
        if (res.data.account.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/employee/dashboard");
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchDepartments = () => {
    axios
      .get("http://localhost:8080/api/v1/department/all")
      .then((res) => {
        setDepartments(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return (
    <div className="flex h-screen">
      <a href="/" className="absolute top-5 left-5">
        <ArrowLeft />
      </a>
      <div className="w-1/2 flex justify-center items-center">
        <form className="p-2 bg-white w-2/3" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Firstname
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full border rounded py-2 px-3"
              placeholder="Enter your First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Lastname
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full border rounded py-2 px-3"
              placeholder="Enter your Lastname"
              value={formData.lastName}
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
          <div className="mb-4">
            <label
              htmlFor="departmentid"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Department
            </label>
            <select
              id="departmentid"
              className="w-full border rounded py-2 px-3"
              value={formData.departmentid}
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              {departments.map((department) => (
                <option
                  value={department.departmentId}
                  key={department.departmentId}
                >
                  {department.departmentName}
                </option>
              ))}
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
export default Register;
