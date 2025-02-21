import React from "react";
import { categories } from "../../data/mostOrdered";

interface CategoryListProps {
  activeCategory: number;
  setActiveCategory: (id: number) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="relative flex gap-4">
      {/* الخط الجانبي الموصول */}
      <div className="absolute right-[-10px] top-0 bottom-0 w-[3px] bg-gray-300"></div>

      <div className="w-full flex flex-col gap-4 relative">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`w-full relative py-3 px-8 text-right text-xl font-medium transition flex items-center justify-between rounded-[50px] ${
              activeCategory === category.id
                ? "bg-red-400 text-white"
                : "bg-white text-black hover:bg-red-400 hover:text-white"
            }`}
          >
            {category.name}{" "}
            {activeCategory === category.id && (
              <span className="bg-white text-red-400 rounded-full text-base font-semibold flex items-center justify-center w-8 aspect-square flex-shrink-0">
                {category.count}
              </span>
            )}
            {activeCategory === category.id && (
              <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-[3px] h-14 bg-primary rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
