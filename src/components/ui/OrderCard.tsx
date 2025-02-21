import React from "react";
import Stepper from "./Stepper";
import { SoArrowLeft } from "solom-icon";
import { Link } from "react-router-dom";

interface OrderProps {
  orderId: number;
  paymentMethod: string;
  price: string;
  points: number;
  status: "confirmed" | "preparing" | "delivered";
}

const OrderCard: React.FC<OrderProps> = ({
  orderId,
  paymentMethod,
  price,
  points,
  status,
}) => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-10">
        <div className="flex justify-center items-start gap-5">
          <div className="bg-black/20 text-white text-xl w-40 h-24 flex items-center justify-center rounded-lg font-semibold">
            +{points}
          </div>
          <div className="flex flex-col justify-between gap-1 h-full">
            <p className="text-black/70 text-2xl flex-grow">الطلب #{orderId}</p>
            <p className="text-black/70 text-lg flex-grow">{paymentMethod}</p>
            <p className="text-primary font-bold text-2xl flex-grow">{price}</p>
          </div>
        </div>
        <Link to={`/user/orders/${orderId}`}>
          <SoArrowLeft className="w-6 h-6 text-black cursor-pointer" />
        </Link>
      </div>
      <Stepper status={status} />
    </div>
  );
};

export default OrderCard;
