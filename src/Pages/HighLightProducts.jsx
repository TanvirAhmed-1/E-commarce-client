import { useState, useEffect } from "react";
import useProduct from "../Hook/useProduct";

const HighLightProducts = () => {
  const [products] = useProduct();
  const [highlight1, setHighlight1] = useState(null);
  const [highlight2, setHighlight2] = useState(null);

  useEffect(() => {
    const data1 = products.find((v) => v.display === "Highlight");
    const data2 = products.find((v) => v.display === "Highlight2");
    if (data1) setHighlight1(data1);
    if (data2) setHighlight2(data2);
  }, [products]);

  const renderProduct = (product, index) => {
    if (!product) return null;

    const { title, image1, price } = product;

    return (
      <div
        className={`bg-white md:flex justify-center items-center shadow-md rounded-xl overflow-hidden p-6 ${
          index === 0 ? "bg-[#d4e6e9]" : "bg-[#ffdbcf]"
        }`}
      >
        <div className="relative group md:w-96 w-auto p-4 border bg-white rounded-xl  overflow-hidden">
          <img
            src={image1}
            alt={title}
            loading="lazy"
            className="w-full h-44 object-cover rounded-lg"
          />

          {/* Hover Overlay with Animation */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 ease-in-out">
            <button className="bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-200 transition">
              View Details
            </button>
          </div>
        </div>

        <div className="w-full md:p-6 py-2 flex flex-col justify-between">
          <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
<div className="flex gap-2">
            <p className="text-lg font-semibold text-green-700 mb-2">
            Price: ${price}
          </p>
          <p className="text-lg font-semibold text-gray-500 line-through mb-2">
             ${price +150}
          </p>
</div>
        </div>
      </div>
    );
  };

  return (
    <section className=" md:w-10/12  w-11/12 mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center text-black">
        Highlight Products
      </h2>
      <div className="grid lg:grid-cols-2 gap-4">
        {renderProduct(highlight1, 0)}
        {renderProduct(highlight2, 1)}
      </div>
    </section>
  );
};

export default HighLightProducts;
