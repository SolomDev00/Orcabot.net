import { SoStar } from "solom-icon";

const LandingSection = () => {
  return (
    <section id="hero">
      <div className="mt-48 flex flex-col justify-center items-center max-sm:container">
        <div className="flex flex-col justify-center items-center gap-8">
          <a href="./pages/subscriptions.html">
            <div
              data-aos="fade-up"
              className="welcome-box py-[8px] px-4 border border-[#7042f88b] opacity-[0.9] cursor-pointer"
            >
              <h3 className="welcome-text text-base pr-1">
                متاح الأشتراكات الآن
              </h3>
              <SoStar className="text-[#8b64ff] mr-[10px] w-6" />
            </div>
          </a>
          <h2
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-3xl text-white text-center w-[500px] max-sm:text-2xl max-sm:w-[400px]"
          >
            <span className="liner cursor-pointer">
              رفيقك الذكي لإدارة السيرفر الخاص بك{" "}
            </span>
            بكفاءة <span className="mark">عالية</span> وسهولة.
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="text-lg text-gray-400 text-center w-[700px] max-sm:w-[400px]"
          >
            اكتشف قوة <span className="text-indigo-700">أوركا بوت</span>، الشريك
            الذكي الذي يجمع بين الأناقة والوظائف المتعددة، يُعد
            <span className="text-indigo-700">أوركا بوت</span> حلاً مبتكرًا
            وشاملًا لإدارة السيرفر بكفاءة عالية، مما يجعل تجربة الإدارة أكثر
            سلاسة وتنظيمًا مع مجموعة متنوعة من الأنظمة والخدمات التي تلبي
            احتياجاتك الفريدة ...
          </p>
          <div className="flex flex-row justify-between items-center gap-5">
            <button
              data-aos="fade-left"
              data-aos-duration="900"
              className="bg-indigo-600 hover:bg-indigo-500 py-2 px-4 flex items-center justify-center rounded-md font-medium text-black duration-500 dark:text-white disabled:bg-primary disabled:hover:bg-indigo-600 disabled:cursor-not-allowed"
            >
              ضفُ إلى سيرفرك
            </button>
            <button
              data-aos="fade-right"
              data-aos-duration="900"
              className="bg-indigo-600 hover:bg-indigo-500 py-2 px-4 flex items-center justify-center rounded-md font-medium text-black duration-500 dark:text-white disabled:bg-primary disabled:hover:bg-indigo-600 disabled:cursor-not-allowed"
            >
              رؤية المميزات
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
