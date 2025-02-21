import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { categories, prices, products, rating } from "../../data/mostOrdered";
import { Product } from "../../interfaces";
import ProductCard from "../../components/ui/ProductCard";
import { Disclosure } from "@headlessui/react";
import { SoArrowDown, SoArrowUp } from "solom-icon";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const [results, setResults] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedPricing, setSelectedPricing] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number>(300);
  const [value, setValue] = useState<number>(10);

  useEffect(() => {
    let filteredItems = products.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    if (selectedCategory) {
      filteredItems = filteredItems.filter(
        (item) => item.categoryId === selectedCategory
      );
    }

    if (selectedRating) {
      filteredItems = filteredItems.filter(
        (item) => item.rating === selectedRating
      );
    }

    if (selectedPricing) {
      filteredItems = filteredItems.filter(
        (item) => item.price >= selectedPricing
      );
    }

    filteredItems = filteredItems.filter((item) => item.price <= maxPrice);

    setResults(filteredItems);
  }, [query, selectedCategory, maxPrice, selectedRating, selectedPricing]);

  return (
    <section id="product" className="relative">
      <div className="flex flex-col mt-36 pb-10 container">
        {!query ? (
          <h2 className="text-2xl font-medium mb-8">
            بحث عن ”الكل“ ({results.length} نتيجة)
          </h2>
        ) : (
          <h2 className="text-2xl font-medium mb-8">
            بحث عن ”{query}“ ({results.length} نتيجة)
          </h2>
        )}
        <div className="flex items-start justify-center gap-5">
          <div className="w-1/4 px-4 rounded-md">
            <h2 className="text-2xl font-semibold mb-5">فلتر</h2>
            <Disclosure as="div" className="mb-6">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`flex w-full justify-between gap-12 border-b border-[#D5D5D5] bg-transparent text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-primary p-3 pb-4}`}
                  >
                    <span
                      className={`text-base font-medium max-sm:text-base text-left
                                        duration-150 ${
                                          open
                                            ? "text-primary"
                                            : "text-[#212121]"
                                        }`}
                    >
                      الفئة
                    </span>
                    {open ? (
                      <SoArrowDown
                        className={`transform h-5 w-5 text-primary`}
                      />
                    ) : (
                      <SoArrowUp
                        className={`transform h-5 w-5 text-[#BEA71D]`}
                      />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="flex flex-col gap-1 mt-3">
                    {categories.map((c, idx) => (
                      <label
                        key={idx}
                        className={`flex items-center gap-2 cursor-pointer py-1`}
                      >
                        <input
                          type="checkbox"
                          name="category"
                          value={c.id}
                          checked={selectedCategory === c.id}
                          onChange={() => setSelectedCategory(c.id)}
                          className="w-4 h-4 accent-primary bg-[#848484]"
                        />
                        <div className="w-full flex items-center justify-between text-black">
                          <span>{c.name}</span>
                          <span>{`(${c.count})`}</span>
                        </div>
                      </label>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mb-6">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`flex w-full justify-between gap-12 border-b border-[#D5D5D5] bg-transparent text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-primary p-3 pb-4}`}
                  >
                    <span
                      className={`text-base font-medium max-sm:text-base text-left
                                        duration-150 ${
                                          open
                                            ? "text-primary"
                                            : "text-[#212121]"
                                        }`}
                    >
                      سعر المنتج
                    </span>
                    {open ? (
                      <SoArrowDown
                        className={`transform h-5 w-5 text-primary`}
                      />
                    ) : (
                      <SoArrowUp
                        className={`transform h-5 w-5 text-[#BEA71D]`}
                      />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="flex flex-col gap-1 mt-3">
                    {prices.map((p, idx) => (
                      <label
                        key={idx}
                        className={`flex items-center gap-2 cursor-pointer py-1`}
                      >
                        <input
                          type="checkbox"
                          name="price"
                          value={p.id}
                          checked={selectedPricing === p.price}
                          onChange={() => setSelectedPricing(p.price)}
                          className="w-4 h-4 accent-primary bg-[#848484]"
                        />
                        <div className="w-full flex items-center justify-between text-black">
                          <span>{p.name}</span>
                        </div>
                      </label>
                    ))}
                    <div className="mt-1">
                      <input
                        type="range"
                        min="20"
                        max="300"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-full appearance-none h-2 bg-red-300 rounded-full range-slider"
                      />
                      <p className="text-gray-700">الحد الأقصى: ${maxPrice}</p>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mb-6">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`flex w-full justify-between gap-12 border-b border-[#D5D5D5] bg-transparent text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-primary p-3 pb-4}`}
                  >
                    <span
                      className={`text-base font-medium max-sm:text-base text-left
                                        duration-150 ${
                                          open
                                            ? "text-primary"
                                            : "text-[#212121]"
                                        }`}
                    >
                      تصفية المنتج
                    </span>
                    {open ? (
                      <SoArrowDown
                        className={`transform h-5 w-5 text-primary`}
                      />
                    ) : (
                      <SoArrowUp
                        className={`transform h-5 w-5 text-[#BEA71D]`}
                      />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="flex flex-col gap-1 mt-3">
                    {rating.map((r, idx) => (
                      <label
                        key={idx}
                        className={`flex items-center gap-2 cursor-pointer py-1`}
                      >
                        <input
                          type="checkbox"
                          name="rating"
                          value={r.id}
                          checked={selectedRating === r.id}
                          onChange={() => setSelectedRating(r.id)}
                          className="w-4 h-4 accent-primary bg-[#848484]"
                        />
                        <div className="w-full flex items-center justify-between text-black">
                          <span>{r.name}</span>
                        </div>
                      </label>
                    ))}
                    <div className="relative w-full flex flex-col items-center gap-2 mt-2">
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        className="w-full mx-4 appearance-none h-2 bg-red-300 rounded-full range-slider"
                      />
                      <div className="w-full flex items-center justify-between">
                        <span className="text-gray-500 text-sm">1 نجمة</span>
                        <span className="text-gray-500 text-sm">
                          {value ? value : "5"} نجوم
                        </span>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
          <div className="w-3/4">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {results.length > 0 ? (
                results.map((product) => (
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
