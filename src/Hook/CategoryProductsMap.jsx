
import ProductCard from "../Share/ProductCard";

const CategoryProductsMap = ({category}) => {
  return (
    <div>
      <div>
        <div>
          <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-1 grid-cols-1 md:p-4 p-6 justify-center items-center">
            {category?.map((v) => (
              <ProductCard key={v._id} data={v}></ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductsMap;
