import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/dashboard-sidebar";
import {
  ArrowLeftRight,
  CircleDollarSign,
  LogOut,
  Receipt,
  UserPlus,
} from "lucide-react";
import DashboardNavbar from "../../components/dashboard-navbar";

const DashboardLayout = () => {
  const links = [
    {
      label: "الرئيسية",
      items: [
        {
          href: "/dashboard/user/wallet",
          icon: CircleDollarSign,
          label: "المحفظة",
        },
        {
          href: "/dashboard/user/membership",
          icon: UserPlus,
          label: "الاشتراكات",
        },
        { href: "/dashboard/user/invoice", icon: Receipt, label: "الفواتير" },
      ],
    },
    {
      label: "آخري",
      items: [
        {
          href: "/dashboard/switch",
          icon: ArrowLeftRight,
          label: "تغيير السيرفر",
        },
        { href: "/dashboard/logout", icon: LogOut, label: "تسجيل الخروج" },
      ],
    },
  ];

  return (
    <div className="root-layout bg-[#1f1f25]">
      <DashboardNavbar />
      <div className="flex flex-row w-full h-full bg-[#292930]">
        <DashboardSidebar links={links} />
        <div className="container mx-0 px-0 w-full max-w-full pr-12 ml-[3%] max-sm:pr-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
