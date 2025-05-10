import { AiFillFolderAdd } from "react-icons/ai";
import { FaBars, FaHome, FaShoppingBag } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { LiaUsersCogSolid } from "react-icons/lia";
import {
  MdBookmarkAdd,
  MdEmail,
  MdFavorite,
  MdOutlineManageAccounts,
  MdPayment,
} from "react-icons/md";
import { TbShoppingCartStar } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = false;

  return (
    <div className="drawer  lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Main content */}
      <div className="drawer-content flex flex-col">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden m-4 w-fit"
        >
          <FaBars />
        </label>
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 md:w-80 w-60 min-h-full bg-green-400 text-gray-800 text-lg font-semibold space-y-2">
    
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allOrder">
                  <TbShoppingCartStar /> Manage Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/yourOrder">
                  <FaCartShopping /> Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/productUpdate">
                  <AiFillFolderAdd /> Add Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/showAllProducts">
                  <AiFillFolderAdd /> All Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/orderStatus">
                  <MdOutlineManageAccounts /> Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/AllUser">
                  <LiaUsersCogSolid /> All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  <MdPayment /> Payment History
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">
                  <FaHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/yourOrder">
                  <FaCartShopping /> My Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/favorite">
                  <MdFavorite /> Favorite Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/UserBooking">
                  <MdBookmarkAdd /> My Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/UserPaymentMethod">
                  <MdPayment /> Payment History
                </NavLink>
              </li>
            </>
          )}

          <div class="divider divider-neutral"></div>

          {/* Common Links */}
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/allProducts">
              <FaShoppingBag /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <MdEmail /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
