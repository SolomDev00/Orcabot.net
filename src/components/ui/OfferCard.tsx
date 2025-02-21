/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/elements/Button";

interface Offer {
  title: string;
  description: string;
  image: string;
  endTime: string;
}

const OfferCard = ({ offer }: { offer: Offer }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(offer.endTime).getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 10, hours: 5, minutes: 20, seconds: 30 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden text-center px-6 py-3 space-y-4">
      <span className="text-secondary font-semibold">
        متعة، كل طعم رحلة جديدة
      </span>
      <h3 className="text-4xl font-bold text-[#212121]">{offer.title}</h3>
      <p className="text-lg text-[#5C5C5B] max-w-md pt-3">
        {offer.description}
      </p>
      <div className="flex justify-center items-center gap-5 text-accent text-lg pt-2">
        <div className="flex flex-col items-center">
          <span className="text-3xl text-secondary font-semibold">
            {timeLeft.days}
          </span>
          <span className="text-sm font-medium">اليوم</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl text-secondary font-semibold">
            {timeLeft.hours}
          </span>
          <span className="text-sm font-medium">ساعات</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl text-secondary font-semibold">
            {timeLeft.minutes}
          </span>
          <span className="text-sm font-medium">دقيقة</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl text-secondary font-semibold">
            {timeLeft.seconds}
          </span>
          <span className="text-sm font-medium">ثانية</span>
        </div>
      </div>
      <Link to="/menu" className="pt-5">
        <Button className="px-6 rounded-3xl">أحجز وجبتك الأن</Button>
      </Link>
    </div>
  );
};

export default OfferCard;
