
import ProductCard from '../Share/ProductCard';

const ProductMap = ({category}) => {
  return (
    <div>
          <div>
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2 grid-cols-1 p-2 justify-center items-center">
        {category?.map((v) => (
          <ProductCard key={v._id} data={v}></ProductCard>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductMap;