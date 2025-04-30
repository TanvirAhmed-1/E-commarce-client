import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import useTanStackQuery from "../Hook/useTanStackQuery";
import useOrderTanStackQuery from "../Hook/useOrderTanStackQuery";

const NavBar = () => {
  const [product, isLoading, refetch]=useTanStackQuery()
  const [order]=useOrderTanStackQuery()

  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/register"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/productUpdate"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Home</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl hover:bg-gray-300 border-none text-black">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">{navLink}</ul>
        </div>

        <div className="navbar-end gap-2 items-center">
            <Link to={"/favorite"} className=" relative  hover:bg-gray-300 border-none p-2 rounded-full">
            <CiHeart className="text-black text-4xl" />
            <span className= " absolute top-0 right-0  badge badge-sm indicator-item">{product.length}</span>
            </Link>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-gray-300  border-none">
            <Link to={"/yourOrder"} className="indicator">
            <AiOutlineShoppingCart className="text-black text-3xl" />
              <span className="badge badge-sm indicator-item">{order.length}</span>
            </Link>
          </div>
          <a className="btn hover:bg-gray-300 border-none btn-ghost text-black">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
