import usePaymentProducts from "../../Hook/usepaymentProducts";

const UserBooking = () => {
  const [payment, refetch] = usePaymentProducts();

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-8 py-6">
      <div className="max-w-full overflow-x-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          All User Orders Status
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-black border-collapse mb-6">
            <thead>
              <tr className="bg-gray-200 text-sm sm:text-base">
                <th className="py-2 px-4 text-left">#</th>
                <th className="py-2 px-4 text-left">Image</th>
                <th className="py-2 px-4 text-left">Products</th>
                <th className="py-2 px-4 text-left">Product Title</th>
                <th className="py-2 px-4 text-left">Final Price</th>
                <th className="py-2 px-4 text-left">Order Status</th>
              </tr>
            </thead>
            <tbody>
              {payment?.map((order, index) => (
                <tr key={order._id} className="border-t text-black border-b text-sm sm:text-base">
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
                    {order.order === "Delivery" ? (
                      <span className="text-green-600 font-semibold">Delivered</span>
                    ) : order.order === "Accept" ? (
                      <span className="text-blue-500 font-semibold">Accepted</span>
                    ) : (
                      <span className="text-yellow-600 font-semibold">Pending</span>
                    )}
                  </td>
                </tr>
              ))}
              {payment?.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
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

export default UserBooking;
