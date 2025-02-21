import Speed from "../../assets/icons/speed.svg";
import Taste from "../../assets/icons/mael.svg";
import High from "../../assets/icons/high.svg";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: High,
      title: "الجودة العالية",
      description:
        "بنستخدم دجاج طازج ومثيل بتتبيلتنا السرية اللي بتخليه مش زي أي دجاج، كل وجبة بتتجهز بعناية عشان نوصل لك طعم وجودة مش هتلاقيها في أي مكان تاني.",
    },
    {
      icon: Taste,
      title: "الطعم المميز",
      description:
        "دجاج BFC مش مجرد دجاج عادي، ده طعم فريد ومميز بيخليك تعمل أكل أصابعك! الوصفات السرية والتتبيلة المميزة بتخلينا مختلفين.",
    },
    {
      icon: Speed,
      title: "السرعة والراحة",
      description:
        "خدمة توصيل سريعة وموثوقة علشان نوصل ليك وجبتك وهي لسة ساخنة، لو مش عايز تنتظر تقدر تطلب مسبقًا وتمر تاخد الوجبة وهي جاهزة.",
    },
  ];

  return (
    <section className="bg-white -mt-28">
      <div className="container mx-auto text-center">
        <span className="bg-secondary text-[#53490D] px-4 py-2 rounded-full text-base font-bold">
          ما يميزنا
        </span>
        <h2 className="text-4xl font-extrabold mt-8">لماذا يختارنا الناس؟</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-7">
          لأننا بنوفر لك دجاج طازج يوميًا، مثيل بتتبيلتنا السرية اللي بتخليه مش
          زي أي دجاج؟ مع سرعة في التوصيل، أسعار تناسب الكل، وتجربة أكل مش
          هتنساه. بنلتزم بأعلى معايير النظافة والأمان، ونسمع لآرائك علشان نكون
          دايما عند حسن ظنك.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 p-6 rounded-xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-32 h-32"
              />
              <h3 className="text-accent text-2xl font-bold mt-8">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
