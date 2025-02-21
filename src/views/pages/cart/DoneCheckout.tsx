import { Link } from "react-router-dom";
import EmptyCart from "../../../assets/done.svg";
import Button from "../../../components/ui/elements/Button";

const DoneCheckoutPage = () => {
  return (
    <section id="doneCheckout" className="relative">
      <div className="flex flex-col items-center justify-center mt-32 pb-10 container">
        <img className="w-72" src={EmptyCart} alt="Empty" />
        <div className="mt-10 text-center space-y-1">
          <h2 className="text-black text-3xl">
            تهانينا، لقد{" "}
            <span className="font-medium">تم تأكيد طلبك بنجاح</span>
          </h2>
          <p className="text-[#626262]/75 text-xl">
            شكراً لجهودك ووقتك، وشكراً لاختيارك لنا ولخدماتنا
          </p>
        </div>
        <Link to="/" className="mt-5">
          <Button className="px-6 rounded-3xl">العودة للرئيسية</Button>
        </Link>
      </div>
    </section>
  );
};

export default DoneCheckoutPage;
