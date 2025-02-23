import { Eye } from "lucide-react";
import { SoArrowTopDouble, SoCatalogue, SoHome2 } from "solom-icon";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <SoHome2 className="text-gray-200" />,
      title: "تنظيم قطاعاتك",
      description:
        "نقوم بعرض جميع احصائيات القطاعات بشكل مستمر و دوري ، تنظيم الحضور و الانصرف الخاص بك لاعب بشكل سهل!",
      image: "./Assets/landing/analytics.svg",
      aos: "fade-left",
    },
    {
      icon: <SoArrowTopDouble className="text-gray-200" />,
      title: "نظام الترقيات",
      description:
        "يقوم البوت تلقائياً بالرصد الأسبوعي لكل لاعب و ترقيته إذا كان يستحق!",
      image: "./Assets/landing/going.svg",
      aos: "fade-right",
    },
    {
      icon: <SoCatalogue className="text-gray-200" />,
      title: "نظام الاشراف",
      description:
        "يتم إدارة نظام الاشراف كامل مع نظام الاجازات تلقائياً دون تدخل منك تماماً!",
      image: "./Assets/landing/users.svg",
      aos: "fade-left",
    },
    {
      icon: <Eye className="text-gray-200" />,
      title: "نظام الرصد",
      description: "رصد كامل لجميع الاعبين و توزيع الأفراد!",
      image: "./Assets/landing/map.svg",
      aos: "fade-right",
    },
  ];

  return (
    <section id="info">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-row${
            index % 2 === 0 ? "" : "-reverse"
          } max-sm:flex-col justify-between items-start mb-44 px-20 max-sm:px-4`}
        >
          <div
            className="left"
            data-aos={item.aos}
            data-aos-duration={600 + index * 50}
          >
            <div className="flex flex-row gap-3 items-center mb-5">
              <div className="icon-border p-2 cursor-pointer">{item.icon}</div>
              <h4 className="text-lg text-[#9a9eb3] uppercase">{item.title}</h4>
            </div>
            <div className="space-y-8 mb-10">
              <h2 className="text-white text-3xl w-[500px] max-sm:w-[380px] max-sm:text-2xl">
                {item.title}
              </h2>
              <p className="text-gray-400 w-[550px] max-sm:w-[350px] text-lg">
                {item.description}
              </p>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-500 py-2 px-4 flex items-center justify-center rounded-md font-medium text-black duration-500 dark:text-white disabled:bg-primary disabled:hover:bg-indigo-600 disabled:cursor-not-allowed">
              معرفة المزيد عن {item.title}
            </button>
          </div>
          <div
            className="right"
            data-aos={item.aos === "fade-left" ? "fade-right" : "fade-left"}
            data-aos-duration={600 + index * 50}
          >
            <img
              className={`max-w-${
                index % 2 === 0 ? "80" : "96"
              } max-sm:max-w-72 cursor-pointer`}
              src={item.image}
              alt={item.title}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default InfoSection;
