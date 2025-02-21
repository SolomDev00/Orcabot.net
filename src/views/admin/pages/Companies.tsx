import { Tab } from "@headlessui/react";
import { useState } from "react";
import Html from "../../../assets/icons/html.svg";
import Css from "../../../assets/icons/css.svg";
import Js from "../../../assets/icons/js.svg";
import Ruby from "../../../assets/icons/ruby.svg";
import Mixpanel from "../../../assets/icons/mixpanel.svg";
import SwapIcon from "../../../assets/icons/swap.svg";
import Pagination from "../../../components/ui/Pagination";
import { SoAddSquare, SoArrowRight, SoCity, SoLocation } from "solom-icon";
import FireIcon from '../../../assets/icons/fire.svg';

const AdminCompaniesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortAsc, setSortAsc] = useState(true);
  const itemsPerPage = 6;

  const services = Array.from({ length: 33 }, (_, index) => ({
    title: `Company Name ${index + 1}`,
    description:
      "Scalable cloud solutions tailored for fast-growing businesses",
    features: [
      "24/7 support",
      "Data Encryption",
      "Integration with major platforms",
      "Flexibility",
      "Custom Plans",
    ],
        servicesCompany: ['Web Development', 'Cybersecurity', 'Cloud Solutions'],
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
    <section id="adminCompanies" className="w-full flex flex-col items-start">
      <div className="h-auto w-full flex flex-col items-center pt-12">
        <div className="w-full flex flex-row items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#374151]">Companies (XXXX)</h2>
          <button className="flex items-center gap-1 px-4 py-2 bg-[#FFF5F5] border border-[#E5E7EB] gradientText rounded-lg font-semibold hover:border-primary duration-150">
            <SoAddSquare className="w-5 h-5 text-primary" /> Add New Company
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
                  Active Companies
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
                  Holded Companies
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
                    <div key={index} className="flex flex-col p-6 border border-[#E5E7EB] bg-white rounded-lg shadow space-y-4">
                      <div className="flex flex-row items-start justify-between">
                        <div className="flex flex-row items-center gap-3">
                          <div className="bg-[#D9D9D9] rounded-full w-16 h-16" />
                          <div className="flex flex-col items-start">
                            <p className="text-lg font-semibold text-[#374151]">{service.title}</p>
                            <p className="text-sm font-medium gradientText2">https://link.example</p>
                          </div>
                        </div>
                        <button className="text-black text-2xl">...</button>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-primary">
                        <div className='flex items-center gap-2'><img className="w-6 h-6 text-primary" src={FireIcon} alt="Fire" />
                          <div className='flex flex-col items-start font-medium text-[#515B6F]'>Founded <span className="text-[#25324B] font-bold">July 31, 2011</span></div>
                        </div>
                        <div className='flex items-center gap-2'><SoLocation className='w-6 h-6 text-primary' />
                          <div className='flex flex-col items-start font-medium text-[#515B6F]'>Location <span className="text-[#25324B] font-bold">20 countries</span></div>
                        </div>
                        <div className='flex items-center gap-2'><SoCity className='w-6 h-6 text-primary' />
                          <div className='flex flex-col items-start font-medium text-[#515B6F]'>Industry <span className="text-[#25324B] font-bold">Payment Gateway</span></div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#6B7280]">Services</h4>
                        <div className="flex gap-2 mt-2 flex-wrap">
                          {service.servicesCompany.map((feature, i) => (
                            <span key={i} className="text-xs bg-[#FCE9EA] text-[#131517] font-semibold py-1 px-3 rounded-full">{feature}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#6B7280] mb-2">Details</h4>
                        <div className="grid grid-cols-4 gap-3 text-left text-sm text-[#6B7280]">
                          <p>Leads</p>
                          <p>Impress</p>
                          <p>Clicks</p>
                          <p>Views</p>
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="text-[#4B5563] font-semibold text-xs">XXXXX</div>
                          ))}
                        </div>
                        <a href="#view-more" className="text-primary font-bold flex items-center mt-5">
                          View Profile <SoArrowRight className="ml-1 w-4 h-4" />
                        </a>
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
        <div className="flex justify-center mt-5 mb-5">
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

export default AdminCompaniesPage;
