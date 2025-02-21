import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/dashboard-sidebar";
import { CircleDollarSign, Cog, Receipt, UserPlus } from "lucide-react";
import DashboardNavbar from "../../components/dashboard-navbar";
import DashboardServer from "../../components/dashboard-servers";

const DashboardLayout = () => {
  const links = [
    {
      label: "الرئيسية",
      items: [
        { href: "/dashboard/home", icon: CircleDollarSign, label: "المحفظة" },
        { href: "/dashboard/membership", icon: UserPlus, label: "الاشتراكات" },
        { href: "/dashboard/fees", icon: Receipt, label: "الفواتير" },
      ],
    },
    {
      label: "الاعدادات",
      items: [{ href: "/dashboard/settings", icon: Cog, label: "الصلاحيات" }],
    },
  ];

  return (
    <div className="root-layout bg-[#1f1f25]">
      <DashboardNavbar />
      <div className="flex flex-row w-full h-full bg-[#292930]">
        <DashboardServer />
        <DashboardSidebar links={links} />
        <div className="container mx-0 px-0 w-full max-w-full pr-12 ml-[3%] max-sm:pr-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
