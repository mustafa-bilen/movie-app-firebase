import React from "react";
import { BsGoogle } from "react-icons/bs";

const Register = () => {
  return (
    <div className="bggradiant flex justify-center items-center">
      <div className="bgcontainer">
        <form className=" flex flex-col gap-5 p-3">
          <img
            src="https://img.freepik.com/free-vector/isometric-cinema-icon-set_1284-18691.jpg?w=2000"
            alt=""
            width="200px"
            className="rounded-full mx-auto"
          />

          <input
            type="text"
            className="rounded-lg bg-gradient-to-l from-gray-500 via-gray-900 to-black text-white p-3"
            placeholder="Type your firstname"
            required
          />
          <input
            type="text"
            className="rounded-lg bg-gradient-to-l from-gray-500 via-gray-900 to-black text-white p-3"
            placeholder="Type your lastname"
            required
          />

          <input
            type="text"
            className="rounded-lg bg-gradient-to-l from-gray-500 via-gray-900 to-black text-white p-3"
            placeholder="Type your email"
            required
          />
          <input
            type="password"
            className="rounded-lg bg-gradient-to-l from-gray-500 via-gray-900 to-black text-white p-3"
            placeholder="Type your password"
            required
          />
          <div className="flex items-center">
            <button className="rounded-lg bg-gradient-to-r from-gray-700 via-gray-900 to-black  text-white p-2 w-[6rem] mx-auto">
              Register
            </button>
            <div className="text-3xl mx-auto cursor-pointer ">
              <BsGoogle />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
