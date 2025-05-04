import React, { useState } from "react";
import usePaymentProducts from "../Hook/usepaymentProducts";

const AllOrder = () => {
  const [payment] = usePaymentProducts();
  const [activeShippingId, setActiveShippingId] = useState(null);

  const handleToggleShipping = (orderId) => {
    setActiveShippingId((prevId) => (prevId === orderId ? null : orderId));
  };

  return (
    <div className="min-h-screen bg-gray-100 px-8">
      <div className="max-w-full mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          User Orders
        </h1>

        <table className="table-auto w-full text-black border-collapse mb-6">
          <thead>
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Products</th>
              <th className="py-2 px-4 text-left">Product Title</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Final Price</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {payment?.map((order, index) => (
              <tr className="border-t text-black border-b">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">
                  <img
                    src={order.items[0].image}
                    alt={order.items[0].name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="py-2 px-4">{order.items.length}</td>
                <td className="py-2 px-4">
                  {order.items.map((item, idx) => (
                    <div key={idx}>{item.name}</div>
                  ))}
                </td>
                <td className="py-2 px-4">
                  $
                  {order.items.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                </td>
                <td className="py-2 px-4">${order.finalPrice}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleToggleShipping(order._id)}
                    className={`${
                      activeShippingId === order._id
                        ? "bg-green-300 text-black  "
                        : " btn-sm bg-blue-500 text-white"
                    } px-2 py-2 border-none  rounded-lg`}
                  >
                    {activeShippingId === order._id ? "Pending" : "Shipping"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrder;
