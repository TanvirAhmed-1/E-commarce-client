import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useTanStackQuery from "../Hook/useTanStackQuery";
import useOrderTanStackQuery from "../Hook/useOrderTanStackQuery";
import { AuthContext } from "./Authontation/Authorization";
import AllUserTanStackQuery from "../Hook/AllUserTanStackQuery";

const NavBar = () => {
  const [product, isLoading, refetch] = useTanStackQuery();
  const [order, refetch2] = useOrderTanStackQuery();
  const { userSignOut, users, setUsers } = useContext(AuthContext);
  const [user] = AllUserTanStackQuery();
  const currentUser = user?.find((u) => u.Email === users?.email);
  const isAdmin = currentUser?.role === "Admin";
  const navigate = useNavigate();

  const handleSignOut = () => {
    userSignOut()
      .then(async (data) => {
        try {
          await refetch();
          await refetch2();
        } catch (err) {
          console.warn("Refetch error after logout:", err.message);
        }

        setUsers(data.user);
      })
      .catch((err) => {
        console.log("Sign out error:", err.message);
      });
  };

  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/allProducts"}>All Products</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>
      {user ? (
        <li>
          {isAdmin ? (
            <NavLink to={"/dashboard/AdminHome"}>Admin Profile</NavLink>
          ) : (
            <NavLink to={"/dashboard/UserHome"}>Profile</NavLink>
          )}
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-white  flex md:flex-row lg:flex-row flex-col gap-y-4 gap-x-4 justify-center">
        <div className="navbar-start mr-36 md:mr-0 ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost bg-black lg:hidden"
            >
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
          <a className="btn btn-ghost text-xl md:text-2xl hover:bg-gray-300 border-none text-black">
            Trendy Products BD
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">{navLink}</ul>
        </div>
        {/* </div> */}

        <div className="navbar-end flex gap-2 items-center">
          <Link
            to={"/favorite"}
            className=" relative  hover:bg-gray-300 border-none p-2 rounded-full"
          >
            <CiHeart className="text-black md:text-4xl text-3xl" />
            <span className=" absolute top-0 right-0  badge badge-sm indicator-item">
              {product.length}
            </span>
          </Link>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle hover:bg-gray-300  border-none"
          >
            <Link to={"/yourOrder"} className="indicator">
              <AiOutlineShoppingCart className="text-black md:text-3xl text-2xl" />
              <span className="badge badge-sm indicator-item">
                {order.length}
              </span>
            </Link>
          </div>
          {users && users.email ? (
            <div className="flex justify-center items-center gap-1">
              <Link
                to={`${
                  isAdmin ? "/dashboard/AdminHome" : "/dashboard/UserHome"
                }`}
              >
                <img
                  className="rounded-full p-2 w-14 h-14 object-cover"
                  src={users?.photoURL}
                  alt=""
                  srcset=""
                />
              </Link>
              <Link
                onClick={handleSignOut}
                className="btn rounded-xl hover:bg-gray-300 border-none btn-ghost text-black"
              >
                Sign Out
              </Link>
            </div>
          ) : (
            <div className="  flex justify-center  items-end gap-1 md:ml-0 ml-8">
              <Link
                to={"/register"}
                className="btn hover:bg-gray-300 md:text-xl border-none btn-ghost text-black"
              >
                Sign Up
              </Link>
              <Link
                to={"/login"}
                className="btn hover:bg-gray-300 border-none md:text-xl btn-ghost text-black"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
