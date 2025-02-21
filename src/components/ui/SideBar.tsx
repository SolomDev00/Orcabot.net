import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import { SoDelivery } from "solom-icon";
import { Bookmark, LogOut, User2 } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) =>
    location.pathname.startsWith(path)
      ? "gradientBg text-white"
      : "bg-transparent text-primary";
  const cookie = new Cookies();

  const handleLogout = () => {
    cookie.remove("userLoggedCIT");
    toast.success("Your are Loggedout!");
    setTimeout(() => {
      window.location.replace("/");
    }, 1500);
  };

  return (
    <div className="userSidebar w-1/4 h-[70vh] flex flex-col">
      <h3 className="text-base text-black font-semibold mb-4">حسابي</h3>
      <ul className="space-y-3 flex-grow">
        <li>
          <Link
            to="/user/profile"
            className={`flex items-center gap-2 text-lg p-3 px-4 rounded-full text-left font-medium ${isActive(
              "/user/profile"
            )}`}
          >
            <User2 className="w-5 h-5" /> الملف الشخصي
          </Link>
        </li>
        <li>
          <Link
            to="/user/orders"
            className={`flex items-center gap-2 text-lg p-3 px-4 rounded-full text-left font-medium ${isActive(
              "/user/orders"
            )}`}
          >
            <SoDelivery className="w-5 h-5" /> الطلبات
          </Link>
        </li>
        <li>
          <Link
            to="/user/saved"
            className={`flex items-center gap-2 text-lg p-3 px-4 rounded-full text-left font-medium ${isActive(
              "/user/saved"
            )}`}
          >
            <Bookmark className="w-5 h-5" /> المحفوظات
          </Link>
        </li>
      </ul>
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-lg p-3 rounded-xl text-left font-semibold text-primary mt-auto"
      >
        <LogOut className="w-5 h-5" /> تسجيل الخروج
      </button>
    </div>
  );
};

export default Sidebar;
