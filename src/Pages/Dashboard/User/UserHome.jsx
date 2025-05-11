import { useContext } from "react";
import { AuthContext } from "./../../../Components/Authontation/Authorization";
import {
  FaWallet,
  FaStore,
  FaShoppingCart,
  FaCalendarAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import usePaymentProducts from "../../../Hook/usepaymentProducts";

const UserHome = () => {
  const { users } = useContext(AuthContext);
  const [payment, refetch] = usePaymentProducts();

  const Pending = payment.filter((v) => v.order === "Pending");
  const Accept = payment.filter((v) => v.order === "Accept");
  const Delivery = payment.filter((v) => v.order === "Delivery");

  return (
    <div className="p-6 bg-gradient-to-r from-pink-50 to-orange-50 min-h-screen">
      <h1 className="text-xl text-black font-serif font-semibold">
        Hi, Welcome Back!
      </h1>
      <h1 className="text-xl text-gray-900 font-serif font-semibold mb-6">
        {users?.displayName}
      </h1>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mb-10">
        <div className="bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-lg p-6 text-center shadow-md">
          <FaWallet className="text-3xl mx-auto mb-2" />
          <h2 className="text-2xl font-bold">{payment.length}</h2>
          <p className="text-sm">Order</p>
        </div>
        <div className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white rounded-lg p-6 text-center shadow-md">
          <FaStore className="text-3xl mx-auto mb-2" />
          <h2 className="text-2xl font-bold">{Pending?.length || 0}</h2>
          <p className="text-sm">Order Pending</p>
        </div>

        <div className="bg-gradient-to-r from-pink-400 to-pink-300 text-white rounded-lg p-6 text-center shadow-md">
          <FaShoppingCart className="text-3xl mx-auto mb-2" />
          <h2 className="text-2xl font-bold">{Delivery?.length || 0}</h2>
          <p className="text-sm">Order Delivery</p>
        </div>

        <div className="bg-gradient-to-r from-pink-400 to-pink-300 text-white rounded-lg p-6 text-center shadow-md">
          <FaShoppingCart className="text-3xl mx-auto mb-2" />
          <h2 className="text-2xl font-bold">{Accept?.length || 0}</h2>
          <p className="text-sm">Order Accept</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 grid-cols-1">
        <div className="text-center bg-orange-100 p-6 rounded-lg shadow-sm">
          <div className="w-44 h-44 mx-auto mb-4 overflow-hidden  border-orange-400">
            <img
              src={users?.photoURL}
              alt={users?.displayName}
              className=" rounded-full w-full object-cover"
              srcset=""
            />
          </div>
          <h3 className="text-xl text-black font-serif font-medium">
            {users?.displayName}
          </h3>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-serif font-semibold mb-4 text-black">
            Your Activities
          </h3>
          <ul className="space-y-2 text-base">
            <li className="text-blue-600 flex items-center gap-2">
              <FaShoppingCart /> Delivery:{" "}
              <span className="font-bold">{Delivery.length || 0}</span>
            </li>
            <li className="text-orange-500 flex items-center gap-2">
              <FaCalendarAlt /> Bookings:{" "}
              <span className="font-bold">{Accept?.length || 0}</span>
            </li>
            <li className="text-red-500 flex items-center gap-2">
              <FaMoneyCheckAlt /> Payment:{" "}
              <span className="font-bold">{Delivery.length || 0}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
