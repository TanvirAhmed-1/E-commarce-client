import { useState } from "react";
import useProduct from "../Hook/useProduct";
import ProductCard from "../Share/ProductCard";
import LoadingPage from "./Home/LoadingPage";
import { IoIosSearch } from "react-icons/io";
import { FaFaceSmileWink } from "react-icons/fa6";

const AllProducts = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [products, loading] = useProduct(sort, search);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      {/* Search + Sort Bar */}
      <div className="bg-[#1ABA1A] rounded-xl py-4 px-4 mb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
          <div className="relative w-full md:w-[40%]">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search anything..."
              className="input rounded-xl input-bordered w-full bg-black text-white pr-10 text-sm"
            />
            <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
          <div className="flex flex-wrap justify-center md:justify-evenly gap-2 text-[10px] md:text-xs text-white text-center md:w-[50%]">
            <p>Free shipping over $199</p>
            <button
              onClick={() => setSort(!sort)}
              className="btn btn-sm bg-white text-black hover:bg-gray-200"
            >
              {sort ? "Clear Sort" : "Sort by Price"}
            </button>
            <p>100% secure payment</p>
          </div>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="min-h-screen text-black flex flex-col gap-10 justify-center items-center text-2xl mt-10">
          <span>Product not found</span>
          <FaFaceSmileWink className="text-green-400 text-6xl" />
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-center my-6">All Products</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 p-2">
            {products.map((v) => (
              <ProductCard key={v._id} data={v} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllProducts;
