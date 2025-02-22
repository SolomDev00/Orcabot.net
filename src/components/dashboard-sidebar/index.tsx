import "./Sidebar.style.css";
import User from "../../assets/omda.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SoAddNote,
  SoArrowLeft,
  SoArrowUp,
  SoCatalogue,
  SoLink,
  SoSquareArrowDownRight,
} from "solom-icon";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";
import { ArrowLeftRight, LucideIcon } from "lucide-react";
import RightModal from "../ui/elements/RightModal";
import User2 from "../../assets/customer2.svg";
import User3 from "../../assets/customer.svg";

interface SidebarLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

interface DashboardSidebarProps {
  links: {
    label: string;
    items: SidebarLink[];
  }[];
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ links }) => {
  const cookie = new Cookies();
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [openCategories, setOpenCategories] = useState<{
    [key: string]: boolean;
  }>({});
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    const initialOpenState = links.reduce((acc, { label }) => {
      acc[label] = true;
      return acc;
    }, {} as { [key: string]: boolean });
    setOpenCategories(initialOpenState);
  }, [links]);

  const handleLogout = () => {
    cookie.remove("userLoggedCIT");
    toast.success("You are Logged out!");
    setTimeout(() => {
      window.location.replace("/");
    }, 1500);
  };

  const toggleCategoryDropdown = (label: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const servers = Array.from({ length: 15 }, () => (
    <img
      className="w-16 rounded-full hover:scale-110 duration-200 cursor-pointer"
      src={User2}
      alt="server"
    />
  ));

  const activeServers = Array.from({ length: 5 }, () => (
    <img
      className="w-16 rounded-full hover:scale-110 duration-200 cursor-pointer"
      src={User3}
      alt="server"
    />
  ));

  return (
    <nav className={`w-full sidebar shadow-md rounded-tl-xl rounded-bl-xl`}>
      <div className="sidebar-top-wrapper">
        <div className="sidebar-top">
          <Link
            to={links[0].items[0].href}
            className="flex flex-col items-center justify-center mt-10 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
              <img
                src={User}
                alt="Logo"
                className={`rounded-full transition-all duration-300 ${
                  isHovered ? "grayscale brightness-50" : ""
                }`}
              />
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArrowLeftRight
                    className="w-8 h-8 text-white"
                    onClick={() => setIsOpen(true)}
                  />
                </div>
              )}
            </div>
            <h2 className="mt-2">Omda</h2>
          </Link>
        </div>
      </div>
      <div className="sidebar-links-wrapper">
        <div>
          <ul>
            {links.map(({ label, items }, idx) => (
              <li className="w-full" key={idx}>
                <button
                  onClick={() => toggleCategoryDropdown(label)}
                  className={`w-full flex flex-row items-center space-x-2 py-3 px-4 bg-transparent text-gray-300 duration-300 rounded-lg`}
                >
                  <span className="flex items-center gap-2 text-sm">
                    <SoArrowUp
                      className={`transition-transform duration-300 ${
                        openCategories[label] ? "rotate-180" : "rotate-0"
                      }`}
                    />
                    {label}
                  </span>
                </button>
                {openCategories[label] && (
                  <div className="w-full space-y-1 mr-5 pl-8 duration-150 ease-in">
                    {items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.href}
                        className={`w-full block py-2 px-3 rounded-lg text-white text-sm font-medium ${
                          activeLink === item.href
                            ? "bg-primary"
                            : "bg-transparent hover:bg-primary/50"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        className="w-full hidden items-center justify-start space-x-2 py-3 px-4 bg-primary/5 text-primary font-medium rounded-lg hover:bg-primary/10 duration-300"
        onClick={handleLogout}
      >
        <SoSquareArrowDownRight className="w-6 h-6" />
      </button>
      <RightModal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <div className="flex flex-col space-y-8 px-6">
          <div className="flex items-center gap-4 pb-6 border-b border-gray-400">
            <img
              src={User}
              className="w-16 h-16 rounded-full object-cover cursor-pointer hover:opacity-80"
              alt="User Profile"
            />
            <div>
              <h3 className="text-2xl font-bold text-white">Omda</h3>
              <Link
                to="/profile"
                className="text-primary hover:text-primary/80 text-sm flex items-center gap-1"
              >
                الذهاب إلي لوحة التحكم <SoArrowLeft />
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <SoCatalogue /> السيرفرات المُدارة ({servers.length})
              </h3>
              <span className="text-gray-400 text-sm">البوت مضاف حاليًا</span>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {servers.map((_, index) => (
                <div key={index} className="group relative">
                  <img
                    className="w-full rounded-xl hover:scale-105 duration-200 cursor-pointer"
                    src={User2}
                    alt="server"
                  />
                  <div className="hidden absolute bottom-0 left-0 right-0 p-2 bg-black/60 rounded-b-xl">
                    <p className="text-white text-xs truncate">
                      السيرفر {index + 1}
                    </p>
                    <button className="text-[10px] text-primary hover:underline">
                      إدارة الإعدادات
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <SoAddNote /> سيرفرات متاحة ({activeServers.length})
              </h3>
              <span className="text-gray-400 text-sm">أضف البوت إليهم</span>
            </div>
            <div className="grid grid-cols-6 gap-4">
              {activeServers.map((_, index) => (
                <div key={index} className="group relative">
                  <img
                    className="w-full rounded-xl hover:scale-105 duration-200 cursor-pointer"
                    src={User3}
                    alt="server"
                  />
                  <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 rounded-full text-xl text-white">
                      <SoLink />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RightModal>
    </nav>
  );
};

export default DashboardSidebar;
