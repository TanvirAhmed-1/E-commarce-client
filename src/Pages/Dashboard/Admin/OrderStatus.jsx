import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import usePaymentProducts from "../../../Hook/usepaymentProducts";

const OrderStatus = () => {
  const [payment, refetch] = usePaymentProducts();
  const axiosSecure = useAxiosSecure();

  const handleAccept = async (id) => {
    try {
      const updateData = { order: "Delivery" };
      const res = await axiosSecure.patch(
        `/user/admin/order/${id}`,
        updateData
      );
      console.log(res.data);
      refetch();
    } catch (error) {
      console.error("Failed to accept order:", error);
    }
  };

 const handleReceived = async (id) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "User receives this products .if user not  Receives product Cancel it!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  });

  if (result.isConfirmed) {
    const res = await axiosSecure.delete(`/user/admin/order/${id}`);
    console.log(res.data);

    await Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

    refetch(); 
  }
};


  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-8 py-6">
      <div className="max-w-full overflow-x-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          All User Orders Delivery Status
        </h1>

        <table className="table-auto w-full text-black border-collapse mb-6">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Products</th>
              <th className="py-2 px-4 text-left">Product Title</th>
              <th className="py-2 px-4 text-left">Final Price</th>
              <th className="py-2 px-4 text-left">User Mobile Address</th>
              <th className="py-2 px-4 text-left">Delivery Address</th>
              <th className="py-2 px-4 text-left">Order Status</th>
              <th className="py-2 px-4 text-left">Status</th>
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
                <td className="py-2 px-4">{order.address?.mobile}</td>
                <td className="py-2 px-4">
                  <div> {order.address?.location}</div>
                  <div> {order.address?.street}</div>
                </td>
                <td className="py-2 px-4">{order.order}</td>
                <td className="py-2 px-4">
                  {order?.order === "Delivery" ? (
                    <button
                      className="btn bg-green-800 hover:bg-green-600 text-white px-2 rounded-xl  py-1 border-none text-sm disabled:bg-gray-400"
                      onClick={() => handleReceived(order._id)}
                    >
                      User received
                    </button>
                  ) : (
                    <button
                      className="btn bg-green-500 hover:bg-green-600 text-white px-2 rounded-xl  py-1 border-none text-sm  disabled:bg-gray-400"
                      onClick={() => handleAccept(order._id)}
                    >
                      Delivery
                    </button>
                  )}
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
