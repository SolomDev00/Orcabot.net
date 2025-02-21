import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/dashboard-sidebar";
import { ChartBarBigIcon, Diamond } from "lucide-react";
import DashboardNavbar from "../../components/dashboard-navbar";

const AdminCompanyLayout = () => {
  const links = [
    {
      label: "الرئيسية",
      items: [
        { href: "/admin/home", icon: ChartBarBigIcon, label: "الاحصائيات" },
        { href: "/admin/membership", icon: Diamond, label: "العضويات" },
      ],
    },
    // {
    //   label: "Settings",
    //   items: [
    //     { href: "/admin/settings", icon: <SoSettings />, label: "Settings" },
    //   ],
    // },
  ];

  return (
    <div className="root-layout bg-[#292930]">
      <DashboardNavbar />
      <div className="flex flex-row w-full h-full">
        <DashboardSidebar links={links} />
        <div className="container mx-0 px-0 w-full max-w-full pr-12 ml-[3%] max-sm:pr-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminCompanyLayout;
