import React from "react";
import { Link } from "react-router-dom";
import { SoArrowLeft } from "solom-icon";

interface ProductProps {
  name: string;
  price: number;
  image: string;
  dir?: boolean;
  wMin?: boolean;
  wMax?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({
  name,
  price,
  image,
  dir,
  wMin,
  wMax,
}) => {
  return (
    <div
      dir={dir ? "rtl" : "ltr"}
      className="relative bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
    >
      <img
        src={image}
        alt={name}
        className={`w-full ${!wMax ? "h-64" : "h-52"}  object-cover`}
      />
      <div className="absolute bottom-0 right-0 w-full text-white text-right p-2 px-6">
        <h3 className={`${wMin ? "text-2xl" : "text-3xl"} font-bold`}>
          {name}
        </h3>
        <div className="w-full flex flex-row items-center justify-between">
          <p
            className={`text-white font-bold ${wMin ? "text-2xl" : "text-3xl"}`}
          >
            <span className="text-secondary text-2xl mr-1">$</span>
            {price.toFixed(2)}
          </p>
          <Link to={"/menu"} className="text-white">
            <SoArrowLeft className={wMin ? "w-5 h-5" : "w-6 h-6"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
