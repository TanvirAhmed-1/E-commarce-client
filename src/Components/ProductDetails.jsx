import { useParams } from "react-router-dom";
import AxiosPublic from "../Hook/AxiosPublic";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const axiosPublic = AxiosPublic();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axiosPublic
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const { _id, ...dataWithoutId } = product;
      const sendData = {
        orderId: _id,
        ...dataWithoutId,
      };
      const res = await axiosPublic.post("/addToCard", sendData);
      if (res.data.acknowledged) {
        Swal.fire("Added!", "Product added to cart.", "success");
      }
    } catch (error) {
      Swal.fire("Oops!", "Something went wrong.", "error");
    }
  };

  if (!product) return <div className="text-center text-black">Loading...</div>;

  const { title, image, price, description, rating, shipping } = product;

  return (
    <div className="bg-white min-h-screen py-10">
        <h1 className="text-2xl font-semibold text-center text-black">Product Details </h1>
      <div className=" flex items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-gray-50 shadow-lg rounded-xl overflow-hidden md:flex">
          <div className="md:w-1/2 p-6 bg-gray-100 border rounded-xl border-solid border-gray-200">
            <img
              src={image}
              alt={title}
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-3">{title}</h1>
              <p className="text-gray-700 mb-4">{description}</p>
              <div className="mb-2 text-lg font-medium text-gray-900">
                Price: <span className="text-green-600">${price}</span>
              </div>
              <div className="mb-2 text-gray-800">
                Shipping:{" "}
                {shipping == "free" ? (
                  <span className="text-green-500 font-semibold">Free</span>
                ) : (
                  "$40"
                )}
              </div>
              <div className="text-gray-800">
                Rating:{" "}
                <span className="text-yellow-500 font-semibold">
                  {rating} ★
                </span>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-6 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
