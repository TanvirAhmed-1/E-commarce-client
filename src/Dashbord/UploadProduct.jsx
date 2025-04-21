import React, { useState } from "react";
import { useForm } from "react-hook-form";

const UploadProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    const formattedData = {
      product_title: data.product_title,
      product_image: data.product_image,
      category: data.category,
      price: Number(data.price),
      description: data.description,
      availability: data.availability === "true",
      rating: Number(data.rating),
      recommended: data.recommended || false,
    };

    setSubmittedData(formattedData);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Add Product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">
              Product Title
            </label>
            <input
              {...register("product_title")}
              placeholder="Enter product title"
              className="input input-bordered w-full px-3 py-2 rounded-md"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">
              Image URL
            </label>
            <input
              {...register("product_image")}
              placeholder="Enter image URL"
              className="input input-bordered w-full px-3 py-2 rounded-md"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">
              Category
            </label>
            <select
              {...register("category")}
              className="select select-bordered w-full px-3 py-2 rounded-md"
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
              <option value="Books">Books</option>
              <option value="Toys">Toys</option>
              <option value="Sports">Sports</option>
            </select>
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">
              Price
            </label>
            <input
              type="number"
              {...register("price")}
              placeholder="Enter price"
              className="input input-bordered w-full px-3 py-2 rounded-md"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">
              Availability
            </label>
            <select
              {...register("availability")}
              className="select select-bordered w-full px-3 py-2 rounded-md"
            >
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </div>

          <div className="col-span-1">
            <label className="block text-gray-700 mb-2">
              Rating (e.g. 4.9)
            </label>
            <input
              type="number"
              step="0.1"
              {...register("rating")}
              placeholder="Enter rating"
              className="input input-bordered w-full px-3 py-2 rounded-md"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 mb-2">
              Description
            </label>
            <textarea
              {...register("description")}
              placeholder="Enter description"
              className="textarea textarea-bordered w-full px-3 py-2 rounded-md"
              rows="4"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="inline-flex items-center gap-2 text-gray-700">
              <input type="checkbox" {...register("recommended")} />
              Mark as Recommended
            </label>
          </div>

          <div className="col-span-1 md:col-span-2 text-center">
            <button type="submit" className="btn btn-primary px-8 py-3 font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-200">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
