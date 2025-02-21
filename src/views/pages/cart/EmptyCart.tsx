import { Link } from "react-router-dom";
import EmptyCart from "../../../assets/emptycart.svg";
import Button from "../../../components/ui/elements/Button";

const EmptyCartPage = () => {
  return (
    <section id="emptyCart" className="relative">
      <div className="flex flex-col items-center justify-center mt-32 pb-10 container">
        <img className="w-80" src={EmptyCart} alt="Empty" />
        <div className="mt-10 text-center space-y-1">
          <h2 className="text-[#626262] text-3xl">
            تبدو سلة التسوق الخاصة بك فارغة
          </h2>
          <p className="text-[#626262]/75 text-xl">
            يمكنك إيجاد العديد من العروض المثيره للاهتمام في الرئيسية
          </p>
        </div>
        <Link to="/" className="mt-5">
          <Button className="px-6 rounded-3xl">العودة للرئيسية</Button>
        </Link>
      </div>
    </section>
  );
};

export default EmptyCartPage;
