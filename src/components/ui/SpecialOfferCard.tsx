import React from "react";
import { SoArrowLeft } from "solom-icon";

interface OfferCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const SpecialOfferCard: React.FC<OfferCardProps> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <div className="relative w-full">
      <div className="relative rounded-xl shadow-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-5 text-white">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-white max-w-[200px]">{description}</p>
        </div>
        <button className="flex items-center gap-10 bg-transparent text-white py-2 rounded-md font-bold text-base">
          احجز وجبتك الآن
          <SoArrowLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute -bottom-8 left-8 w-20 h-20 flex flex-col items-center justify-center -rotate-[20deg] bg-secondary text-primary font-bold text-lg p-3 rounded-full shadow-lg">
        {price} <span className="text-xl -mt-2">جنية</span>
      </div>
    </div>
  );
};

export default SpecialOfferCard;
