import { Link } from "react-router-dom";
import MenuImg from "../../assets/menu.svg";
import Button from "../../components/ui/elements/Button";
import Rizzo from "../../assets/rizzo.svg";
import Sandwich from "../../assets/sandwich.svg";
import Broast from "../../assets/broast.svg";
import Strips from "../../assets/strips.svg";
import MostOrderedSection from "../website/MostOrderedSection";
import Offer1 from "../../assets/offer1.svg";
import Offer2 from "../../assets/offer2.svg";
import Food1 from "../../assets/food1.svg";
import Food2 from "../../assets/food2.svg";
import OfferCard from "../../components/ui/OfferCard";
import SpecialOfferCard from "../../components/ui/SpecialOfferCard";

const categories = [
  { title: "وجبات الأرز والريزو", img: Rizzo, dishes: 12 },
  { title: "ساندوتشات", img: Sandwich, dishes: 12 },
  { title: "وجبات بروستد", img: Broast, dishes: 4 },
  { title: "وجبات استربس", img: Strips, dishes: 12 },
];

const offers = [
  {
    title: "ساخنة KFC Chiken الجناح والبطاطس الفرنسية",
    description:
      "وجبة الدجاج مع الجناح المقرمش، صلصة التغميس والبطاطس المقرمشة.",
    image: Offer1,
    timeLeft: { days: 22, hours: 48, minutes: 30 },
  },
  {
    title: "ساخنة KFC Chiken الجناح والبطاطس الفرنسية",
    description:
      "وجبة الدجاج مع الجناح المقرمش، صلصة التغميس والبطاطس المقرمشة.",
    image: Offer2,
    timeLeft: { days: 22, hours: 48, minutes: 30 },
  },
];

const MenuPage = () => {
  return (
    <section id="menu" className="relative">
      <div className="flex flex-col items-center justify-center mt-48 pb-10 container">
        <div className="flex flex-col items-center justify-center text-center gap-8">
          <h1 className="text-5xl text-accent font-medium">
            استمتع بأشهى الوجبات – منيو من{" "}
            <span className="text-primary">BFC</span>
          </h1>
          <p className="text-[#252525] text-base font-medium max-w-xl">
            اكتشف تشكيلة رائعة من وجبات البروستد، الاستربس، الساندوتشات،
            والوجبات العائلية اللذيذة. اختر وجبتك المفضلة وأضف الإضافات الشهية
            لمذاق لا يُقاوم!
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-16 mt-10">
          <Link to="/menu">
            <Button className="px-6 rounded-3xl">أحجز وجبتك الأن</Button>
          </Link>
          <img src={MenuImg} alt="قائمة الطعام" />
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-16 mt-44">
          <div className="space-y-3 text-center">
            <h2 className="text-4xl font-semibold text-center text-accent">
              اختر من بين افضل الفئات لدينا
            </h2>
            <p className="text-lg text-secondary font-semibold">
              قم بالإسراع! العروض لفترة محدودة
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="relative overflow-hidden hover:scale-105 transition-all duration-300">
                  <img
                    src={category.img}
                    alt={category.title}
                    className="w-52 object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mt-4">{category.title}</h3>
                <p className="text-primary text-sm font-medium">
                  {category.dishes} طبق في القائمة
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="my-16">
          <MostOrderedSection />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-6 mt-10">
        <div className="w-full flex flex-col items-start justify-end text-right gap-3 container">
          <span className="bg-secondary text-[#53490D] px-4 py-1 rounded-full text-sm font-medium">
            العروض
          </span>
          <h2 className="text-3xl font-bold text-center">عروض هذا اليوم</h2>
        </div>
        <div className="grid grid-cols-1 w-full">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className={`flex ${
                idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } items-center justify-between overflow-hidden`}
            >
              <div className="w-1/2">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full max-h-[450px] object-cover"
                />
              </div>
              <div className="w-1/2 p-6 space-y-4">
                <OfferCard
                  offer={{
                    title: offer.title,
                    description: offer.description,
                    image: offer.image,
                    endTime: "2024-02-15T23:59:59",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-32 pb-32 container">
        <div className="w-full flex flex-col items-start justify-end text-right gap-3">
          <span className="bg-secondary text-[#53490D] px-4 py-1 rounded-full text-sm font-medium">
            العروض
          </span>
          <h2 className="text-3xl font-bold text-center">عروض هذا اليوم</h2>
        </div>
        <div className="w-full flex flex-row justify-between items-center gap-5 mt-5">
          <SpecialOfferCard
            image={Food1}
            title="شرائح اللحم والشواء"
            description="الكلاسيكيات الكنسية لتجويف مشروبات Tiki"
            price="250"
          />
          <SpecialOfferCard
            image={Food2}
            title="شرائح اللحم والشواء"
            description="الكلاسيكيات الكنسية لتجويف مشروبات Tiki"
            price="250"
          />
        </div>
      </div>
      <div className="aboutbg-left" />
      <div className="aboutbg-right" />
    </section>
  );
};

export default MenuPage;
