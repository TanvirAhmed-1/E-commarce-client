import usePaymentProducts from "../../Hook/usepaymentProducts";

const UserPaymentHistory = () => {
  const [payment, refetch] = usePaymentProducts();

  const formatDateTime = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-8 py-6">
      <div className="max-w-full overflow-x-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
         User Payment History
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-black border-collapse mb-6">
            <thead>
              <tr className="bg-gray-200 text-sm sm:text-base">
                <th className="py-2 px-4 text-left">#</th>
                <th className="py-2 px-4 text-left">Image</th>
                <th className="py-2 px-4 text-left">Products</th>
                <th className="py-2 px-4 text-left">Product Title</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Payment Method</th>
                <th className="py-2 px-4 text-left">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {payment?.map((order, index) => (
                <tr key={order._id} className="border-t border-b text-sm sm:text-base">
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
                  <td className="py-2 px-4">
                    {order.method || (
                      <span className="text-gray-500 italic">N/A</span>
                    )}
                  </td>
                  <td className="py-2 px-4">{formatDateTime(order.orderTime)}</td>
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
    </div>
  );
};

export default UserPaymentHistory;
