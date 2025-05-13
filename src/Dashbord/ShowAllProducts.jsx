import { Link } from "react-router-dom";
import useProduct from "../Hook/useProduct";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import LoadingPage2 from './../Pages/LoadingPage2';
import { useState } from "react";

const ShowAllProducts = () => {

  const  [delete1, setDelete] = useState("false")

  const [products, loading] = useProduct(delete1);
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/products/delete/${id}`);
        if (res.data.deletedCount > 0) {
            setDelete(!delete1)
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Product Successfully Deleted",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      } catch (error) {
        console.error(error);
        Swal.fire("Error", "Something went wrong while deleting.", "error");
      }
    }
  };

  if(loading>0){
    return <LoadingPage2></LoadingPage2>
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        All Products
      </h1>
      <table className="min-w-full table-auto border border-gray-200">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">Image</th>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Category</th>
            <th className="px-4 py-2 border">Sub Category</th>
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Available</th>
            <th className="px-4 py-2 border">Shipping</th>
            <th className="px-4 py-2 border">Display</th>
            <th className="px-4 py-2 border">Update</th>
            <th className="px-4 py-2 border">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={product._id} className="hover:bg-gray-50  text-black">
              <td className="px-4 py-2 border">{index + 1}</td>
              <td className="px-4 py-2 border">
                <img
                  src={product.image1}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </td>
              <td className=" text-sm text-center line-clamp-2 py-2 border-t">{product.title}</td>
              <td className="text-center py-2 border">{product.category}</td>
              <td className="text-center py-2 border">{product.subcategory}</td>
              <td className="text-center border">${product.price}</td>
              <td className="text-center border">
                {product.availability === "true" ? "Yes" : "No"}
              </td>
              <td className="text-center border">{product.shipping}</td>
              <td className=" text-center  border">{product.display}</td>
              <td className="px-4 py-2 border text-center">
                <Link
                  to={`/dashboard/UpdateProduct/${product._id}`}
                  className="text-blue-600  hover:text-blue-800"
                  title="Edit"
                >
                  <FaEdit className="text-center" />
                </Link>
              </td>
              <td className="px-4 py-2 border text-center">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="text-red-600 hover:text-red-800"
                  title="Delete"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAllProducts;
