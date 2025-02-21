import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/dashboard-sidebar";
import DashboardNavbar from "../../components/dashboard-navbar";
import {
  SoApp2,
  SoCity,
  SoCog6,
  SoHome,
  SoTechSupport,
  SoUserGroup2,
} from "solom-icon";

const AdminCompanyLayout = () => {
  const links = [
    { href: "/admin/home", icon: <SoHome />, label: "Dashboard" },
    { href: "/admin/products", icon: <SoCity />, label: "Products" },
    { href: "/admin/services", icon: <SoApp2 />, label: "Services" },
    { href: "/admin/team", icon: <SoUserGroup2 />, label: "Team" },
    { href: "/admin/support", icon: <SoTechSupport />, label: "Support" },
    { href: "/admin/settings", icon: <SoCog6 />, label: "Settings" },
  ];

  return (
    <div className="root-layout">
      <div className="flex flex-row w-full h-full">
        <DashboardSidebar links={links} />
        <div className="container mx-0 px-0 w-full max-w-full">
          <DashboardNavbar />
          <div className="container mx-0 px-0 w-full max-w-full pr-12 ml-[3%] max-sm:pr-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCompanyLayout;
