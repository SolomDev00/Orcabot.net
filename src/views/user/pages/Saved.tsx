import { useState } from "react";
import Pagination from "../../../components/ui/Pagination";
import ProductCard from "../../../components/ui/ProductCard";
import { products } from "../../../data/mostOrdered";

const SavedPage = () => {
  const [pagination, setPagination] = useState(1);
  return (
    <section id="orders" className="w-full flex flex-col items-center pr-8">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
              key={product.id}
              dir
              wMin
              wMax
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-4">لا توجد نتائج!</p>
        )}
      </div>
      <Pagination
        currentPage={pagination}
        totalPages={3}
        onPageChange={(p) => setPagination(p)}
      />
    </section>
  );
};

export default SavedPage;
