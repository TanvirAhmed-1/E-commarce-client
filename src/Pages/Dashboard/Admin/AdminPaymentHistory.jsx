import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import usePaymentProducts from "../../../Hook/usepaymentProducts";

const AdminPaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const [payment, refetch] = usePaymentProducts();

  return (
    <div className="min-h-screen px-4 py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-x-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 p-6">
          Payment History
        </h2>

        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-200 text-gray-700  text-xs">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Product Name</th>
              <th className="px-4 py-3">Final Price</th>
              <th className="px-4 py-3">Payment Method</th>
              <th className="px-4 py-3">User Name</th>
              <th className="px-4 py-3">User Email</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Order Status</th>
              <th className="px-4 py-3">Order Time</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payment?.map((order, index) => (
              <tr key={order._id}>
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">
                  {order.items.map((item) => item.name).join(", ")}
                </td>
                <td className="px-4 py-3">${order.finalPrice}</td>
                <td className="px-4 py-3">{order.method}</td>
                <td className="px-4 py-3">{order.userName}</td>
                <td className="px-4 py-3">{order.userEmail}</td>
                <td className="px-4 py-3">
                  <div>
                    {order.address?.mobile}
                  </div>
                  <div>
                     {order.address?.location}
                  </div>
                  <div>
                  {order.address?.street}
                  </div>
                </td>
                <td className="px-4 py-3">{order.order}</td>
                <td className="px-4 py-3">
                  {new Date(order.orderTime).toLocaleString()}
                </td>
              </tr>
            ))}
            {payment?.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center py-6 text-gray-500">
                  No payment history found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPaymentHistory;
