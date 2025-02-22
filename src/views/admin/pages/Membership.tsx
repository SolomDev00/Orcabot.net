import { SoCheckBadge } from "solom-icon";
import Button from "../../../components/ui/elements/Button";
import DashboardSelectPlan from "../../../components/dashboard-tabs";

const SubscriptionsPage = () => {
  const plans = [
    {
      title: "الأشتراك الشهري",
      description:
        "أشتراك لمدة شهر كامل شامل كل المميزات (داشبورد + دعم فني + الخ .. )",
      price: "30$",
      duration: "/ شهر",
      features: ["حماية متطورة", "إضافات زيادة", "متاح لوج كامل", "دعم فني"],
      highlight: false,
    },
    {
      title: "الأشتراك السنوي",
      description:
        "أشتراك لمدة سنة كاملة شامل كل المميزات (داشبورد + دعم فني + الخ .. )",
      price: "215$",
      duration: "/ سنوياً",
      features: ["حماية متطورة", "إضافات زيادة", "متاح لوج كامل", "دعم فني"],
      highlight: false,
    },
    {
      title: "الأشتراك الربع سنوي",
      description:
        "أشتراك لمدة 3 أشهر كاملين شامل كل المميزات (داشبورد + دعم فني + الخ .. )",
      price: "70$",
      duration: "/ 3 أشهر",
      features: ["حماية متطورة", "إضافات زيادة", "متاح لوج كامل", "دعم فني"],
      highlight: true,
    },
  ];

  return (
    <div className="w-full p-5 text-white">
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 mb-12">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-full bg-[#3a3a4b] p-6 rounded-lg border border-[#434164] relative ${
              plan.highlight ? "bg-prime border-primary" : ""
            } ${
              index === 2
                ? "lg:col-span-2 lg:w-[50%] mx-auto mt-2"
                : "lg:col-span-1"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-5 -left-4 p-2 px-4 text-white rounded-full border-4 border-[#1E1D2F] gradientBg">
                الأكثر مبيعاً
              </div>
            )}
            <h3 className="text-white text-2xl mb-3">{plan.title}</h3>
            <p className="text-gray-400 text-base w-[300px] max-lg:w-[98%] mb-5">
              {plan.description}
            </p>
            <span className="flex flex-row items-end gap-1 mb-5">
              <h4 className="text-white text-3xl">{plan.price}</h4>
              <p className="text-gray-400 text-base">{plan.duration}</p>
            </span>
            <div className="mb-8">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex flex-row items-center gap-3">
                  <SoCheckBadge className="text-gray-400" />
                  <p className="text-gray-400">{feature}</p>
                </div>
              ))}
            </div>
            <Button fullWidth className="bg-primary hover:bg-primary/90">
              {`الحصول على ${plan.title}`}
            </Button>
          </div>
        ))}
      </div>
      <DashboardSelectPlan />
    </div>
  );
};

export default SubscriptionsPage;
