import { useState } from 'react';
import Pagination from '../../components/ui/Pagination';
import Html from '../../assets/icons/html.svg';
import Css from '../../assets/icons/css.svg';
import Js from '../../assets/icons/js.svg';
import Ruby from '../../assets/icons/ruby.svg';
import Mixpanel from '../../assets/icons/mixpanel.svg';
import VerfiyIcon from '../../assets/icons/verify.svg';
import StarIcon from '../../assets/icons/star.svg';
import UsersIcon from '../../assets/icons/users.svg';
import FireIcon from '../../assets/icons/fire.svg';
import { SoArrowRight, SoArrowTrendingUp, SoCity, SoLocation } from 'solom-icon';
import WaveChart from '../../components/dashboard-charts/WaveChart';
import LineChart from '../../components/dashboard-charts/LineChart';

const AdminDashboardPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [topcurrentPage, setTopCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const services = Array.from({ length: 33 }, (_, index) => ({
    title: `Company Name ${index + 1}`,
    description: 'Scalable cloud solutions tailored for fast-growing businesses',
    features: ['24/7 support', 'Data Encryption', 'Integration with major platforms', 'Flexibility', 'Custom Plans'],
    servicesCompany: ['Web Development', 'Cybersecurity', 'Cloud Solutions'],
    techUsed: ['HTML 5', 'CSS 3', 'JavaScript', 'Ruby', 'Mixpanel'],
  }));

  const totalPages = Math.ceil(services.length / itemsPerPage);
  const paginatedServices = services.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalTopPages = Math.ceil(services.length / itemsPerPage);
  const paginatedServicesTop = services.slice((topcurrentPage - 1) * itemsPerPage, topcurrentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleTopPageChange = (page: number) => {
    setTopCurrentPage(page);
  };

  const mockData = [
    { name: 'January', success: 45, failed: 25 },
    { name: 'February', success: 50, failed: 15 },
    { name: 'March', success: 60, failed: 20 },
    { name: 'April', success: 55, failed: 20 },
    { name: 'May', success: 70, failed: 20 },
    { name: 'June', success: 65, failed: 20 },
    { name: 'July', success: 80, failed: 10 },
    { name: 'August', success: 75, failed: 5 },
    { name: 'September', success: 85, failed: 5 },
    { name: 'October', success: 90, failed: 5 },
    { name: 'November', success: 95, failed: 2 },
    { name: 'December', success: 100, failed: 0 },
  ];

  const mockDataLine = [
    { name: 'January', value: 100 },
    { name: 'February', value: 200 },
    { name: 'March', value: 300 },
    { name: 'April', value: 150 },
    { name: 'May', value: 400 },
    { name: 'June', value: 250 },
    { name: 'July', value: 350 },
    { name: 'August', value: 450 },
    { name: 'September', value: 500 },
    { name: 'October', value: 600 },
    { name: 'November', value: 700 },
    { name: 'December', value: 800 },
];

  return (
    <div className="w-full my-10 space-y-5">
      <div className="grid grid-cols-4 gap-3">
        {['Profile Views', 'Leads', 'Impressions', 'Clicks'].map((item, index) => (
          <div key={index} className="flex flex-col gap-3 items-left p-4 pr-2 bg-white rounded-lg shadow">
            <h3 className="text-lg font-bold text-[#262626]">{item}</h3>
            <div className="flex items-center space-x-2">
              {index === 0 && (
                <img
                  src={UsersIcon}
                  alt="Verify"
                  className="w-6 h-6"
                />
              )}
              {index === 1 && (
                <img
                  src={VerfiyIcon}
                  alt="Leads"
                  className="w-6 h-6"
                />
              )}
              {index === 2 && (
                <img
                  src={VerfiyIcon}
                  alt="Impressions"
                  className="w-6 h-6"
                />
              )}
              {index === 3 && (
                <img
                  src={StarIcon}
                  alt="Clicks"
                  className="w-6 h-6"
                />
              )}
              <div className='w-full flex items-center justify-between'>
              <h3 className="text-2xl font-bold text-primary">143,624</h3>
              <div className='flex items-center gap-1'>
              <span className="text-sm font-semibold text-green-500">+11.01%</span>
                <SoArrowTrendingUp className='w-4 h-4 text-green-500'/>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-5 border border-[#E5E7EB] rounded-xl mb-10">
        <h2 className="text-xl font-semibold text-[#262626] mb-4">Top Companies</h2>
        <div className="grid grid-cols-3 gap-6">
          {paginatedServicesTop.map((service, index) => (
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
      <div className="flex justify-center mt-5 mb-3">
          <Pagination currentPage={topcurrentPage} totalPages={totalTopPages} onPageChange={handleTopPageChange} />
      </div>
      </div>
      <div className="p-5 border border-[#E5E7EB] rounded-xl">
        <h2 className="text-xl font-semibold text-[#262626] mb-4">Top Services</h2>
        <div className="grid grid-cols-3 gap-6">
          {paginatedServices.map((service, index) => (
            <div key={index} className="flex flex-col p-6 border border-[#E5E7EB] bg-white rounded-lg shadow space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-[#374151] font-semibold">{service.title}</h3>
                <button className="text-black text-2xl">...</button>
              </div>
              <p className="text-sm text-black">{service.description}</p>
              <div className="">
                <h4 className="text-sm font-semibold text-[#6B7280]">Key Features</h4>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {service.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-[#FCE9EA] text-[#131517] font-semibold py-1 px-3 rounded-full">{feature}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#6B7280]">Used Tech</h4>
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
            </div>
        </div>
          ))}
        </div>
      <div className="flex justify-center mt-5 mb-3">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
      </div>
      <div className='w-full p-5 pb-8 border border-[#E5E7EB] rounded-xl'>
        <div className='w-full flex flex-col items-start justify-center max-sm:w-full'>
          <h3 className='text-xl text-black font-medium mb-5 mt-2'>Traffic</h3>
          <WaveChart data={mockData} />
        </div>
      </div>
      <div className='w-full p-5 pb-8 border border-[#E5E7EB] rounded-xl'>
        <div className='w-full flex flex-col items-start justify-center max-sm:w-full'>
          <h3 className='text-xl text-black font-medium mb-5 mt-2'>Traffics</h3>
          <LineChart data={mockDataLine} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
