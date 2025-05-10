import { useState } from "react";
import useProduct from "../Hook/useProduct";
import ProductCard from "../Share/ProductCard";
import LoadingPage from "./Home/LoadingPage";
import { IoIosSearch } from "react-icons/io";
import { FaFaceSmileWink } from "react-icons/fa6";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductMap from "../Hook/ProductMap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const AllProducts = () => {
  const [range, setRange] = useState([0, 5000]);
  const [tempRange, setTempRange] = useState([0, 5000]);
  const [sort, setSort] = useState(false);
  const [ascending, setAscending] = useState(false);
  const [search, setSearch] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  const [products, loading] = useProduct(sort, search, range, ascending);

  // Filter products
  const subPhone = products.filter((v) => v.subcategory === "Phone");
  const subEarphone = products.filter((v) => v.subcategory === "Earphone");
  const subBag = products.filter((v) => v.subcategory === "Bag");
  const subSunscreenCream = products.filter(
    (v) => v.subcategory === "sunscreen cream"
  );
  const subFaceWash = products.filter((v) => v.subcategory === "Face wash");
  const subWatch = products.filter((v) => v.subcategory === "Watch");
  const suNightCream = products.filter((v) => v.subcategory === "Night cream");
  const subTrimmer = products.filter((v) => v.subcategory === "Trimmer");
  const subFan = products.filter((v) => v.subcategory === "Fan");
  const FreeShipping = products.filter((v) => v.shipping === "Free");

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
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
            <p>100% secure payment</p>
          </div>
        </div>
      </div>

      {/* If no products found */}
      {products.length === 0 ? (
        <div className="min-h-screen text-black flex flex-col gap-10 justify-center items-center text-2xl mt-10">
          <span>Product not found</span>
          <FaFaceSmileWink className="text-green-400 text-6xl" />
        </div>
      ) : (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full lg:w-[220px] md:w-[190px] bg-white border border-gray-300 rounded-md p-4">
              <TabList className="md:flex flex-col grid grid-cols-2 gap-2 text-black">
                <Tab className="cursor-pointer py-2 px-4 border rounded hover:bg-gray-100">
                  All
                </Tab>
                <Tab className="cursor-pointer py-2 px-4 border rounded hover:bg-gray-100">
                  Phones
                </Tab>
                <Tab className="cursor-pointer py-2 px-4 border rounded hover:bg-gray-100">
                  Earphone
                </Tab>
                <Tab className="cursor-pointer py-2 px-4 border rounded hover:bg-gray-100">
                  Bag
                </Tab>
                <Tab className="cursor-pointer py-2 px-4 border rounded hover:bg-gray-100">
                  Sunscreen Cream
                </Tab>
                <Tab className="cursor-pointer py-2 px-4 border rounded hover:bg-gray-100">
                  Face Wash
                </Tab>
                <Tab className="cursor-pointer py-2 px-4 border rounded hover:bg-gray-100">
                  Watch
                </Tab>
                <Tab className="cursor-pointer py-2 px-4 border rounded hover:bg-gray-100">
                  Night Cream
                </Tab>
                <Tab className="cursor-pointer py-2 px-4 border rounded hover:bg-gray-100">
                  Trimmer
                </Tab>
                <Tab className="cursor-pointer py-2 px-4 border rounded hover:bg-gray-100">
                  Fan
                </Tab>
                <Tab className="cursor-pointer py-2 px-4 border rounded hover:bg-gray-100">
                  Free Shipping
                </Tab>
              </TabList>

              {/* Price Slider */}
              <div className="mt-6 text-black">
                <h2 className="text-sm font-bold mb-2">Filter by Price</h2>
                <Slider
                  range
                  min={0}
                  max={5000}
                  value={tempRange}
                  onChange={(value) => setTempRange(value)}
                />
                <p className="mt-2 text-xs">
                  Price: ${tempRange[0]} - ${tempRange[1]}
                </p>
                <button
                  onClick={() => setRange(tempRange)}
                  className=" btn text-sm bg-green-400 px-3 py-1 rounded-lg border-none hover:bg-green-600 mt-4"
                >
                  Apply Filter
                </button>
              </div>
              <div>
                <h1 className="text-black text-sm font-bold mt-4 mb-2">
                  Descending Price
                </h1>
                {ascending ? (
                  <button></button>
                ) : (
                  <button onClick={() => setSort(!sort)}>
                    {sort ? (
                      <p className="btn btn-sm bg-green-500 text-white hover:bg-gray-400">
                        Sorted
                      </p>
                    ) : (
                      <p className="btn btn-sm bg-white text-black hover:bg-gray-200">
                        Sort by Price
                      </p>
                    )}
                  </button>
                )}
              </div>

              <div>
                <h1 className="text-black text-sm font-bold mt-4 mb-2">
                  Ascending Price
                </h1>
                {sort ? (
                  <button></button>
                ) : (
                  <button onClick={() => setAscending(!ascending)}>
                    {ascending ? (
                      <p className="btn btn-sm bg-green-500 text-white hover:bg-green-400">
                        Sorted
                      </p>
                    ) : (
                      <p className="btn btn-sm bg-white text-black hover:bg-gray-200">
                        Sort by Price
                      </p>
                    )}
                  </button>
                )}
                {/* {
               sort && ascending? <p className="text-sm text-red-500">price at a time Ascending or Descending </p>:""
            } */}
              </div>
            </div>

            <div className="flex-1 p-2">
              <TabPanel>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                  {products.map((v) => (
                    <ProductCard key={v._id} data={v} />
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                {subPhone.length === 0 ? (
                  <div className="text-center text-red-500 text-xl py-10">
                    Product not available
                  </div>
                ) : (
                  <ProductMap category={subPhone} />
                )}
              </TabPanel>
              <TabPanel>
                {subEarphone.length === 0 ? (
                  <div className="text-center text-red-500 text-xl py-10">
                    Product not available
                  </div>
                ) : (
                  <ProductMap category={subEarphone} />
                )}
              </TabPanel>
              <TabPanel>
                {subBag.length === 0 ? (
                  <div className="text-center text-red-500 text-xl py-10">
                    Product not available
                  </div>
                ) : (
                  <ProductMap category={subBag} />
                )}
              </TabPanel>
              <TabPanel>
                {subSunscreenCream.length === 0 ? (
                  <div className="text-center text-red-500 text-xl py-10">
                    Product not available
                  </div>
                ) : (
                  <ProductMap category={subSunscreenCream} />
                )}
              </TabPanel>
              <TabPanel>
                {subFaceWash.length === 0 ? (
                  <div className="text-center text-red-500 text-xl py-10">
                    Product not available
                  </div>
                ) : (
                  <ProductMap category={subFaceWash} />
                )}
              </TabPanel>
              <TabPanel>
                {subWatch.length === 0 ? (
                  <div className="text-center text-red-500 text-xl py-10">
                    Product not available
                  </div>
                ) : (
                  <ProductMap category={subWatch} />
                )}
              </TabPanel>
              <TabPanel>
                {suNightCream.length === 0 ? (
                  <div className="text-center text-red-500 text-xl py-10">
                    Product not available
                  </div>
                ) : (
                  <ProductMap category={suNightCream} />
                )}
              </TabPanel>
              <TabPanel>
                {subTrimmer.length === 0 ? (
                  <div className="text-center text-red-500 text-xl py-10">
                    Product not available
                  </div>
                ) : (
                  <ProductMap category={subTrimmer} />
                )}
              </TabPanel>
              <TabPanel>
                {subFan.length === 0 ? (
                  <div className="text-center text-red-500 text-xl py-10">
                    Product not available
                  </div>
                ) : (
                  <ProductMap category={subFan} />
                )}
              </TabPanel>
              <TabPanel>
                {FreeShipping.length === 0 ? (
                  <div className="text-center text-red-500 text-xl py-10">
                    Product not available
                  </div>
                ) : (
                  <ProductMap category={FreeShipping} />
                )}
              </TabPanel>
            </div>
          </div>
        </Tabs>
      )}
    </div>
  );
};

export default AllProducts;
