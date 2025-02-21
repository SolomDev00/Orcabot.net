import { SoAddSquare } from "solom-icon";

const AdminTeamPage = () => {
  const services = Array.from({ length: 5 }, (_, index) => ({
    title: `Username ${index + 1}`,
    type:
      "Account Type",
    features: [
      "24/7 support",
      "Data Encryption",
      "Integration with major platforms",
      "Flexibility",
      "Custom Plans",
    ],
    techUsed: ["HTML 5", "CSS 3", "JavaScript", "Ruby", "Mixpanel"],
  }));

  return (
    <section id="adminTeam" className="w-full flex flex-col items-start pt-12">
      <div className="h-auto w-full flex flex-col items-center">
        <div className="w-full flex flex-row items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#374151]">
            My Team (XXX)
          </h2>
          <button className="flex items-center gap-1 px-4 py-2 bg-[#FFF5F5] border border-[#E5E7EB] gradientText rounded-lg font-semibold hover:border-primary duration-150">
            <SoAddSquare className="w-5 h-5 text-primary" /> Add New Team
          </button>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-4 gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col p-6 border border-[#E5E7EB] hover:border-primary bg-white rounded-lg shadow space-y-4 cursor-pointer duration-150"
              >
                <div className="flex flex-row items-start justify-between">
                  <div className="flex flex-row items-center gap-3">
                    <div className="bg-[#D9D9D9] rounded-full w-16 h-16" />
                    <div className="flex flex-col items-start">
                      <p className="text-lg font-semibold text-[#374151]">{service.title}</p>
                      <p className="text-sm font-medium text-[#4B5563]">{service.type}</p>
                    </div>
                  </div>
                  <button className="text-black text-2xl">...</button>
                </div>
                <div className="flex flex-row items-center gap-3">
                <div className="">
                  <h4 className="text-base font-medium text-[#6B7280]">
                    Status
                  </h4>
                  <p className="text-sm font-semibold text-[#4B5563]">Active</p>
                </div>
                <div className="">
                  <h4 className="text-base font-medium text-[#6B7280]">
                    Last Login
                  </h4>
                  <p className="text-sm font-semibold text-[#4B5563]">DD/MM - HH:MM</p>
                </div>
                </div>               
                <div className="flex flex-row items-center gap-3">
                <div className="">
                  <h4 className="text-base font-medium text-[#6B7280]">
                    Overtime
                  </h4>
                  <p className="text-sm font-semibold text-[#4B5563]">5 hours</p>
                </div>
                <div className="">
                  <h4 className="text-base font-medium text-[#6B7280]">
                      Shift Commitment
                  </h4>
                  <p className="text-sm font-semibold text-[#4B5563]">90%</p>
                </div>
                </div>               
                <div className="">
                  <h4 className="text-base font-medium text-[#6B7280]">
                    Granted Permissions 
                  </h4>
                  <p className="text-sm font-semibold text-[#4B5563]">7</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminTeamPage;
