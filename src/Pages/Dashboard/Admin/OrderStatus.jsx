import useAxiosSecure from "../../../Hook/useAxiosSecure";
import usePaymentProducts from "../../../Hook/usepaymentProducts";

const OrderStatus = () => {
  const [payment, refetch] = usePaymentProducts();
  const axiosSecure = useAxiosSecure();

  const handleAccept = async (id) => {
    try {
      const updateData = { order: "Delivery" };
      const res = await axiosSecure.patch(`/user/admin/order/${id}`, updateData);
      console.log(res.data);
      refetch();
    } catch (error) {
      console.error("Failed to accept order:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-8 py-6">
      <div className="max-w-full overflow-x-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
         All User  Orders Status
        </h1>

        <table className="table-auto w-full text-black border-collapse mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Products</th>
              <th className="py-2 px-4 text-left">Product Title</th>
              <th className="py-2 px-4 text-left">Final Price</th>
              <th className="py-2 px-4 text-left">Order Status</th>
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
                <td className="py-2 px-4">${order.finalPrice}</td>
                <td className="py-2 px-4">{order.order}</td>
                <td className="py-2 px-4">
                  <button
                    className="btn bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded disabled:bg-gray-400"
                    onClick={() => handleAccept(order._id)}
                    disabled={order.order === "Delivery"}
                  >
                    {order.order === "Delivery" ? "Delivered" : "Delivery"}
                  </button>
                </td>
              </tr>
            ))}
            {payment?.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
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

export default OrderStatus;
