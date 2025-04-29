
import useProduct from "../Hook/useProduct";
import ProductCard from "../Share/ProductCard";

const AllProducts = () => {
  const [ products ] = useProduct();
  console.log("tanvir",products);
  return (
    <div>
      <div>
        <h1>All Products</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 p-2 justify-center items-center">
        {products?.map((v) => (
          <ProductCard key={v._id} data={v}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
