import "./Navbar.style.css";
import {
  SoBell,
  SoBubbleChat,
  SoSquareArrowDownRight,
  SoSearch,
  SoApp2,
  SoTrash,
  SoAddSquare,
  SoCity,
} from "solom-icon";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";
import UserImg from "../../assets/customer2.svg";
import { useSelector } from "react-redux";
import { tokenSelector } from "../../app/functions/token";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SoEditSquare2 } from "solom-icon";

const DashboardNavbar = () => {
  const cookie = new Cookies();
  const { user } = useSelector(tokenSelector);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();

  const keywords = [
    {
      word: "Services",
      route: "/company/services",
      icon: <SoApp2 className="text-primary w-8 h-8" />,
      description: "Manage your services here.",
    },
    {
      word: "Add Services",
      route: "/company/services",
      icon: <SoAddSquare className="text-primary w-8 h-8" />,
      description: "Add a new service to the system.",
    },
    {
      word: "Edit Services",
      route: "/company/services",
      icon: <SoEditSquare2 className="text-primary w-8 h-8" />,
      description: "Edit an existing service.",
    },
    {
      word: "Delete Services",
      route: "/company/services",
      icon: <SoTrash className="text-primary w-8 h-8" />,
      description: "Delete a service permanently.",
    },
    {
      word: "Company Profile",
      route: "/company/settings",
      icon: <SoCity className="text-primary w-8 h-8" />,
      description: "Edit a company details.",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filtered = keywords
        .filter((k) => k.word.toLowerCase().includes(value.toLowerCase()))
        .map((k) => k.word);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (word: string) => {
    const keyword = keywords.find((k) => k.word === word);
    if (keyword) {
      navigate(keyword.route);
    }
    setQuery("");
    setSuggestions([]);
  };

  const handleLogout = () => {
    cookie.remove("userLoggedCIT");
    toast.success("Your are Loggedout!");
    setTimeout(() => {
      window.location.replace("/");
    }, 3500);
  };

  return (
    <nav className="mt-10 w-full pb-10 border-b border-[#919191] max-sm:pb-9">
      <div className="flex flex-row items-center justify-between gap-6 ml-[3%] pr-4 max-sm:w-full">
        <div className="w-2/5 flex flex-row items-center justify-between space-x-5 max-sm:flex-col max-sm:space-x-0 max-sm:gap-2 max-sm:w-full">
          <div className="flex flex-row items-center justify-center space-x-3 max-sm:w-full max-sm:justify-start">
            <img
              className="max-sm:w-20"
              src={user?.profile_picture ? user?.profile_picture : UserImg}
              alt="User"
            />
            <div className="flex flex-col items-start">
              <h4 className="text-base text-[#6B7280] max-sm:text-base">
                Welcome Back,
              </h4>
              <h4 className="text-base text-black/85 font-bold max-sm:text-base">
                {user?.name}
              </h4>
            </div>
          </div>
        </div>
        <div className="relative w-full max-sm:hidden">
          <input
            type="text"
            placeholder="Search or jump to..."
            className="pl-12 pr-4 py-3 w-full rounded-full border border-gray-300 focus:outline-none focus:border-primary"
            value={query}
            onChange={handleInputChange}
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary">
            <SoSearch className="w-7 h-7" />
          </div>
          {suggestions.length > 0 ? (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md mt-2 z-10">
              {suggestions.map((suggestion, index) => {
                const keyword = keywords.find((k) => k.word === suggestion);
                return (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-700"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <div className="flex flex-row items-center justify-start gap-3">
                      {keyword?.icon}
                      <div className="flex flex-col items-start">
                        <span className="font-medium">{suggestion}</span>
                        <p className="text-sm text-gray-500">
                          {keyword?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            query && (
              <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md mt-2 z-10">
                <div className="flex flex-row items-center justify-start gap-3 px-4 py-2 cursor-not-allowed">
                  <SoSearch className="text-gray-500 w-8 h-8" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium text-gray-700">
                      No matching results
                    </span>
                    <p className="text-sm text-gray-500">
                      Please check your spelling or try different keywords.
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex flex-row items-center justify-center max-sm:w-1/3">
          <div className="flex flex-row items-center justify-between space-x-5 max-sm:space-x-0">
            <div
              className="bg-primary/5 rounded-full p-2 cursor-pointer max-sm:hidden hidden"
              title="Notifications"
            >
              <SoBell className="text-primary w-7 h-7" />
            </div>
            <div
              className="bg-primary/5 rounded-full p-2 cursor-pointer max-sm:hidden hidden"
              title="Support"
            >
              <SoBubbleChat className="text-primary w-7 h-7" />
            </div>
            <div
              className="bg-primary/5 rounded-full p-2 cursor-pointer"
              title="Logout"
              onClick={handleLogout}
            >
              <SoSquareArrowDownRight className="text-primary w-7 h-7 max-sm:w-6 max-sm:h-6" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
