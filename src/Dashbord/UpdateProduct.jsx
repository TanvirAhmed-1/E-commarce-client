import { useParams, useNavigate } from "react-router-dom";
import useProduct from "../Hook/useProduct";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AxiosPublic from "./../Hook/AxiosPublic";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { id } = useParams();
  const [products] = useProduct();
  const [product, setProduct] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = AxiosPublic();
  const navigate = useNavigate();

  useEffect(() => {
    const dataFind = products.find((v) => v._id === id);
    if (dataFind) {
      setProduct(dataFind);
      reset(dataFind)
    }
  }, [id, products,reset ]);

   console.log(  "bvisvbuh",product)

  const onSubmit = async (data) => {
    if (!product || !product._id) {
      return navigate("/login");
    }

    console.log("input data",data);
    const { _id,price, ...data2 } = data;
    const prices = parseInt(price);
    const updateData = {
      ...data2,
      price: prices,
    };
    console.log("Update data",updateData)
    try {
      const res = await axiosPublic.patch(
        `/update/product/${product._id}`,
        updateData
      );
      console.log(res.data);
      if (res.data.matchedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Product Successfully Updated",
          showConfirmButton: false,
          timer: 1100,
        });
      }
    } catch (err) {
      console.log(err.message);
    }
     navigate("/dashboard/showAllProducts")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Update Product
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">Product Title</label>
            <input
              {...register("title")}
              placeholder="Enter product title"
              defaultValue={product?.title || ""}
              className="input input-bordered w-full px-3 py-2 rounded-md"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">Image URL</label>
            <input
              {...register("image1")}
              placeholder="Enter image URL"
              defaultValue={product?.image1}
              className="input input-bordered w-full px-3 py-2 rounded-md"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">Image URL</label>
            <input
              {...register("image2")}
              placeholder="Enter image URL"
              defaultValue={product?.image2}
              className="input input-bordered w-full px-3 py-2 rounded-md"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">Image URL</label>
            <input
              {...register("image3")}
              placeholder="Enter image URL"
              defaultValue={product?.image3}
              className="input input-bordered w-full px-3 py-2 rounded-md"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">Sub Category</label>
            <select
              {...register("subcategory")}
              className="select select-bordered w-full px-3 py-2 rounded-md"
              defaultValue={product?.subcategory}
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
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">Category</label>
            <select
              {...register("category")}
              className="select select-bordered w-full px-3 py-2 rounded-md"
              defaultValue={product?.category}
            >
              <option value="">Select Category</option>
              <option>Phone</option>
              <option>Electronic</option>
              <option>Fashion</option>
              <option>Cosmetic</option>
              <option>Others</option>
            </select>
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">Price</label>
            <input
              type="number"
              {...register("price")}
              placeholder="Enter price"
              defaultValue={product?.price}
              className="input input-bordered w-full px-3 py-2 rounded-md"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">Availability</label>
            <select
              {...register("availability")}
              className="select select-bordered w-full px-3 py-2 rounded-md"
              defaultValue={product?.availability}
            >
              <option >Available</option>
              <option >Not Available</option>
            </select>
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">Shipping</label>
            <select
              {...register("shipping")}
              className="select select-bordered w-full px-3 py-2 rounded-md"
              defaultValue={product?.shipping}
            >
              <option value="Free">Free</option>
              <option value="60">60</option>
              <option value="120">120</option>
              <option value="100">100</option>
            </select>
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">Display</label>
            <select
              {...register("display")}
              className="select select-bordered w-full px-3 py-2 rounded-md"
              defaultValue={product?.display}
            >
              <option value="Highlight">Highlight</option>
              <option value="Highlight2">Highlight2</option>
              <option value="special">special</option>
              <option value="New">New</option>
              <option value="Top Sell">Top Sell</option>
            </select>
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">Rating</label>
            <input
              type="number"
              step="0.1"
              {...register("rating")}
              placeholder="Enter rating"
              defaultValue={product?.rating || 4}
              className="input input-bordered w-full px-3 py-2 rounded-md"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              {...register("description")}
              placeholder="Enter description"
              defaultValue={product?.description}
              className="textarea textarea-bordered w-full px-3 py-2 rounded-md"
              rows="4"
            />
          </div>
          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              className="btn btn-primary px-8 py-3 font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
