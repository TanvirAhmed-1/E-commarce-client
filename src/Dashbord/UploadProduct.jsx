import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import AxiosPublic from "./../Hook/AxiosPublic";
import Swal from "sweetalert2";
import { AuthContext } from "../Components/Authontation/Authorization";
import { useNavigate } from "react-router-dom";
import LoadingPage2 from "./../Pages/LoadingPage2";

const UploadProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loader, setLoader] = useState(false);
  const axiosPublic = AxiosPublic();
  const { users } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoader(true);
    if (!users || !users.email) {
      return navigate("/login");
    }

    const { price, ...data2 } = data;
    const prices = parseInt(price);
    const updateData = {
      ...data2,
      price: prices,
    };

    try {
      const res = await axiosPublic.post("products", updateData);
      if (res.data.insertedId) {
        setLoader(false);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Product Successfully Uploaded",
          showConfirmButton: false,
          timer: 1100,
        });
        reset();
      }
    } catch (err) {
      setLoader(false);
      console.error(err.message);
    }
  };

  if (loader) {
    return <LoadingPage2 />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white p-10 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Upload New Product
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Product Title */}
          <div>
            <label className="block text-gray-700 mb-2">Product Title</label>
            <input
              {...register("title", { required: true })}
              placeholder="Enter product title"
              className="w-full bg-gray-600 text-white border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">Title is required</p>
            )}
          </div>

          {/* Image URLs */}
          <div>
            <label className="block text-gray-700 mb-2">Image URL 1</label>
            <input
              {...register("image1", { required: true })}
              placeholder="Enter image URL"
              className="w-full bg-gray-600 text-white border border-gray-300 px-4 py-3 rounded-lg"
            />
            {errors.image1 && (
              <p className="text-red-500 text-sm">Image URL is required</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Image URL 2</label>
            <input
              {...register("image2", { required: true })}
              placeholder="Enter image URL"
              className="w-full bg-gray-600 text-white border border-gray-300 px-4 py-3 rounded-lg"
            />
            {errors.image2 && (
              <p className="text-red-500 text-sm">Image URL is required</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Image URL 3</label>
            <input
              {...register("image3", { required: true })}
              placeholder="Enter image URL"
              className="w-full bg-gray-600 text-white border border-gray-300 px-4 py-3 rounded-lg"
            />
            {errors.image3 && (
              <p className="text-red-500 text-sm">Image URL is required</p>
            )}
          </div>

          {/* Sub Category */}
          <div>
            <label className="block text-gray-700 mb-2">Sub Category</label>
            <select
              {...register("subcategory", { required: true })}
              className="w-full bg-gray-600 text-white border border-gray-300 px-4 py-3 rounded-lg"
            >
              <option value="">Select Sub Category</option>
              <option>Phone</option>
              <option>Earphone</option>
              <option>Fan</option>
              <option>Watch</option>
              <option>Trimmer</option>
              <option>Bag</option>
              <option>Face wash</option>
              <option>Night cream</option>
              <option>sunscreen cream</option>
            </select>
            {errors.subcategory && (
              <p className="text-red-500 text-sm">Subcategory is required</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 mb-2">Category</label>
            <select
              {...register("category", { required: true })}
              className="w-full bg-gray-600 text-white border border-gray-300 px-4 py-3 rounded-lg"
            >
              <option value="">Select Category</option>
              <option>Phone</option>
              <option>Electronic</option>
              <option>Fashion</option>
              <option>Cosmetic</option>
              <option>Others</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm">Category is required</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 mb-2">Price</label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Enter price"
              className="w-full bg-gray-600 text-white border border-gray-300 px-4 py-3 rounded-lg"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">Price is required</p>
            )}
          </div>

          {/* Availability */}
          <div>
            <label className="block text-gray-700 mb-2">Availability</label>
            <select
              {...register("availability", { required: true })}
              className="w-full bg-gray-600 text-white border border-gray-300 px-4 py-3 rounded-lg"
            >
              <option value="">Select</option>
              <option>Available</option>
              <option>Not Available</option>
            </select>
            {errors.availability && (
              <p className="text-red-500 text-sm">Availability is required</p>
            )}
          </div>

          {/* Shipping */}
          <div>
            <label className="block text-gray-700 mb-2">Shipping</label>
            <select
              {...register("shipping", { required: true })}
              className="w-full bg-gray-600 text-white border border-gray-300 px-4 py-3 rounded-lg"
            >
              <option value="">Select Shipping</option>
              <option value="Free">Free</option>
              <option value="60">60</option>
              <option value="100">100</option>
              <option value="120">120</option>
            </select>
            {errors.shipping && (
              <p className="text-red-500 text-sm">Shipping is required</p>
            )}
          </div>

          {/* Rating */}
          <div>
            <label className="block text-gray-700 mb-2">
              Rating (e.g. 4.9)
            </label>
            <input
              type="number"
              step="0.1"
              {...register("rating", { required: true })}
              placeholder="Enter rating"
              className="w-full bg-gray-600 text-white border border-gray-300 px-4 py-3 rounded-lg"
            />
            {errors.rating && (
              <p className="text-red-500 text-sm">Rating is required</p>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Enter description"
              className="w-full bg-gray-600 text-white border border-gray-300 px-4 py-3 rounded-lg"
              rows="4"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">Description is required</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300 shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
