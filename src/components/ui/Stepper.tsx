import "./elements.style.css";
import { Check } from "lucide-react";
import { SoCheckBadge, SoDelivery, SoHome } from "solom-icon";

interface StepperProps {
  status: "confirmed" | "preparing" | "delivered";
}

const Stepper: React.FC<StepperProps> = ({ status }) => {
  const steps = [
    { icon: <SoCheckBadge className="w-5 h-5" />, label: "تأكيد الطلب" },
    { icon: <SoDelivery className="w-5 h-5" />, label: "تجهيز الطلب" },
    { icon: <SoHome className="w-5 h-5" />, label: "تسليم" },
  ];

  const statusIndex = steps.findIndex(
    (step) =>
      step.label ===
      (status === "confirmed"
        ? "تأكيد الطلب"
        : status === "preparing"
        ? "تجهيز الطلب"
        : "تسليم")
  );

  return (
    <div className="w-full flex justify-between">
      {steps.map((step, i) => (
        <div
          key={i}
          className={`w-full step-item ${statusIndex === i && "active"} ${
            i < statusIndex && "complete"
          }`}
        >
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 z-10 ${
              i <= statusIndex
                ? "border-primary bg-primary text-white"
                : "border-gray-300 bg-white text-gray-300"
            }`}
          >
            {i < statusIndex ? <Check size={18} /> : step.icon}
          </div>
          <p
            className={`text-sm mt-2 ${
              i === statusIndex ? "text-primary font-semibold" : "text-gray-400"
            }`}
          >
            {step.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
