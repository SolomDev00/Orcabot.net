import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoImg from "../../assets/logo.svg";
import Facebook from "../../assets/facebook.svg";
import Insta from "../../assets/instagram.svg";
import LinkedIn from "../../assets/linkedIn.svg";
import Twitter from "../../assets/twitter.svg";
import { SoLocation, SoMail, SoPhone, SoArrowLeft } from "solom-icon";
import toast from "react-hot-toast";
import { scroller } from "react-scroll";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (section: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { targetSection: section } });
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };

  return (
    <footer
      id="contact"
      className="bg-white border-t border-[#DFDFDF] pb-5 relative overflow-hidden"
    >
      <div className="container relative z-50">
        <div className="w-full flex flex-row items-start justify-between gap-5 pt-10 max-sm:flex-col max-sm:justify-center max-sm:gap-10">
          <div className="flex-shrink-0 w-1/4 space-y-5 max-sm:w-full max-sm:flex max-sm:flex-col">
            <img
              className="w-32 cursor-pointer"
              src={LogoImg}
              alt="Logo"
              onClick={() => handleScroll("landing")}
            />
            <p className="text-black text-base">
              دجاج طازج، متبل بطعمنا السري، مقلي بمقرمشة هتحبها من أول قضمة
            </p>
            <div className="flex flex-row items-center gap-5">
              <a href="https://www.facebook.com/citEgypt" target="_blank">
                <img className="w-8" src={Facebook} alt="Facebook" />
              </a>
              <a href="https://www.facebook.com/citEgypt" target="_blank">
                <img className="w-8" src={Twitter} alt="Twitter" />
              </a>
              <a
                href="https://www.instagram.com/citegypt?igsh=MXY5MjViajd2a3l1YQ=="
                target="_blank"
              >
                <img className="w-8" src={Insta} alt="Insta" />
              </a>
              <a
                href="https://eg.linkedin.com/company/chamber-of-information-technology-&-telecommunication-cit-"
                target="_blank"
              >
                <img className="w-8" src={LinkedIn} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 w-1/4 max-sm:w-full">
            <h4 className="text-lg max-sm:text-base text-[#110229] font-extrabold uppercase">
              شركتنا
            </h4>
            <ul className="flex flex-col items-start gap-3 mt-5">
              <li
                className="text-base font-semibold max-sm:text-sm text-[#374151] cursor-pointer"
                onClick={() => handleScroll("featuredSection")}
              >
                قائمة الطعام
              </li>
              <Link to="/about-us" onClick={() => scroll(0, 0)}>
                <li className="text-base font-semibold max-sm:text-sm text-[#374151]">
                  المميزات
                </li>
              </Link>
              <li
                className="text-base font-semibold max-sm:text-sm text-[#374151] cursor-pointer"
                onClick={() => handleScroll("trendingSection")}
              >
                من نحن
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0 w-1/4 max-sm:w-full">
            <h4 className="text-lg max-sm:text-base text-[#110229] font-extrabold uppercase">
              الاتصال
            </h4>
            <ul className="flex flex-col items-start gap-3 mt-5">
              <li
                className="flex items-center gap-3 text-base font-semibold max-sm:text-sm text-[#374151] cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText("+11 2 3456 7890");
                  toast.success("The number was copied successfully!");
                  window.location.href = "tel:11234567890";
                }}
              >
                <SoPhone className="w-6 h-6 text-secondary flex-shrink-0" />
                +11 2 3456 7890
              </li>
              <li
                className="flex items-center gap-3 text-base font-semibold max-sm:text-sm text-[#374151] cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText("cit@cit-fei.org");
                  toast.success("The email was copied successfully!");
                  window.location.href = "mailto:cit@cit-fei.org";
                }}
              >
                <SoMail className="w-6 h-6 text-secondary flex-shrink-0" />
                bfc@support.eg
              </li>
              <li
                className="flex items-center gap-3 text-base font-semibold max-sm:text-sm text-[#374151] cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "51 Abbas El-Akkad, Al Manteqah Al Oula, Nasr City, Cairo"
                  );
                  toast.success(
                    "The location google map was copied successfully!"
                  );
                  window.open(
                    "https://www.google.com/maps?q=51+Abbas+El-Akkad,+Nasr+City,+Cairo",
                    "_blank"
                  );
                }}
              >
                <SoLocation className="w-6 h-6 text-secondary flex-shrink-0" />
                دمياط الجديدة ، المنطقة المركزية
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0 w-1/4 max-sm:w-full">
            <h4 className="text-lg max-sm:text-base text-[#110229] font-extrabold uppercase">
              الاشتراك
            </h4>
            <ul className="flex flex-col items-start gap-6 mt-5">
              <p className="text-[#8F90A6] text-sm font-semibold">
                اشترك للحصول على أحدث الأخبار والعروض منا
              </p>
              <div className="flex items-center border border-gray-300 rounded-lg pr-2">
                <input
                  type="email"
                  minLength={5}
                  maxLength={35}
                  placeholder="الايميل الخاص بك"
                  className="text-gray-400 focus:outline-none outline-none rounded-lg px-3 py-3 text-md w-full bg-transparent duration-200"
                  required
                />
                <span
                  className="gradientBg flex items-center justify-center w-fit p-2 rounded-lg cursor-pointer ml-1"
                  onClick={() =>
                    toast.error("The property is inactive now, try later!")
                  }
                >
                  <SoArrowLeft className="w-5 h-5 text-white" />
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center gap-3 max-sm:mb-3">
        <div className="w-full h-[1px] bg-[#DFDFDF] mt-10 mb-3" />
        <p className="text-sm font-bold text-[#4B5563] max-sm:text-xs">
          جميع حقوق الطبع والنشر مملوكة لشركة{" "}
          <span className="gradientText">BFC</span> © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
