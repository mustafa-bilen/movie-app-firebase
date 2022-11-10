import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black flex justify-between items-center p-3 text-white">
      <div className="text-3xl">Movie APP</div>
      <div className="flex gap-5">
        <img
          src="https://img1.ak.crunchyroll.com/i/spire4/ae07aea667343a06e9f4e9bd8d5649631654726171_large.jpg"
          alt=""
          width="50px"
          className="rounded-full"
        />
        <select className="rounded-lg bg-black outline-none mr-2">
          <option>Login</option>
          <option>Register</option>
          <option>Logout</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
