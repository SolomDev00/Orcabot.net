import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";
import { SoArrowDown, SoSquareArrowDownLeft } from "solom-icon";
import UserImg from "../../assets/omda.png";
import { ArrowLeftRight, CircleDollarSign } from "lucide-react";

export default function ProfileBtn() {
  const cookie = new Cookies();

  const links = [
    { name: "المحفظة", href: "dashboard/user/wallet", icon: CircleDollarSign },
    {
      name: "تغيير السيرفر",
      href: "dashboard/user/wallet",
      icon: ArrowLeftRight,
    },
  ];

  const handleLogout = () => {
    cookie.remove("userLoggedCIT");
    toast.success("You are Logged out!");
    setTimeout(() => {
      window.location.replace("/");
    }, 1500);
  };

  return (
    <div className="max-w-sm px-2 max-sm:w-full">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`${
                open ? "text-white" : "text-white/90"
              } group inline-flex items-center rounded-md bg-[#3a3a4b] px-3 py-2 text-base font-medium hover:text-white focus:outline-none`}
            >
              <SoArrowDown
                className={`${
                  open ? "text-white rotate-180" : "text-white/70 rotate-0"
                } ml-2 h-5 w-5 transition-transform duration-300`}
                aria-hidden="true"
              />
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-base text-white">Omda</span>
                  <img className="w-8 rounded-full" src={UserImg} alt="User" />
                </div>
              </div>
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
              <Popover.Panel className="absolute left-[100%] z-10 mt-3 w-screen max-w-72 -translate-x-1/2 transform px-3 sm:px-0">
                <div className="bg-gray-50 overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 z-20 py-1">
                  {links.map((link) => (
                    <div className="my-1 px-2">
                      <Link
                        to={`/${link.href}`}
                        className="flow-root rounded-md px-2 py-2 transition hover:bg-blue-100 ease-in-out duration-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                      >
                        <span className="flex items-center gap-3">
                          <link.icon className="text-primary w-5v h-5" />
                          <span className="text-base font-medium text-primary">
                            {link.name}
                          </span>
                        </span>
                      </Link>
                    </div>
                  ))}
                  <div className="my-1 px-2">
                    <div
                      onClick={handleLogout}
                      className="flow-root cursor-pointer rounded-md px-2 py-2 transition hover:bg-[#ebe7e7] ease-in-out duration-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                    >
                      <span className="flex items-center gap-3">
                        <SoSquareArrowDownLeft className="w-5 h-5 text-red-600" />
                        <span className="text-base font-medium text-red-600">
                          تسجيل الخروج
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
