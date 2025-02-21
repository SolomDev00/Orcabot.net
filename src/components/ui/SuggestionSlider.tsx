/* eslint-disable @typescript-eslint/no-explicit-any */
import "./elements.style.css";
import { useRef } from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { products } from "../../data/mostOrdered";

const SuggestionSlider = () => {
  const splideRef = useRef<any>(null);

  const handlePrev = () => {
    splideRef.current?.go("<");
  };

  const handleNext = () => {
    splideRef.current?.go(">");
  };

  return (
    <div className="h-auto pb-5 relative" dir="ltr">
      <div className="relative">
        <button
          onClick={handlePrev}
          className="custom-arrowH custom-prevH absolute left-[-40px] top-[40%] transform -translate-y-1/2 z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="custom-arrowH custom-nextH absolute right-[-40px] top-[40%] transform -translate-y-1/2 z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        {products.length > 0 && (
          <Splide
            ref={splideRef}
            options={{
              type: "loop",
              perPage: 5,
              pagination: true,
              arrows: false,
              gap: "0.8rem",
              breakpoints: {
                768: { perPage: 2 },
                1024: { perPage: 3 },
              },
              classes: {
                pagination: "splide__pagination custom-pagination",
                page: "splide__pagination__page custom-page",
              },
            }}
          >
            {products.map((product) => (
              <SplideSlide key={product.id}>
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  key={product.id}
                  dir
                  wMin
                />
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
    </div>
  );
};

export default SuggestionSlider;
