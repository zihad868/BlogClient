import React from "react";
import logo from "../../assets/Logo/logo.jpg";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-white">
        <div className="flex items-center font-medium justify-around">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="md:cursor-pointer w-16 h-9" />
            <h2 className="text-xl">Logo</h2>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
            <li>
              <Link to="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
          </ul>

          <div className="md:block hidden">
            <Button />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
