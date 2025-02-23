import "./Navbar.style.css";
import Cookies from "universal-cookie";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { useEffect, useState } from "react";
import ProfileBtn from "../dashboard-navbar/ProfileBtn";
import {
  SoArrowDown,
  SoSearch,
  SoShoppingCart,
  SoXmarkCircle,
} from "solom-icon";
import { animateScroll as scroll, scroller } from "react-scroll";
// import UserImg from "../../assets/user.svg";
import { useSelector } from "react-redux";
import { tokenSelector } from "../../app/functions/token";
import { X } from "lucide-react";

const Navbar = () => {
  const { user } = useSelector(tokenSelector);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${query}`);
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    if (firstLoad) {
      setFirstLoad(false);
      setScrolling(true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [firstLoad]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      document.body.classList.add("menu-open");
      document.body.classList.remove("menu-closed");
    } else {
      document.body.classList.add("menu-closed");
      document.body.classList.remove("menu-open");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (showMenu && target && !target.closest(".mobile-menu")) {
        setShowMenu(false);
        document.body.classList.remove("menu-open");
        document.body.classList.add("menu-closed");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  useEffect(() => {
    setShowMenu(false);
    document.body.classList.remove("collapsed");
  }, []);

  const cookie = new Cookies();
  const token = cookie.get("userLoggedCIT");
  const isLoggedIn = token ? false : true;

  const handleNavigation = (section: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { targetSection: section } });
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }

    setShowMenu(false);
    document.body.classList.remove("menu-open");
  };

  return (
    <header
      className={`header ${
        scrolling ? "bg-[#12131a]" : "bg-primary"
      } duration-200 ${scrolling ? "bg-[#12131a]" : "bg-primary"} ${
        showMenu ? "menu-open" : ""
      }`}
      style={{
        display: `${scrolling === true ? "" : "none"}`,
        background: `${window.scrollY < 10 ? "#12131a" : ""}`,
        animation: `${window.scrollY > 50 ? "fadeUpNav 0.4s ease-out" : ""}`,
        position: "fixed",
        top: 0,
        width: "100%",
        height: "100px",
        zIndex: "3000",
      }}
    >
      <div
        className={`navbar-wrapper duration-200 ${
          scrolling ? "bg-[#12131a]" : "text-primary"
        }`}
        style={{
          background: `${window.scrollY < 10 ? "transparent" : ""}`,
          animation: `${window.scrollY > 50 ? "fadeUpNav 0.4s ease-out" : ""}`,
        }}
      >
        <div className="navbar-items">
          <NavLink
            onClick={() => scroll.scrollToTop()}
            to="/"
            title={"Orcabot"}
            aria-label="home"
            className="logo"
          >
            <img className={`ml-0`} src={LogoImg} alt="logo" />
          </NavLink>
          <nav>
            <ul className="navigationBar hide">
              <li>
                <NavLink
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "active duration-200" : "nav-link duration-200"
                  }
                  to="/"
                  title="الرئيسية"
                >
                  الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "active duration-200" : "nav-link duration-200"
                  }
                  to="/about-us"
                  title="من نحن ؟"
                >
                  من نحن ؟
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "active duration-200" : "nav-link duration-200"
                  }
                  to="/menu"
                  title="الباقات"
                >
                  الباقات
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? "active duration-200" : "nav-link duration-200"
                  }
                  to="/contact-us"
                  title="تواصل معنا"
                >
                  تواصل معنا
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row items-center gap-5">
          <div className="relative">
            <div
              className={
                location.pathname.includes("/search")
                  ? "bg-[#FCE9E9] p-1.5 rounded-full cursor-pointer"
                  : "bg-transparent p-1.5 rounded-full cursor-pointer"
              }
              onClick={() => setIsSearchOpen(true)}
            >
              <SoSearch
                className={
                  location.pathname.includes("/search")
                    ? "text-primary w-6 h-6"
                    : "text-gray-600 w-6 h-6"
                }
              />
            </div>
            {isSearchOpen && (
              <div className="absolute top-8 -right-64 w-[300px] bg-white shadow-lg p-2 flex items-center border rounded-md">
                <input
                  type="text"
                  placeholder="ابحث عن الباقات..."
                  className="w-full p-2 outline-none"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <X
                  className="ml-2 text-primary cursor-pointer"
                  onClick={() => setIsSearchOpen(false)}
                />
              </div>
            )}
          </div>
          <NavLink
            to={"/cart/empty"}
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "bg-[#FCE9E9] p-1.5 rounded-full cursor-pointer"
                : "bg-transparent p-1.5 rounded-full cursor-pointer"
            }
          >
            <SoShoppingCart className="w-6 h-6 text-primary" />
          </NavLink>
        </div>
        {isLoggedIn ? (
          <div className="action-buttons hide max-sm:hidden">
            <Link
              to="/auth/login"
              title="تسجيل الدخول"
              className={`gradientBg px-8 py-3 text-white font-medium rounded-3xl text-base`}
            >
              تسجيل الدخول
            </Link>
          </div>
        ) : (
          <div className="w-full flex flex-row justify-end gap-3 max-sm:hidden">
            <ProfileBtn />
          </div>
        )}
        <button
          aria-label="Toggle menu"
          className="burger-menu z-20 duration-150"
          type="button"
          onClick={toggleMenu}
        >
          {showMenu ? (
            <SoXmarkCircle className="text-white w-6 h-6" />
          ) : (
            <SoArrowDown className="text-white w-6 h-6" />
          )}
        </button>
        {showMenu && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu">
              <nav className="flex flex-col items-start justify-center">
                <NavLink
                  onClick={() => scroll.scrollToTop()}
                  to="/"
                  title={"CIT"}
                  aria-label="home"
                  className="mb-10 px-4"
                >
                  <img className="h-28" src={LogoImg} alt="logo" />
                </NavLink>
                <div className="hidden flex-row items-center justify-center space-x-3 max-sm:space-x-1 max-sm:w-full max-sm:justify-start mb-5">
                  {/* <img
                    src={user?.profile_picture ? user?.profile_picture : UserImg}
                    alt="User"
                  /> */}
                  <div className="flex flex-col items-start">
                    <h4 className="text-base text-[#6B7280]">Welcome Back,</h4>
                    <h4 className="text-base text-black/85 font-bold">
                      {user?.name}
                    </h4>
                  </div>
                </div>
                <ul className="flex flex-col items-start justify-center gap-2 text-left">
                  <li>
                    <NavLink
                      className={"text-primary text-lg font-semibold px-4"}
                      onClick={() => {
                        setShowMenu(false);
                        document.body.classList.remove("menu-open");
                      }}
                      to="/"
                      title="Home"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-primary text-lg font-semibold px-4"
                      to="featuredSection"
                      onClick={() => handleNavigation("aboutSection")}
                    >
                      Features
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-primary text-lg font-semibold px-4"
                      to="trendingSection"
                      onClick={() => handleNavigation("aboutSection")}
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={"text-primary text-lg font-semibold px-4"}
                      to="/about-us"
                      title="About Us"
                      onClick={() => {
                        setShowMenu(false);
                        document.body.classList.remove("menu-open");
                      }}
                    >
                      About Us
                    </NavLink>
                  </li>
                  {isLoggedIn ? (
                    <div className="action-buttons mt-10">
                      <Link
                        to="/auth/login"
                        title={"Login"}
                        className={`secondaryBar text-white font-medium rounded-lg text-base`}
                      >
                        Log In
                      </Link>
                      <Link
                        to="/auth/register"
                        title={"Register"}
                        className={`primaryBar text-white font-medium rounded-lg text-base`}
                      >
                        Start for Free
                      </Link>
                    </div>
                  ) : (
                    <div className="flex flex-row">
                      <ProfileBtn />
                    </div>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
