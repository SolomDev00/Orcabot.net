import { Tab } from "@headlessui/react";
import { useState } from "react";
import Html from "../../../assets/icons/html.svg";
import Css from "../../../assets/icons/css.svg";
import Js from "../../../assets/icons/js.svg";
import Ruby from "../../../assets/icons/ruby.svg";
import Mixpanel from "../../../assets/icons/mixpanel.svg";
import SwapIcon from "../../../assets/icons/swap.svg";
import Pagination from "../../../components/ui/Pagination";
import { SoAddSquare, SoArrowRight } from "solom-icon";

const AdminServicesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(true);
  const itemsPerPage = 6;

  const services = Array.from({ length: 33 }, (_, index) => ({
    title: `Service Title ${index + 1}`,
    description:
      "Scalable cloud solutions tailored for fast-growing businesses",
    features: [
      "24/7 support",
      "Data Encryption",
      "Integration with major platforms",
      "Flexibility",
      "Custom Plans",
    ],
    techUsed: ["HTML 5", "CSS 3", "JavaScript", "Ruby", "Mixpanel"],
  }));

  const totalPages = Math.ceil(services.length / itemsPerPage);
  const paginatedServices = services.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const sortedServices = sortAsc
    ? paginatedServices
    : [...paginatedServices].reverse();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="adminServices" className="w-full flex flex-col items-start">
      <h2 className="w-full flex items-center gap-3 text-lg font-semibold text-[#374151] mb-6 pt-12">
          <span className="text-[#6B7280]">Companies</span>
          <SoArrowRight className="w-4 h-4" />
          <span className="text-[#374151]">“Company Name” Services</span>
        </h2>
      <div className="h-auto w-full flex flex-col items-center">
        <div className="w-full flex flex-row items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#374151]">“Company Name” Services (XXX)</h2>
          <button className="flex items-center gap-1 px-4 py-2 bg-[#FFF5F5] border border-[#E5E7EB] gradientText rounded-lg font-semibold hover:border-primary duration-150">
            <SoAddSquare className="w-5 h-5 text-primary" /> Add New Service
          </button>
        </div>
        <div className="w-full">
          <Tab.Group>
            <div className="flex justify-between items-center mb-8">
              <Tab.List className="flex gap-3">
                <Tab
                  className={({ selected }) =>
                    `rounded-lg py-3 px-6 text-base font-semibold ${
                      selected
                        ? "text-white gradientBg"
                        : "text-[#4B5563] bg-white/10"
                    }`
                  }
                >
                  Active Services
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `rounded-lg py-3 px-6 text-base font-semibold ${
                      selected
                        ? "text-white gradientBg"
                        : "text-[#4B5563] bg-white/10"
                    }`
                  }
                >
                  Holded Services
                </Tab>
              </Tab.List>
              <button
                onClick={() => setSortAsc(!sortAsc)}
                className="flex items-center gap-1 px-4 py-2 border border-[#E5E7EB] gradientText rounded-lg font-semibold hover:border-primary duration-150"
              >
                <img src={SwapIcon} alt="SwapIcon" />
                Sort
              </button>
            </div>
            <Tab.Panels className="mt-3">
              <Tab.Panel className="rounded-xl bg-white/5">
                <div className="grid grid-cols-3 gap-6">
                  {sortedServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex flex-col p-6 border border-[#E5E7EB] bg-white rounded-lg shadow space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg text-[#374151] font-semibold">
                          {service.title}
                        </h3>
                        <button className="text-black text-2xl">...</button>
                      </div>
                      <p className="text-sm text-black">
                        {service.description}
                      </p>
                      <div className="">
                        <h4 className="text-sm font-semibold text-[#6B7280]">
                          Key Features
                        </h4>
                        <div className="flex gap-2 mt-2 flex-wrap">
                          {service.features.map((feature, i) => (
                            <span
                              key={i}
                              className="text-xs bg-[#FCE9EA] text-[#131517] font-semibold py-1 px-3 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#6B7280]">
                          Used Tech
                        </h4>
                        <div className="flex space-x-4 mt-2">
                          <div className="flex flex-col items-center">
                            <img
                              src={Html}
                              alt="HTML 5"
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                          <div className="flex flex-col items-center">
                            <img
                              src={Css}
                              alt="CSS 3"
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                          <div className="flex flex-col items-center">
                            <img
                              src={Js}
                              alt="JavaScript"
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                          <div className="flex flex-col items-center">
                            <img
                              src={Ruby}
                              alt="Ruby"
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                          <div className="flex flex-col items-center">
                            <img
                              src={Mixpanel}
                              alt="Mixpanel"
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#6B7280] mb-2">
                          Details
                        </h4>
                        <div className="grid grid-cols-4 gap-3 text-left text-sm text-[#6B7280]">
                          <p>Leads</p>
                          <p>Impress</p>
                          <p>Clicks</p>
                          <p>Views</p>
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="text-[#4B5563] font-semibold text-xs"
                            >
                              XXXXX
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel className="rounded-xl bg-white/5">
                <div className="grid grid-cols-3 gap-6">
                  {paginatedServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex flex-col p-6 border border-[#E5E7EB] bg-white rounded-lg shadow space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg text-[#374151] font-semibold">
                          {service.title}
                        </h3>
                        <button className="text-black text-2xl">...</button>
                      </div>
                      <p className="text-sm text-black">
                        {service.description}
                      </p>
                      <div className="">
                        <h4 className="text-sm font-semibold text-[#6B7280]">
                          Key Features
                        </h4>
                        <div className="flex gap-2 mt-2 flex-wrap">
                          {service.features.map((feature, i) => (
                            <span
                              key={i}
                              className="text-xs bg-[#FCE9EA] text-[#131517] font-semibold py-1 px-3 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#6B7280]">
                          Used Tech
                        </h4>
                        <div className="flex space-x-4 mt-2">
                          <div className="flex flex-col items-center">
                            <img
                              src={Html}
                              alt="HTML 5"
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                          <div className="flex flex-col items-center">
                            <img
                              src={Css}
                              alt="CSS 3"
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                          <div className="flex flex-col items-center">
                            <img
                              src={Js}
                              alt="JavaScript"
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                          <div className="flex flex-col items-center">
                            <img
                              src={Ruby}
                              alt="Ruby"
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                          <div className="flex flex-col items-center">
                            <img
                              src={Mixpanel}
                              alt="Mixpanel"
                              className="w-16 h-16 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#6B7280] mb-2">
                          Details
                        </h4>
                        <div className="grid grid-cols-4 gap-3 text-left text-sm text-[#6B7280]">
                          <p>Leads</p>
                          <p>Impress</p>
                          <p>Clicks</p>
                          <p>Views</p>
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="text-[#4B5563] font-semibold text-xs"
                            >
                              XXXXX
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="flex justify-center mt-5 mb-10">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default AdminServicesPage;
