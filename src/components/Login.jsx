import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaGoogle,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center mt-5 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Toggle between Login and Register */}
        <div className="flex justify-center mt-8 mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-6 py-2 rounded-full font-semibold ${
              isLogin
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700"
            } transition-colors duration-300`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-6 py-2 rounded-full font-semibold ml-4 ${
              !isLogin
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700"
            } transition-colors duration-300`}
          >
            Register
          </button>
        </div>

        {/* Login Form */}
        {isLogin ? (
          <form className="space-y-6">
            <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
              Welcome Back!
            </h2>
            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            {/* Password */}
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              Login
            </button>
          </form>
        ) : (
          /* Register Form */
          <form className="space-y-6">
            <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
              Create an Account
            </h2>
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            {/* Password */}
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            {/* Confirm Password */}
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              Register
            </button>
          </form>
        )}

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Login Options */}
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
            <FaGoogle className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            <FaFacebook className="w-5 h-5 mr-2" />
            Continue with Facebook
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Login;