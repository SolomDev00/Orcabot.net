import "./Navbar.style.css";
import {
  SoSearch,
  SoApp2,
  SoTrash,
  SoAddSquare,
  SoCity,
  SoSupport,
} from "solom-icon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SoEditSquare2 } from "solom-icon";
import Logo from "../../assets/logo.png";
import Button from "../ui/elements/Button";

const DashboardNavbar = () => {
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

  return (
    <nav className="pt-2 w-full pb-2 bg-[#1f1f25]">
      <div className="flex flex-row items-center justify-between gap-6 ml-[3%] pr-4 max-sm:w-full">
        <div className="flex flex-row items-center justify-between gap-2">
          <img className="w-12" src={Logo} alt="logo" />
          <h3 className="text-xl font-semibold text-gray-400">أوركا بوت</h3>
        </div>
        <div className="relative w-full max-w-96 max-sm:hidden">
          <input
            type="text"
            placeholder="ابحث أو اذهب إلى ..."
            className="pl-4 pr-12 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:border-primary"
            value={query}
            onChange={handleInputChange}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
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
        <Button
          variant={"outline"}
          className="flex flex-row items-center justify-between gap-3 py-1 px-3"
        >
          <h3 className="text-base text-gray-400">الدعم الفني</h3>
          <SoSupport className="text-primary w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
