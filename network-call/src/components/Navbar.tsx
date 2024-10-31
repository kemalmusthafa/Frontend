import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-screen h-20 flex items-center justify-center bg-slate-600 text-white gap-10">
      <Link to={"/"}>Home</Link>
      <Link to={"./register"}>Register</Link>
    </div>
  );
}

export default Navbar;
