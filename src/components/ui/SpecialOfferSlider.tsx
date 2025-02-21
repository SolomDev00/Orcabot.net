/* eslint-disable @typescript-eslint/no-explicit-any */
import "./elements.style.css";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRef } from "react";
import { SoArrowLeft, SoArrowRight } from "solom-icon";
import { promoItems } from "../../data/offerSlider";
import Button from "./elements/Button";

const SpecialOfferSlider = () => {
  const splideRef = useRef<any>(null);

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
    <div className="h-auto pb-5 relative" dir="ltr">
      <div className="w-full flex flex-col items-center justify-between gap-4 mb-20">
        <h2 className="text-4xl font-bold text-accent">وجبات الاسبوع</h2>
        <p className="text-xl font-bold text-secondary">
          قم بالاسراع! العروض لفترة محدوده
        </p>
      </div>
      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          perPage: 1,
          autoWidth: true,
          focus: "center",
          gap: "2.5rem",
          pagination: false,
          arrows: false,
          trimSpace: true,
          rewind: true,
          rewindByDrag: true,
          autoplay: true,
          pauseOnHover: true,
        }}
        className="sliderDiv"
      >
        {promoItems.map((item, idx) => (
          <SplideSlide
            key={idx}
            className="max-w-5xl relative flex flex-col md:flex-row items-center justify-center gap-12 bg-[#F3274C]/15 rounded-[180px] py-8 px-24 duration-150"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row items-center justify-center gap-4">
              <div className="bg-primary rounded-full p-1 flex flex-col items-center justify-center w-16 h-16">
                <span className="text-lg text-white font-semibold">01</span>
                <span className="text-sm text-white">يوم</span>
              </div>
              <div className="bg-primary rounded-full p-1 flex flex-col items-center justify-center w-16 h-16">
                <span className="text-lg text-white font-semibold">16</span>
                <span className="text-sm text-white">ساعات</span>
              </div>
              <div className="bg-primary rounded-full p-1 flex flex-col items-center justify-center w-16 h-16">
                <span className="text-lg text-white font-semibold">4</span>
                <span className="text-sm text-white">دقائق</span>
              </div>
              <div className="bg-primary rounded-full p-1 flex flex-col items-center justify-center w-16 h-16">
                <span className="text-lg text-white font-semibold">31</span>
                <span className="text-sm text-white">ثواني</span>
              </div>
            </div>

            <div className="w-1/2 text-right">
              <img
                src={item.image}
                alt={item.title}
                className="max-w-96 object-cover"
              />
            </div>
            <div className="w-1/2 text-right flex flex-col items-end">
              <p className="text-accent text-sm mb-1">عروض نهاية الأسبوع</p>
              <h2 className="text-3xl font-bold text-accent mb-3">
                {item.title}
              </h2>
              <p className="text-accent mb-4">{item.description}</p>
              <p className="text-2xl font-bold text-accent">{item.price}</p>
              <Button className="mt-4 text-white px-4 py-2 rounded-full flex items-center justify-center gap-5">
                <div className="p-1 bg-white rounded-full">
                  <SoArrowLeft className="w-5 h-5 text-secondary" />
                </div>
                اطلب الآن
              </Button>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <div className="flex justify-center gap-5 -mt-5">
        <button onClick={handlePrev} className="custom-arrow custom-prev">
          <SoArrowLeft className="w-7 h-7" />
        </button>
        <button onClick={handleNext} className="custom-arrow custom-next">
          <SoArrowRight className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default SpecialOfferSlider;
