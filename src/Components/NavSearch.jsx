
import { IoIosSearch } from "react-icons/io";
import useProduct from "../Hook/useProduct";
import { useState } from "react";

const NavSearch = () => {
  const [sort, setSort]=useState(false)
  const [search , setSearch]=useState("")


  return (
    <div className="bg-[#1ABA1A] rounded-xl py-4 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
        
        <div className="relative w-full md:w-[40%]">
          <input
          onChange={(e)=>setSearch(e.target.value)}
            type="text"
            placeholder="Search anything..."
            className="input rounded-xl input-bordered w-full bg-black pr-10 text-sm"
          />
          <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
        </div>
        <div className="flex flex-wrap justify-center md:justify-evenly gap-2 text-[10px] md:text-xs text-white text-center md:w-[50%]">
          <p>Free shipping over $199</p>
          <button onClick={()=>setSort(!sort)} className="btn">{sort? "sorted":"Sort by price"}</button>
          <p>100% secure payment</p>
        </div>
      </div>
    </div>
  );
};

export default NavSearch;
