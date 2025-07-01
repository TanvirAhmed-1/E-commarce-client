import useUserProducts from "../../../Hook/useUserProducts";

const UserOrder = () => {
  const [userOrder] = useUserProducts();

  return (
    <section className="min-h-screen bg-gradient-to-tr from-gray-100 to-purple-50 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-black mb-12">
          Your Orders
        </h1>

        {userOrder.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            You haven’t placed any orders yet.
          </p>
        ) : (
          <div className="space-y-10">
            {userOrder.map((order, index) => (
              <div
                key={order._id}
                className="bg-white rounded-3xl shadow-xl transition hover:shadow-2xl transform hover:scale-[1.01] duration-300"
              >
                <div className="border-b border-gray-200 p-6">
                  <div className="flex justify-between flex-wrap">
                    <div>
                      <p className="text-gray-700 text-sm">
                        Ordered Date:{" "}
                        {new Date(order.orderTime).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2 sm:mt-0">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        {order.order}
                      </span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {order.method}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Each Product in the Order */}
                <div className="divide-y">
                  {order.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 grid grid-cols-1 md:grid-cols-5 gap-6 items-center"
                    >
                      <div className="md:col-span-1 flex justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-xl border border-purple-200 shadow"
                        />
                      </div>
                      <div className="md:col-span-4 space-y-2">
                        <h2 className="text-lg font-bold text-gray-700">
                          {item.name}
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 text-sm">
                          <p>
                            <span className="font-medium">Price:</span> ${item.price}
                          </p>
                          <p>
                            <span className="font-medium">Quantity:</span>{" "}
                            {item.quantity}
                          </p>
                          <p>
                            <span className="font-medium">Total:</span> ${item.total}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 border-t p-4 text-sm text-gray-800">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-700">
                        Shipping Address
                      </h3>
                      <p>{order.address.street}, {order.address.location}</p>
                      <p>Mobile: {order.address.mobile}</p>
                    </div>
                    <div className="text-right sm:text-left">
                      <p>Total Price: ${order.totalPrice}</p>
                      <p>Discount: ${order.discount}</p>
                      <p className="font-semibold text-green-600">
                        Final Price: ${order.finalPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default UserOrder;
