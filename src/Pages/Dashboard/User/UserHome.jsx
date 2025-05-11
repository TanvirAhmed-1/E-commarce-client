import { useContext } from "react";
import { AuthContext } from './../../../Components/Authontation/Authorization';
import { FaWallet, FaStore, FaPhoneAlt, FaShoppingCart, FaStar, FaCalendarAlt, FaMoneyCheckAlt } from "react-icons/fa";

const UserHome = () => {
  const { users } = useContext(AuthContext);

  return (
    <div className="p-6 bg-gradient-to-r from-pink-50 to-orange-50 min-h-screen">
      <h1 className="text-xl font-serif font-semibold mb-6">Hi, Welcome Back!</h1>

      <div className="grid grid-cols-3 gap-4 mb-10">
        {/* Menu Card */}
        <div className="bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-lg p-6 text-center shadow-md">
          <FaWallet className="text-3xl mx-auto mb-2" />
          <h2 className="text-2xl font-bold">205</h2>
          <p className="text-sm">Menu</p>
        </div>

        {/* Shop Card */}
        <div className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white rounded-lg p-6 text-center shadow-md">
          <FaStore className="text-3xl mx-auto mb-2" />
          <h2 className="text-2xl font-bold">103</h2>
          <p className="text-sm">Shop</p>
        </div>

        {/* Contact Card */}
        <div className="bg-gradient-to-r from-pink-400 to-pink-300 text-white rounded-lg p-6 text-center shadow-md">
          <FaPhoneAlt className="text-3xl mx-auto mb-2" />
          <h2 className="text-2xl font-bold">03</h2>
          <p className="text-sm">Contact</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Profile Section */}
        <div className="text-center bg-orange-100 p-6 rounded-lg shadow-sm">
          <div className="w-24 h-24 mx-auto mb-4 border-2 border-orange-400 rounded-full bg-white" />
          <h3 className="text-xl font-serif font-medium">{users?.displayName || "AWLAD HOSSAIN"}</h3>
        </div>

        {/* Activity Section */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-serif font-semibold mb-4">Your Activities</h3>
          <ul className="space-y-2 text-base">
            <li className="text-blue-600 flex items-center gap-2"><FaShoppingCart /> Orders: <span className="font-bold">6</span></li>
            <li className="text-cyan-600 flex items-center gap-2"><FaStar /> Reviews: <span className="font-bold">2</span></li>
            <li className="text-orange-500 flex items-center gap-2"><FaCalendarAlt /> Bookings: <span className="font-bold">1</span></li>
            <li className="text-red-500 flex items-center gap-2"><FaMoneyCheckAlt /> Payment: <span className="font-bold">3</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
