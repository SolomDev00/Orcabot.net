/* eslint-disable @typescript-eslint/no-explicit-any */
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { SetStateAction, useRef, useState } from "react";
import { SoArrowLeft, SoArrowRight } from "solom-icon";
import Customer from "../../assets/customer.svg";
import Customer2 from "../../assets/customer2.svg";

const testimonials = [
  {
    id: 1,
    name: "جينيفر",
    image: Customer2,
    comment:
      "بسكويت الأرز من بوتانيكا هو عنصر أساسي في مخزني. إنه بديل صحي للبسكويت التقليدي والرقائق.",
  },
  {
    id: 2,
    name: "أحمد",
    image: Customer,
    comment: "نكهة الثوم الحار هي المفضلة لدي - إنها لذيذة جدًا!",
  },
  {
    id: 3,
    name: "سارة",
    image: Customer,
    comment: "منتج رائع وسعر مناسب، أنصح الجميع بتجربته!",
  },
  {
    id: 4,
    name: "خالد",
    image: Customer2,
    comment: "الجودة ممتازة والطعم رائع، سأقوم بشرائه مرة أخرى بالتأكيد!",
  },
  {
    id: 5,
    name: "مريم",
    image: Customer,
    comment: "أفضل منتج جربته حتى الآن، يستحق التجربة!",
  },
];

const TestimonialsSection = () => {
  const splideRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    if (splideRef.current) {
      splideRef.current.go("<");
    }
  };

  const handleNext = () => {
    if (splideRef.current) {
      splideRef.current.go(">");
    }
  };

  return (
    <section
      id="testimonialSection"
      className="relative pt-52 pb-32 text-center text-white mt-40 testimonial"
      dir="ltr"
    >
      <span className="bg-yellow-400 text-[#53490D] px-5 py-2 rounded-full text-base font-medium">
        ما يقوله العملاء عنا
      </span>
      <h2 className="text-4xl font-bold mt-7">تعليقات بعض العملاء</h2>
      <div className="container max-w-xl mx-auto mt-24 relative">
        <Splide
          ref={splideRef}
          options={{
            start: 3,
            type: "slide",
            perPage: 5,
            focus: "center",
            gap: "1rem",
            arrows: false,
            pagination: false,
            autoplay: false,
            updateOnMove: true,
          }}
          onMove={(splide: { index: SetStateAction<number> }) =>
            setActiveIndex(splide.index)
          }
        >
          {testimonials.map((testimonial, index) => (
            <SplideSlide key={testimonial.id} className="flex justify-center">
              <button
                className={`flex flex-col items-center transition-all duration-300 ${
                  activeIndex === index
                    ? "opacity-100 scale-125"
                    : "opacity-50 scale-90"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`w-16 h-16 rounded-full shadow-lg transition-transform duration-300 ${
                    activeIndex === index ? "scale-110" : "scale-90"
                  }`}
                />
              </button>
            </SplideSlide>
          ))}
        </Splide>
        <div className="absolute inset-y-0 -left-16 flex items-center">
          <button
            onClick={handlePrev}
            className="custom-arrow custom-prev bg-white text-black p-2 rounded-full shadow !border-primary"
          >
            <SoArrowLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 -right-16 flex items-center">
          <button
            onClick={handleNext}
            className="custom-arrow custom-prev bg-white text-black p-2 rounded-full shadow !border-primary"
          >
            <SoArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="mt-6 h-24">
        <h3 className="text-base font-semibold">
          {testimonials[activeIndex].name}
        </h3>
        <p className="text-xl -auto mt-4">
          {testimonials[activeIndex].comment}
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
