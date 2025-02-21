import "./Sidebar.style.css";
import Logo from "../../assets/logo_sidebar.svg";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CollapsedLogo from "../../assets/logo_icon.svg";
import {
  SoArrowRight,
  SoSquareArrowDownRight,
} from "solom-icon";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";

interface SidebarLink {
  href: string;
  icon: JSX.Element;
  label: string;
}

interface DashboardSidebarProps {
  links: SidebarLink[]; 
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ links }) => {
  const cookie = new Cookies();
  const [collapsed, setCollapsed] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);


  const handleExpandClick = () => {
    setCollapsed(!collapsed);
    document.body.classList.toggle("collapsed", !collapsed);
  };

  const handleLogout = () => {
    cookie.remove("userLoggedCIT");
    toast.success("You are Logged out!");
    setTimeout(() => {
      window.location.replace("/");
    }, 1500);
  };

  return (
      <nav
        className={`w-full sidebar ${collapsed ? "collapsed" : ""
          } shadow-md rounded-tr-md rounded-br-lg`}
      >
        <div className="sidebar-top-wrapper">
          <div className="sidebar-top">
            <Link
              to={links[0].href}
              className="flex items-center justify-center mt-10"
            >
              <img
                src={collapsed ? CollapsedLogo : Logo}
                alt="Logo"
                className={`w-${collapsed ? "16" : "40"} h-${collapsed ? "16" : "40"
                  }`}
              />
            </Link>
          </div>
          <button
            className="expand-btn"
            type="button"
            onClick={handleExpandClick}
          >
            <SoArrowRight className="text-white w-6 h-6" />
          </button>
        </div>
        <div className="sidebar-links-wrapper">
          <div className="sidebar-links">
            {links.map(({ href, icon, label }, index) => (
              <ul key={index}>
                <li className="mb-2">
                  <Link
                    to={href}
                    title={label}
                    className={`tooltip ${activeLink === href ? "active" : "" }`}>
                    <div className="flex flex-row items-center space-x-2 SoIcon">
                      {icon}
                      <span className="link duration-300 hide">{label}</span>
                    </div>
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="sidebar-logout p-4 mt-auto">
          <button
            className="w-full flex items-center justify-start space-x-2 py-3 px-4 bg-primary/5 text-primary font-medium rounded-lg hover:bg-primary/10 duration-300"
          onClick={handleLogout}
          >
            <SoSquareArrowDownRight className="w-6 h-6" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </nav>
  );
};

export default DashboardSidebar;
