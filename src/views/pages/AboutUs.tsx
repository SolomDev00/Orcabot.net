import { Link } from "react-router-dom";
import AboutImg from "../../assets/about.svg";
import Image1 from "../../assets/start.svg";
import Image2 from "../../assets/goal.svg";
import Button from "../../components/ui/elements/Button";
import WhyChooseUsSection from "../website/WhyChooseUsSection";
import AboutUsContact from "../../components/ui/ContactUs";

const AboutUsPage = () => {
  return (
    <section id="aboutUs" className="relative">
      <div className="flex flex-col items-center justify-center mt-48 container">
        <div className="flex flex-col items-center justify-center text-center gap-8">
          <h1 className="text-5xl text-accent font-medium">
            <span className="text-primary">BFC</span> مش مجرد مطعم دجاج، ده جزء
            من حياتك
          </h1>
          <p className="text-[#252525] text-base font-medium">
            في BFC، احنا مش بنقدم دجاج، بنقدم ذكريات! من أول قضمة هتعرف إنك في
            المكان الصح. احنا بدأنا برؤية بسيطة: "دجاج طازج، طعم مش بيتكرر"،
            والنهاردة بنفتخر إننا بنكون جزء من يوميات آلاف العائلات والأصحاب في
            مصر
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-6 mt-16">
          <img src={AboutImg} alt="من نحن ؟" />
          <Link to="/menu">
            <Button className="px-6 rounded-3xl">أحجز وجبتك الأن</Button>
          </Link>
        </div>
        <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-8 mt-24">
          <div className="lg:w-1/2">
            <img src={Image1} alt="بدايتنا" />
          </div>
          <div className="lg:w-1/2 text-right">
            <span className="bg-secondary text-[#53490D] px-4 py-1 rounded-full text-sm">
              قصتنا
            </span>
            <h2 className="text-4xl font-bold mt-4">بدايتنا</h2>
            <p className="text-gray-700 text-lg mt-4 leading-loose">
              بدأت قصتنا من حبنا للدجاج وتحديدًا للطعم اللي بيجمع الناس. قررنا
              نخلي دجاجنا مش زي أي دجاج؛ فطورنا تتبيلتنا السرية اللي بتخليه
              مقرمش من بره طري من جوه، ولذيذ من أول قضمة لحد آخر واحدة.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 py-20">
          <div className="lg:w-1/2">
            <img src={Image2} alt="هدفنا" />
          </div>
          <div className="lg:w-1/2 text-right">
            <span className="bg-secondary text-[#53490D] px-4 py-1 rounded-full text-sm">
              رسالتنا
            </span>
            <h2 className="text-4xl font-bold mt-4">هدفنا</h2>
            <p className="text-gray-700 text-lg mt-4 leading-loose">
              رسالتنا بسيطة: "نوصل ليك طعم بيتكلم عن نفسه!"
            </p>
            <ul className="list-disc pr-6 mt-4 text-gray-700 text-lg">
              <li>بنستخدم دجاج طازج يوميًا</li>
              <li>بننقل بوصفاتنا السرية اللي بتخليه مش زي أي دجاج</li>
              <li>بنقلي بزيت نقي 100% علشان صحتك تهمنا</li>
            </ul>
          </div>
        </div>
        <div className="mt-32">
          <WhyChooseUsSection />
        </div>
      </div>
      <AboutUsContact />
      <div className="aboutbg-left" />
      <div className="aboutbg-right" />
    </section>
  );
};

export default AboutUsPage;
