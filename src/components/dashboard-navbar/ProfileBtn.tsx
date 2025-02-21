import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { tokenSelector } from "../../app/functions/token";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";
import {
  SoArrowDown,
  SoCheckBadge,
  SoCity,
  SoSquareArrowDownLeft,
  SoUser,
} from "solom-icon";

export default function ProfileBtn() {
  const cookie = new Cookies();
  const { user } = useSelector(tokenSelector);

  const getUserIcon = () => {
    if (user?.user_type === "admin")
      return <SoCheckBadge className="w-5 h-5 text-primary" />;
    if (user?.business_id !== null)
      return <SoCity className="w-5 h-5 text-primary" />;
    return <SoUser className="w-5 h-5 text-primary" />;
  };

  const profileText =
    user?.user_type === "admin"
      ? "Admin Settings"
      : user?.business_id !== null
      ? "Company Profile"
      : "User Profile";

  const handleLogout = () => {
    cookie.remove("userLoggedCIT");
    toast.success("You are Logged out!");
    setTimeout(() => {
      window.location.replace("/");
    }, 1500);
  };

  return (
    <div className="max-w-sm px-4 max-sm:w-full">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`${
                open ? "text-white" : "text-white/90"
              } group inline-flex items-center rounded-md bg-white px-1 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-3">
                  <div className="bg-red-200 rounded-full p-1">
                    {getUserIcon()}
                  </div>
                  <span className="text-base text-primary">{user?.name}</span>
                </div>
              </div>
              <SoArrowDown
                className={`${
                  open ? "text-primary" : "text-primary/70"
                } ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-accent/80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-3 sm:px-0 lg:max-w-xs">
                <div className="bg-gray-50 overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 z-20">
                  <div className="my-2 px-2">
                    <Link
                      to={
                        user?.user_type === "admin"
                          ? "/admin/settings"
                          : user?.business_id !== null
                          ? "/company/settings"
                          : "/user/profile"
                      }
                      className="flow-root rounded-md px-2 py-2 transition hover:bg-[#ebe7e7] ease-in-out duration-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                    >
                      <span className="flex items-center gap-3">
                        {getUserIcon()}
                        <span className="text-base font-medium text-primary">
                          {profileText}
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="my-2 px-2">
                    <div
                      onClick={handleLogout}
                      className="flow-root cursor-pointer rounded-md px-2 py-2 transition hover:bg-[#ebe7e7] ease-in-out duration-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                    >
                      <span className="flex items-center gap-3">
                        <SoSquareArrowDownLeft className="w-5 h-5 text-primary" />
                        <span className="text-base font-medium text-primary">
                          Logout
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
