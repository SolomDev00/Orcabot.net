import { Link } from "react-router-dom";
import LandingImg from "../../assets/landing.svg";
import Button from "../../components/ui/elements/Button";

const LandingSection = () => {
  return (
    <section id="landing" className="relative">
      <div className="mt-36 h-auto">
        <div className="w-full flex flex-row justify-between items-start container max-sm:flex-col max-sm:space-x-0">
          <div className="flex flex-col justify-between items-start self-center w-[45%] max-sm:w-10/12 space-y-8 max-sm:items-center max-sm:space-y-3 -mt-72">
            <h2 className="text-accent text-5xl font-semibold max-sm:text-3xl max-sm:text-center">
              دجاج <span className="text-primary">BFC</span> الطعم اللي بيجمع
              الأصحاب
            </h2>
            <p className="text-accent text-xl max-sm:text-lg max-sm:text-center pb-10">
              دجاج طازج، متبل بطعمنا المميز، ومقلي بمقرمشية هتحبها, جرب ومتخليش
              الفرصة تفوتك!
            </p>
            <div className="flex flex-row items-center space-x-3 max-sm:flex-col max-sm:space-y-3">
              <Link to="/menu">
                <Button className="px-6 rounded-3xl">أحجز وجبتك الأن</Button>
              </Link>
            </div>
          </div>
          <div className="w-[55%] max-sm:mt-10 max-sm:w-full">
            <img
              className="max-w-[105%] duration-300"
              src={LandingImg}
              alt="Landing"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="bg-left" />
      <div className="bg-right" />
    </section>
  );
};

export default LandingSection;
