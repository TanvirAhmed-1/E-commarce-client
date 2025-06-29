import { useContext, useState } from "react";
import { IoBagAddOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useOrderTanStackQuery from "../Hook/useOrderTanStackQuery";
import useAxiosSecure from "../Hook/useAxiosSecure";
import bkash from "../assets/img/BKash_Logo.png";
import nagad from "../assets/img/nagad.png";
import { AuthContext } from "../Components/Authontation/Authorization";

const YourOrder = () => {
  const [data, refetch] = useOrderTanStackQuery();
  const [orderPrice, setOrderPrice] = useState({});
  const [paymentSelect, setPaymentSelect] = useState(null);
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [userAddress, setUserAddress] = useState({
    mobile: "",
    location: "",
    street: "",
  });
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { users } = useContext(AuthContext);

  const handleSelector = (name) => {
    setPaymentSelect((prev) => (prev === name ? null : name));
  };

  const getCount = (id) => orderPrice[id] || 1;

  const increment = (id) => {
    setOrderPrice((prev) => ({
      ...prev,
      [id]: getCount(id) + 1,
    }));
  };

  const decrement = (id) => {
    setOrderPrice((prev) => ({
      ...prev,
      [id]: getCount(id) > 1 ? getCount(id) - 1 : 1,
    }));
  };

  const totalPrice = data?.reduce(
    (sum, item) => sum + item.price * getCount(item._id),
    0
  );

  const totalQuantity = data?.reduce(
    (sum, item) => sum + getCount(item._id),
    0
  );

  const discount = totalQuantity >= 3 ? totalPrice * 0.1 : 0;
  const finalPrice = totalPrice - discount;

  const orderItems = data?.map((item) => ({
    productId: item._id,
    name: item.title,
    image: item.image,
    price: item.price,
    quantity: getCount(item._id),
    total: item.price * getCount(item._id),
  }));

  const orderData = {
    items: orderItems,
    totalPrice,
    discount,
    finalPrice,
    order: "Pending",
    method: paymentSelect,
    orderTime: new Date().toISOString(),
    userEmail: users?.email,
    userName: users?.displayName,
    address: userAddress,
  };

  const handleCheckout = async () => {
    if (!users) return navigate("/login");
    if (!paymentSelect) return Swal.fire("Please select a payment method");

    const res = await axiosSecure.post("/order", orderData);
    if (res.data.result.insertedId) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your order has been successfully confirmed!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDelete = (id) => {
    if (!users) return navigate("/login");

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/addToCard/delete/${id}`).then(() => {
          Swal.fire("Deleted!", "Your item has been deleted.", "success");
          refetch();
        });
      }
    });
  };

  if (data?.length === 0) {
    return (
      <div className="flex bg-white flex-col justify-center items-center p-6 md:min-h-screen h-full">
        <IoBagAddOutline className="text-[140px] text-red-400" />
        <h1 className="text-lg font-semibold text-black mb-2">
          You have No Order!
        </h1>
        <h1 className="text-lg text-gray-800">Please Add to Order</h1>
      </div>
    );
  }

  return (
    <div className="bg-white px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-black">
        Your Order
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-start gap-6">
        {/* Order List */}
        <div className="w-full md:w-[70%] grid gap-4">
          {data?.map((v) => (
            <div key={v?._id} className="border rounded-lg p-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 justify-start items-center gap-4 p-4">
                <div className="border p-4 lg:w-28 md:w-32 w-44 mx-auto">
                  <img
                    src={v?.image1}
                    alt={v?.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <h1 className="text-sm md:col-span-2 text-start lg:ml-3 text-black">
                  {v?.title}
                </h1>
                <p className="text-sm text-black">Price: ${v?.price}</p>
                <div className="flex md:gap-9 justify-evenly items-center">
                  <div className="text-black grid grid-cols-3 items-center gap-0 border border-black rounded overflow-hidden w-28">
                    <button
                      onClick={() => increment(v._id)}
                      className="px-3 py-1 border-r border-black text-lg font-semibold"
                    >
                      +
                    </button>
                    <span className="px-3 py-1 text-center text-lg font-medium">
                      {getCount(v._id)}
                    </span>
                    <button
                      onClick={() => decrement(v._id)}
                      className="px-2 py-1 border-l border-black text-xl font-semibold"
                    >
                      -
                    </button>
                  </div>
                  <button
                    onClick={() => handleDelete(v._id)}
                    className="flex justify-center border border-gray-200 rounded-full p-2 bg-white "
                  >
                    <RiDeleteBin6Line className="text-2xl text-red-500 cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Panel */}
        <div className="w-full md:w-[30%] border rounded-lg p-4 space-y-4 bg-gray-50">
          <h1 className="text-xl font-bold text-black">CART TOTAL</h1>

          <div className="flex justify-between items-center">
            <h2 className="text-sm font-medium text-black">TOTAL ITEM TYPES:</h2>
            <p className="text-black">{data?.length}</p>
          </div>

          <div className="flex justify-between items-center">
            <h2 className="text-sm font-medium text-black">TOTAL QUANTITY:</h2>
            <p className="text-black">{totalQuantity}</p>
          </div>

          <hr />

          {/* Delivery */}
          <div className="space-y-3">
            <h2 className="text-sm font-medium text-black">Delivery:</h2>
            <p className="text-xs text-gray-500">
              {userAddress.mobile || userAddress.location || userAddress.street
                ? `${userAddress.mobile}, ${userAddress.location}, ${userAddress.street}`
                : "Standard Delivery"}
            </p>
            <button
              type="button"
              onClick={() => setShowAddressInput(!showAddressInput)}
              className="text-sky-400 text-sm underline"
            >
              {showAddressInput ? "Hide location form" : "Change your location"}
            </button>

            {showAddressInput && (
              <div className="space-y-2">
                {/* Mobile */}
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    value={userAddress.mobile}
                    onChange={(e) =>
                      setUserAddress({ ...userAddress, mobile: e.target.value })
                    }
                    className="w-full p-2 border rounded text-black"
                  />
                </div>

                {/* Division/District */}
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Division & District
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dhaka, Gazipur"
                    value={userAddress.location}
                    onChange={(e) =>
                      setUserAddress({ ...userAddress, location: e.target.value })
                    }
                    className="w-full p-2 border rounded text-black"
                  />
                </div>

                {/* Street */}
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Street/Village/Area
                  </label>
                  <input
                    type="text"
                    placeholder="Enter street or area"
                    value={userAddress.street}
                    onChange={(e) =>
                      setUserAddress({ ...userAddress, street: e.target.value })
                    }
                    className="w-full p-2 border rounded text-black"
                  />
                </div>
              </div>
            )}
          </div>

          <hr />

          {/* Price Info */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-black">Total price</h2>
            <p className="text-xl font-bold text-black">${totalPrice.toFixed(2)}</p>
          </div>

          {totalQuantity >= 3 && (
            <>
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-black">
                  Discounted price
                </h2>
                <p className="text-xl font-bold text-black">
                  ${finalPrice.toFixed(2)}
                </p>
              </div>
              <p className="text-sm text-green-600 text-start bg-green-50 p-2 rounded shadow">
                You get a 10% Discount{" "}
                <span className="text-black ml-1">${discount.toFixed(2)}</span>
              </p>
            </>
          )}

          {/* Payment Method */}
          <div className="grid gap-4">
            <h1 className="text-black text-xl font-semibold">
              Select Your Payment Method
            </h1>

            {/* Bkash */}
            <button
              onClick={() => handleSelector("Bkash")}
              className={`border h-14 border-black bg-white flex justify-between items-center px-4 ${
                paymentSelect === "Bkash" ? "border-green-500" : ""
              }`}
            >
              <img src={bkash} alt="Bkash" className="p-6 w-24" />
              <span
                className={`text-sm ${
                  paymentSelect === "Bkash" ? "text-green-500" : "text-black"
                }`}
              >
                {paymentSelect === "Bkash" ? "Selected" : "Select"}
              </span>
            </button>

            {/* Nagad */}
            <button
              onClick={() => handleSelector("Nagad")}
              className={`border h-14 border-black bg-white flex justify-between items-center px-4 ${
                paymentSelect === "Nagad" ? "border-green-500" : ""
              }`}
            >
              <img src={nagad} alt="Nagad" className="p-6 lg:w-32 w-24" />
              <span
                className={`text-sm ${
                  paymentSelect === "Nagad" ? "text-green-500" : "text-black"
                }`}
              >
                {paymentSelect === "Nagad" ? "Selected" : "Select"}
              </span>
            </button>

            {/* Cash on Delivery */}
            <button
              onClick={() => handleSelector("Cash on Delivery")}
              className={`border h-14 border-black bg-white flex justify-between items-center px-4 ${
                paymentSelect === "Cash on Delivery" ? "border-green-500" : ""
              }`}
            >
              <span className="text-sm font-medium text-black">
                Cash on Delivery
              </span>
              <span
                className={`text-sm ${
                  paymentSelect === "Cash on Delivery"
                    ? "text-green-500"
                    : "text-black"
                }`}
              >
                {paymentSelect === "Cash on Delivery" ? "Selected" : "Select"}
              </span>
            </button>
          </div>

          {/* Checkout Button */}
          <div>
            <Link
              onClick={handleCheckout}
              className={`block text-center py-2 rounded transition-transform ${
                paymentSelect
                  ? "bg-red-500 text-white hover:scale-105 cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
