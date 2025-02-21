import { useState } from "react";
import Meal from "../../../assets/meal.svg";
import { Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/elements/Button";
import ProductCard from "../../../components/ui/ProductCard";
import Pizza from "../../../assets/food2.svg";
import { SoArrowDown } from "solom-icon";

const CartPage = () => {
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

  const [quantity, setQuantity] = useState(1);

  return (
    <section id="cart" className="relative">
      <div className="flex flex-col items-center justify-center mt-32 pb-10 container">
        <div className="w-full flex justify-between items-start gap-5">
          <div className="w-1/3 flex flex-col justify-center">
            <div className="border rounded-lg p-4 shadow-md">
              <h2 className="text-xl font-bold mb-4">ملخص الدفع</h2>
              <div className="flex items-center border border-[#BABABA] rounded-3xl overflow-hidden mb-4">
                <input
                  type="text"
                  placeholder="رمز الخصم"
                  className="w-full p-2 px-4 outline-none"
                />
                <button className="bg-black/45 text-white px-4 py-2">
                  تطبيق
                </button>
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
              <Link to="/checkout">
                <Button fullWidth className="px-6 rounded-3xl">
                  متابعة للشراء
                </Button>
              </Link>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">اخر العروض خصيصا لك</h2>
              <ProductCard image={Pizza} name="Italian Pizza" price={230} dir />
              <SoArrowDown className="mt-8 w-6 h-6 text-[#BEA71D] mx-auto cursor-pointer" />
            </div>
          </div>
          <div className="w-2/3 flex flex-col gap-4">
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
                    <p className="text-primary font-bold">
                      {item.price} دولارًا
                    </p>
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
                  <div className="w-full flex items-center justify-between border border-[#650E11] rounded-3xl mt-5">
                    <button
                      className="px-6 py-2 cursor-pointer"
                      onClick={() => setQuantity(quantity - 1)}
                      disabled={quantity === 1}
                    >
                      <Minus className="text-[#650E11] w-4" />
                    </button>
                    <span className="px-4 text-[#650E11] text-lg">
                      {quantity}
                    </span>
                    <button
                      className="px-6 py-2 cursor-pointer"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="text-[#650E11] w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
