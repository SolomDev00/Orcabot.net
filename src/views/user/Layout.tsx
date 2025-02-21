import { Outlet } from "react-router-dom";
import Sidebar from "../../components/ui/SideBar";
import Navbar from "../../components/website-navbar";
import Footer from "../../components/website-footer";

const DashboardUserLayout = () => {
  return (
    <div className="root-layout bg-[#E8F0F714] flex flex-col">
      <Navbar />
      <div className="flex flex-grow w-full flex-row items-start mt-40 container">
        <Sidebar />
        <div className="mb-10 mx-0 px-0 w-full max-w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardUserLayout;
