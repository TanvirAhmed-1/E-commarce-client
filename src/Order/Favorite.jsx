import { RiDeleteBin6Line } from "react-icons/ri";
import useTanStackQuery from "./../Hook/useTanStackQuery";
import AxiosPublic from "../Hook/AxiosPublic";
import Swal from "sweetalert2";
import useOrderTanStackQuery from "../Hook/useOrderTanStackQuery";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { IoBagAddOutline } from "react-icons/io5";

const Favorite = () => {
  const [data, isLoading, refetch] = useTanStackQuery();
  const [order, refetchOrder] = useOrderTanStackQuery();
  const axiosPublic = AxiosPublic();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
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
        axiosSecure
          .delete(`/favorite/delete/${id}`)
          .then(() => {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch(() => {
            console.log("error");
          });
      }
    });
  };

  const HandleAddToCard = async (product) => {
    const { _id, ...dataWithoutId } = product;
    const sendData = {
      orderId: _id,
      ...dataWithoutId,
    };

    try {
      const res = await axiosPublic.post("/addToCard", sendData);
      refetchOrder();
      if (res.data.acknowledged) {
        Swal.fire("Product Successfully Added!");
      }
    } catch (err) {
      if (err?.response?.status === 500) {
        Swal.fire("Product Already Added!");
      }
    }
  };


   if (data?.length === 0) {
      return (
        <div className="flex bg-white flex-col justify-center items-center gap-4 p-6 md:min-h-screen h-full">
          <IoBagAddOutline className="text-[140px] text-red-400" />
          <h1 className="text-lg font-semibold text-black mb-2">
            You have No Favorite Product!
          </h1>
          <h1 className="text-lg text-gray-800">Please Add your Favorite Product!</h1>
        </div>
      );
    }

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Your Favorites
        </h1>

        {data?.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No favorite products added yet.</p>
        ) : (
          <div className="grid gap-6">
            {data.map((v) => (
              <div
                key={v._id}
                className="bg-white rounded-lg shadow-md p-4 grid grid-cols-1 md:grid-cols-5 gap-4 items-center"
              >
                <div className="md:col-span-1 flex justify-center">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-32 h-32 object-cover rounded-md border"
                  />
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-lg font-semibold text-gray-800">{v.title}</h2>
                  <p className="text-gray-600 mt-1">Price: ${v.price}</p>
                  <p className="text-gray-600">
                    Shipping:{" "}
                    <span className={v.shipping == "free" ? "text-green-600" : "text-red-500"}>
                      {v.shipping == "free" ? "Free" : "$40"}
                    </span>
                  </p>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => HandleAddToCard(v)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="flex justify-center">
                  <button onClick={() => handleDelete(v._id)}>
                    <RiDeleteBin6Line className="text-2xl text-red-500 hover:text-red-600 transition" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
