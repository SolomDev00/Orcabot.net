import { SoArrowLeft, SoArrowRight } from "solom-icon";
import Meal from "../../../assets/meal.svg";
import Button from "../../../components/ui/elements/Button";
import Stepper from "../../../components/ui/Stepper";
import { Link } from "react-router-dom";

const ViewOrderPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "اسم الوجبة",
      price: 55,
      quantity: 1,
      image: Meal,
    },
    {
      id: 2,
      name: "اسم الوجبة",
      price: 55,
      quantity: 1,
      image: Meal,
    },
  ];

  return (
    <section id="orders" className="w-full flex flex-col items-center pr-8">
      <div className="w-full flex flex-col gap-6">
        <div className="flex items-center gap-5">
          <Link to={"/user/orders"} className="p-2 rounded-full bg-[#E7E7E7]">
            <SoArrowRight className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-3 text-black/70 text-lg">
            <Link to={"/user/profile"}>حسابي</Link>
            <SoArrowLeft className="w-5 h-5" />
            <Link to={"/user/orders"}>الطلبات</Link>
            <SoArrowLeft className="w-5 h-5" />
            <h3 className="text-black font-semibold">الطلب #XXXXXX</h3>
          </div>
        </div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border border-[#E5E7EB] rounded-xl py-2 px-3 shadow-sm"
          >
            <div className="w-1/3">
              <img
                src={item.image}
                alt={item.name}
                className="h-full rounded-lg object-cover"
              />
            </div>
            <div className="w-2/3">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-black/85">
                  {item.name}
                </h2>
                <p className="text-primary font-bold">{item.price} دولارًا</p>
              </div>
              <p className="text-black/70">الإضافات (إن وجدت)</p>
              <div className="flex flex-col text-sm text-primary mt-2">
                <div className="w-full flex items-center justify-between text-black/85 font-semibold">
                  <span>سبايسي</span>
                  <span>$$$$</span>
                </div>
                <div className="w-full flex items-center justify-between text-black/85 font-semibold">
                  <span>سبايسي</span>
                  <span>$$$$</span>
                </div>
                <div className="w-full flex items-center justify-between text-black/85 font-semibold">
                  <span>سبايسي</span>
                  <span>$$$$</span>
                </div>
              </div>
              <Button fullWidth className="gradientBg mt-8 rounded-3xl py-2">
                إلغاء الطلب
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mt-12">
        <h2 className="text-right w-full text-black font-bold text-lg mb-4">
          التتبع
        </h2>
        <Stepper status={"confirmed"} />
      </div>
      <div className="w-full mt-12">
        <h2 className="text-right w-full text-black font-bold text-lg mb-3">
          التسليم إلى
        </h2>
        <div>
          <h3 className="text-black/85 text-lg mb-1">العنوان</h3>
          <p className="text-[#374151] text-lg">
            847 جسر جويس Apt. 174 الممتاز لندن، المملكة المتحدة الممتاز
            474-769-3919.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center mt-14">
        <div className="w-full flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">ملخص الدفع</h2>
          <h2 className="text-base text-black/85">النقد على التسليم</h2>
        </div>
        <div className="bg-red-50 p-4 rounded-lg mb-5">
          <p className="flex justify-between">
            <span>المجموع الفرعي (2)</span>
            <span>55 جنيه</span>
          </p>
          <p className="flex justify-between">
            <span>الرسوم</span>
            <span>55 جنيه</span>
          </p>
          <p className="flex justify-between font-bold text-base">
            <span>المجموع</span>
            <span>110 جنيه</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ViewOrderPage;
