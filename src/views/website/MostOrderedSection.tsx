import React, { useState } from "react";
import CategoryList from "../../components/ui/CategoryList";
import { products } from "../../data/mostOrdered";
import ProductCard from "../../components/ui/ProductCard";
import { Link } from "react-router-dom";
import { SoArrowLeft } from "solom-icon";

const MostOrderedSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-col items-start justify-center gap-8 mb-8">
        <span className="bg-yellow-400 text-[#53490D] px-5 py-1 rounded-full text-base font-semibold text-right">
          قائمتنا
        </span>
        <div className="w-full flex items-center justify-between">
          <h2 className="text-accent text-4xl font-semibold">الأكثر طلبا</h2>
          <Link
            to={"/menu"}
            className="flex items-center gap-3 text-primary text-xl"
          >
            المزيد <SoArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <CategoryList
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter((product) => product.categoryId === activeCategory)
              .map((product) => (
                <ProductCard key={product.id} dir {...product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostOrderedSection;
