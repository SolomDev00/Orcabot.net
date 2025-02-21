import { Check, Map, Plus } from "lucide-react";
import { useState } from "react";
import Button from "../../../components/ui/elements/Button";
import { Link } from "react-router-dom";
import { SoCreditCard, SoDelivery, SoEditNote, SoMoney } from "solom-icon";
import { PhoneInput } from "react-international-phone";

const locations = [
  {
    id: 1,
    type: "المنزل",
    phone: "0122222222",
    address: "33 شارع جابر الاسكندرية",
  },
  {
    id: 2,
    type: "المكتب",
    phone: "0345 444 4444",
    address: "33 شارع جابر الاسكندرية",
  },
  {
    id: 3,
    type: "مكان المطعم",
    phone: "0345 444 4444",
    address: "33 شارع جابر الاسكندرية",
  },
];

const options = [
  {
    id: 1,
    type: "card",
    name: "بطاقة الائتمان",
    icon: SoCreditCard,
  },
  {
    id: 2,
    type: "cash",
    name: "النقود",
    icon: SoMoney,
  },
];

const CheckoutPage = () => {
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [phone, setPhone] = useState("");

  return (
    <section id="checkout" className="relative">
      <div className="flex flex-col items-center justify-center mt-32 pb-10 container">
        <div className="w-full flex justify-between items-start gap-5">
          <div className="w-1/3 flex flex-col justify-center">
            <div className="border rounded-xl p-4 shadow-md">
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
          </div>
          <div className="w-2/3 flex flex-col gap-6">
            <div className="px-4">
              <h2 className="text-lg font-bold mb-4">عنوان الشحن</h2>
              <div className="h-48 bg-gray-200 flex items-center justify-center rounded-3xl">
                <Map size={50} className="text-gray-500" />
              </div>
              <div className="mt-4 flex flex-col gap-3">
                {locations.map((item) => (
                  <div
                    key={item.id}
                    className={`w-full flex justify-between items-center gap-3 py-4 px-6 border rounded-3xl cursor-pointer ${
                      selectedAddress === item.id
                        ? "bg-[#EFEFEF]"
                        : "bg-[#EFEFEF]"
                    }`}
                    onClick={() => setSelectedAddress(item.id)}
                  >
                    <div>
                      <h3 className="text-xl font-medium text-[#06161C]">
                        {item.type}
                      </h3>
                      <p className="text-lg text-[#494949]">{item.phone}</p>
                      <p className="text-lg text-[#494949]">{item.address}</p>
                    </div>
                    <div
                      className={`w-6 h-6 border-2 flex items-center justify-center rounded-full ${
                        selectedAddress === item.id
                          ? "border-primary bg-primary"
                          : "border-gray-400"
                      }`}
                    >
                      {selectedAddress === item.id && (
                        <Check size={12} className="text-white" />
                      )}
                    </div>
                  </div>
                ))}
                <Button
                  variant={"outline"}
                  className="!text-black/55 border border-[#E5E7EB] rounded-3xl"
                >
                  <Plus className="text-[#737373]" /> إضافة
                </Button>
                <div className="w-full flex items-center justify-start gap-5 border border-[#E5E7EB] rounded-full py-3 px-5">
                  <SoDelivery className="text-[#C4A44F] w-6 h-6" />
                  <span className="text-black/85 text-lg">
                    سنصل خلال 30 دقيقة
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-2 pb-1 text-right my-5">
              <div className="w-full flex items-center justify-between px-2">
                <label className="text-black/85 font-semibold text-base">
                  رقم الهاتف
                </label>
                <div className="flex items-center gap-1 text-primary cursor-pointer">
                  <SoEditNote />
                  <p>تحرير</p>
                </div>
              </div>
              <div className="space-y-2 border border-gray-300 rounded-3xl">
                <PhoneInput
                  autoFocus
                  showDisabledDialCodeAndPrefix
                  value={phone}
                  defaultCountry="eg"
                  onChange={(phone) => setPhone(phone)}
                  placeholder="برجاء ادخال رقم الهاتف الخاص بك"
                  inputProps={{
                    style: {
                      direction: phone === "" ? "rtl" : "ltr",
                    },
                  }}
                />
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-4">الدفع مع</h2>
              <div className="mt-4 flex flex-col gap-3">
                {options.map((item) => (
                  <div
                    key={item.id}
                    className={`w-full flex items-center justify-start gap-5 border border-[#E5E7EB] rounded-full py-4 px-5`}
                    onClick={() => setSelectedPayment(item.type)}
                  >
                    <div
                      className={`w-6 h-6 border-2 flex items-center justify-center rounded-full ${
                        selectedPayment === item.type
                          ? "border-primary bg-primary"
                          : "border-gray-400"
                      }`}
                    >
                      {selectedPayment === item.type && (
                        <Check size={12} className="text-white" />
                      )}
                    </div>
                    <item.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-medium text-[#06161C]">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>
              {selectedPayment === "card" && (
                <div className="mt-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="الاسم على البطاقة"
                      className="w-1/2 p-3 border rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="وسيم وائل"
                      className="w-1/2 p-3 border rounded-lg"
                      disabled
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="رقم البطاقة"
                    className="w-full p-3 border rounded-lg mt-2"
                  />
                  <div className="flex gap-2 mt-2">
                    <input
                      type="text"
                      placeholder="تاريخ الانتهاء (MM/YY)"
                      className="w-1/2 p-3 border rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-1/2 p-3 border rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
