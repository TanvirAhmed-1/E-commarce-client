import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import AxiosPublic from './../Hook/AxiosPublic';
import Swal from "sweetalert2";
import { AuthContext } from "../Components/Authontation/Authorization";
import { useNavigate } from "react-router-dom";

const UploadProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic=AxiosPublic()
  const{users}=useContext(AuthContext)
  const navigate=useNavigate()


  const onSubmit =async (data) => {
    if(!users || !users.email){
      return navigate("/login")
    }
    try{
      const res=await axiosPublic.post("products",data)
      console.log(res.data)
      if(res.data.insertedId){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Product Successfully Upload ",
          showConfirmButton: false,
          timer: 1100
        });
      }
      reset();
    }
    catch(err){
      console.log(err.message)
    }
  
  };

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
      <div>
        <label className="block text-gray-700 mb-2">Product Title</label>
        <input
          {...register("title")}
          placeholder="Enter product title"
          className="w-full bg-gray-600 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Image URL</label>
        <input
          {...register("image1")}
          placeholder="Enter image URL"
          className="w-full bg-gray-600 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Image URL</label>
        <input
          {...register("image2")}
          placeholder="Enter image URL"
          className="w-full bg-gray-600 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Image URL</label>
        <input
          {...register("image3")}
          placeholder="Enter image URL"
          className="w-full bg-gray-600 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Sub Category</label>
        <select
          {...register("subcategory")}
          className="w-full bg-gray-600 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select Sub Category</option>
          <option>Phone</option>
          <option>Earphone</option>
          <option>Fan</option>
          <option>Watch</option>
          <option>Trimmer</option>
          <option>Beige</option>
          <option>Face wash</option>
          <option>Night cream</option>
          <option>sunscreen cream</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Category</label>
        <select
          {...register("category")}
          className="w-full bg-gray-600 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="">Select Category</option>
          <option>Phone</option>
          <option>Electronic</option>
          <option>Fauchon</option>
          <option>Cosmetic</option>
          <option>Others</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Price</label>
        <input
          type="number"
          {...register("price")}
          placeholder="Enter price"
          className="w-full bg-gray-600 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Availability</label>
        <select
          {...register("availability")}
          className="w-full bg-gray-600 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Shipping</label>
        <select
          {...register("availability")}
          className="w-full bg-gray-600 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="true">Free</option>
          <option value="false">60</option>
          <option value="false">100</option>
          <option value="false">120</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Rating (e.g. 4.9)</label>
        <input
          type="number"
          step="0.1"
          {...register("rating")}
          placeholder="Enter rating"
          className="w-full bg-gray-600 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="md:col-span-2">
        <label className="block text-gray-700 mb-2">Description</label>
        <textarea
          {...register("description")}
          placeholder="Enter description"
          className="w-full bg-gray-600 border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          rows="4"
        />
      </div>

      <div className="md:col-span-2">
        <label className="inline-flex items-center gap-2 text-gray-700">
          <input
            type="checkbox"
            {...register("recommended")}
            className="accent-green-500"
          />
          Mark as Recommended
        </label>
      </div>

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
