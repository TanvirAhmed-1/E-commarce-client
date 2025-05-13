import { useParams } from "react-router-dom";
import AxiosPublic from "../Hook/AxiosPublic";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import useOrderTanStackQuery from "../Hook/useOrderTanStackQuery";
import { LiaOpencart } from "react-icons/lia";

const ProductDetails = () => {
  const { id } = useParams();
  const axiosPublic = AxiosPublic();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [order, refetch] = useOrderTanStackQuery();

  useEffect(() => {
    axiosPublic
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setActiveImage(res.data.image1);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const HandleAddToCard = async () => {
    const { _id, ...data } = product;
    const sendData = {
      orderId: _id,
      ...data,
    };

    try {
      const res = await axiosPublic.post("/addToCard", sendData);
      refetch();
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Product Successfully Added!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err);
      if (err.message === "Request failed with status code 500")
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Product Already Added!",
          showConfirmButton: false,
          timer: 1500,
        });
    }
  };

  if (!product) return <div className="text-center text-black">Loading...</div>;

  const {
    title,
    image1,
    image2,
    image3,
    price,
    description,
    rating,
    shipping,
    availability,
  } = product;

  // Fallback thumbnails (you can replace with real images from product.images if available)
  const thumbnails = [image1, image2, image3];

  return (
    <div className="bg-white min-h-screen py-10">
      <h1 className="text-2xl font-semibold text-center text-black">
        Product Details
      </h1>
      <div className="flex items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-gray-50 shadow-lg rounded-xl overflow-hidden md:flex">
          <div className="md:w-1/2 p-6 bg-gray-100 border rounded-xl border-solid border-gray-200">
            <img
              src={activeImage}
              alt={title}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
            <div className="flex flex-row justify-center h-20 gap-6">
              {thumbnails.map((changeImg, index) => (
                <img
                  key={index}
                  src={changeImg}
                  alt=""
                  className={`w-20 h-20 rounded-md cursor-pointer border-2 ${
                    activeImage === changeImg
                      ? "border-green-500 transform transition-transform duration-300 hover:scale-105"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveImage(changeImg)}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-800 mb-3">{title}</h1>
              <p className="text-gray-700 text-lg mb-4 line-clamp-3">
                {description}
              </p>
              <div className="mb-2 text-lg font-medium text-gray-900 space-x-4">
                Price: <span className="text-green-600 ">${price}</span>
                <span className="text-gray-600 font-semibold line-through ">
                  ${price + 100}
                </span>
              </div>
              <div className="mb-2 text-xl font-semibold text-gray-800">
                Shipping:{" "}
                {shipping === "Free" ? (
                  <span className="text-green-500 font-semibold">Free</span>
                ) : (
                  `$ ${shipping}`
                )}
              </div>
              <p
                className={`  ${
                  availability === "Available"
                    ? "text-green-500 "
                    : "text-gray-500"
                }  font-medium text-xs my-2 flex items-center gap-3`}
              >
                <LiaOpencart className="text-3xl" /> {availability}
              </p>
              <div className="text-gray-800 font-semibold flex justify-start items-center gap-1">
                Rating:{" "}
                <span className="text-black font-semibold mx-2">{rating}</span>
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
            </div>

            <button
              onClick={HandleAddToCard}
              className="mt-6 transform  hover:scale-95 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-8/12 mx-auto mt-10 p-6 ">
        <h1 className=" text-xl text-black font-semibold ">Product Details </h1>
        <p className="text-gray-700 text-lg mb-4 ">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
