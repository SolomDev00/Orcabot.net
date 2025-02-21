import "./Sidebar.style.css";
import Logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SoArrowUp, SoSquareArrowDownRight } from "solom-icon";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";
import { LucideIcon } from "lucide-react";

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
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLogout = () => {
    cookie.remove("userLoggedCIT");
    toast.success("You are Logged out!");
    setTimeout(() => {
      window.location.replace("/");
    }, 1500);
  };

  const toggleCategoryDropdown = () => {
    setCategoryOpen(!isCategoryOpen);
  };

  return (
    <nav className={`w-full sidebar shadow-md rounded-tr-md rounded-br-lg`}>
      <div className="sidebar-top-wrapper">
        <div className="sidebar-top">
          <Link
            to={links[0].items[0].href}
            className="flex items-center justify-center mt-10"
          >
            <img src={Logo} alt="Logo" className={`w-20`} />
          </Link>
        </div>{" "}
      </div>
      <div className="sidebar-links-wrapper">
        <div>
          <ul>
            {links.map(({ label, items }, idx) => (
              <li className="w-full mb-2" key={idx}>
                <button
                  onClick={toggleCategoryDropdown}
                  className={`w-full flex flex-row items-center space-x-2 py-3 px-4 bg-transparent text-gray-300 duration-300`}
                >
                  <span className="flex items-center gap-2 text-sm">
                    <SoArrowUp
                      className={isCategoryOpen ? "rotate-180" : "rotate-0"}
                    />
                    {label}
                  </span>
                </button>
                {isCategoryOpen && (
                  <div className="w-full space-y-2 mr-5 pl-5 duration-150 ease-in">
                    {items.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.href}
                        className={`w-full block py-2 px-3 rounded-lg text-white text-sm font-medium ${
                          activeLink === item.href
                            ? "bg-primary"
                            : "bg-transparent"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}{" "}
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
    </nav>
  );
};

export default DashboardSidebar;
