import Food from "../../assets/choose.svg";
import Dine from "../../assets/icons/food.svg";
import Takeaway from "../../assets/icons/order.svg";
import Delivery from "../../assets/icons/delivery.svg";
import Call from "../../assets/icons/callus.svg";

const ChooseSection = () => {
  return (
    <section id="choose" className="relative z-10 mt-32 container">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/3 text-center lg:text-right -mt-64">
          <h2 className="text-2xl text-accent lg:text-3xl font-bold">
            اختر الطريقة اللي تناسبك واستمتع بدجاج
          </h2>
          <p className="mt-7 text-xl text-[#434343]">
            اللي مش هيختلف مهما كانت وجبتك وهو الطعم اللذيذ المتعود عليه!
          </p>
          <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
            <img src={Call} alt="اتصل بنا" className="w-8 h-8" />
            <div className="flex flex-col text-[#222222]">
              <span className="text-sm">كيف يمكنك الطلب؟</span>
              <span className="text-base font-semibold">
                يمكنك الاتصال بنا على: 7890-456-0123
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src={Food}
            alt="وجبة دجاج"
            className="max-w-[300px] lg:max-w-[550px]"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/3 -mt-36">
          <img src={Dine} alt="الأكل في المطعم" className="w-[85%]" />
          <img src={Takeaway} alt="الطلب المسبق" className="w-[85%]" />
          <img src={Delivery} alt="التوصيل للبيت" className="w-[85%]" />
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
