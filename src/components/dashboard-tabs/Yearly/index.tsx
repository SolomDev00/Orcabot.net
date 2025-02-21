import Button from "../../ui/elements/Button";
import "../Tab.style.css";

export default function YearlyTab() {
  return (
    <div className="w-full h-auto flex flex-row items-center justify-between">
      <div className="w-full flex flex-row items-center justify-between gap-5 mt-5 max-sm:flex-col">
        <div className="w-full bg-white p-3 rounded-2xl flex flex-col items-center justify-between space-y-4 relative overflow-hidden max-sm:w-full">
          <div
            className="absolute top-0 left-0 w-full h-12 rounded-md"
            style={{
              background: "linear-gradient(135deg, #FFC327 0%, #ffffff 100%)",
            }}
          ></div>
          <div className="flex flex-col items-center justify-between space-y-8 pt-6">
            <h3 className="text-[#FFC327] text-3xl font-semibold mt-2">
              العضوية الذهبية
            </h3>
            <div className="bg-[#FFF4F0] p-3 rounded-xl text-center flex items-end gap-1">
              <h2 className="text-[#FFC327] text-5xl font-bold">$700</h2>
              <h3 className="text-gray-500 text-lg font-semibold">/ سنوياً</h3>
            </div>
            <h3 className="text-black text-2xl font-medium">سبايسي مرتين</h3>
          </div>
          <Button fullWidth className="bg-[#FFC327] hover:bg-[#FFC327]/90">
            اختيار الخطة
          </Button>
        </div>
        <div className="w-full bg-white p-3 rounded-2xl flex flex-col items-center justify-between space-y-4 relative overflow-hidden max-sm:w-full">
          <div
            className="absolute top-0 left-0 w-full h-12 rounded-md"
            style={{
              background: "linear-gradient(135deg, #A0AEC0 0%, #ffffff 100%)",
            }}
          ></div>
          <div className="flex flex-col items-center justify-between space-y-8 pt-6">
            <h3 className="text-[#A0AEC0] text-3xl font-semibold mt-2">
              العضوية الفضية
            </h3>
            <div className="bg-[#FFF4F0] p-3 rounded-xl text-center flex items-end gap-1">
              <h2 className="text-[#A0AEC0] text-5xl font-bold">$300</h2>
              <h3 className="text-gray-500 text-lg font-semibold">/ سنوياً</h3>
            </div>
            <h3 className="text-black text-2xl font-medium">
              سبايسي مرة واحده
            </h3>
          </div>
          <Button fullWidth className="bg-[#A0AEC0] hover:bg-[#A0AEC0]/90">
            اختيار الخطة
          </Button>
        </div>
      </div>
    </div>
  );
}
