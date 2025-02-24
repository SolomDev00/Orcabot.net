import { SoStar } from "solom-icon";
import Button from "../../components/ui/elements/Button";
import { Link } from "react-router-dom";

const LandingSection = () => {
  return (
    <section id="hero">
      <div className="bg-center" />
      <div className="mt-40 flex flex-col justify-center items-center max-sm:container">
        <div className="flex flex-col justify-center items-center gap-8">
          <Link to="./pages/subscriptions.html">
            <div className="welcome-box py-[8px] px-4 border border-primary opacity-[0.9] cursor-pointer">
              <h3 className="welcome-text text-base pr-1">
                متاح الأشتراكات الآن
              </h3>
              <SoStar className="text-primary mr-[10px] w-6" />
            </div>
          </Link>
          <h2 className="text-4xl text-white text-center w-[600px] max-sm:text-2xl max-sm:w-[400px]">
            <span className="liner cursor-pointer">
              رفيقك الذكي لإدارة السيرفر الخاص بك{" "}
            </span>
            بكفاءة <span className="mark">عالية</span> وسهولة.
          </h2>
          <p className="text-lg text-gray-400 text-center w-[700px] max-sm:w-[400px]">
            اكتشف قوة <span className="text-primary">أوركا بوت</span>، الشريك
            الذكي الذي يجمع بين الأناقة والوظائف المتعددة، يُعد{" "}
            <span className="text-primary">أوركا بوت</span> حلاً مبتكرًا وشاملًا
            لإدارة السيرفر بكفاءة عالية، مما يجعل تجربة الإدارة أكثر سلاسة
            وتنظيمًا مع مجموعة متنوعة من الأنظمة والخدمات التي تلبي احتياجاتك
            الفريدة ...
          </p>
          <div className="flex flex-row justify-between items-center gap-5">
            <Button className="gradientBg py-2 px-6 hover:scale-105">
              ضفُ إلى سيرفرك
            </Button>
            <Button className="gradientBg py-2 px-6 hover:scale-105">
              رؤية المميزات
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
