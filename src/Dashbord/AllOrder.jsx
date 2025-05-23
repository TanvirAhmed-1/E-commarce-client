import React from "react";
import usePaymentProducts from "../Hook/usepaymentProducts";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../Hook/useAxiosSecure";

const AllOrder = () => {
  const [payment, refetch] = usePaymentProducts();
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id) => {
    const res = await axiosSecure.delete(`/user/admin/order/${id}`);
    console.log(res.data);
            Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Order is Deleted",
          showConfirmButton: false,
          timer: 1000,
        });
    refetch();
  };

  const handleAccept = async (id) => {
    const UpdateData = {
      order: "Accept",
    };
    const res = await axiosSecure.patch(`/user/admin/order/${id}`, UpdateData);
    console.log(res.data);
    refetch();
            Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Order is Accept",
          showConfirmButton: false,
          timer: 1000,
        });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-8 py-6">
      <div className="max-w-full overflow-x-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          User Orders
        </h1>

        <table className="table-auto w-full text-black border-collapse mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Products</th>
              <th className="py-2 px-4 text-left">Product Title</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Final Price</th>
              <th className="py-2 px-4 text-left">Order Status</th>
              <th className="py-2 px-4 text-left">Accept Order</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {payment?.map((order, index) => (
              <tr key={order._id} className="border-t text-black border-b">
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
                <td className="py-2 px-4">{order.order}</td>
                <td className="py-2 px-4">
                  <button
                    className="btn bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded disabled:bg-gray-400"
                    onClick={() => handleAccept(order._id)}
                    disabled={order.order === "Accept"}
                  >
                    {order.order === "Accept" ? "Accepted" : "Accept"}
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button
                    className="text-red-500 text-3xl"
                    onClick={() => handleDelete(order._id)}
                  >
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
            {payment?.length === 0 && (
              <tr>
                <td colSpan="9" className="text-center py-6 text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrder;
