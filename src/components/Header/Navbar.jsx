import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsTranslate } from "react-icons/bs";
import ImageAssets from "@/utils/ImageAssets";
import useDirection from "@/hooks/useDirection";
import useCustomNavigate from "@/hooks/useCustomNavigate";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isRtl, toggleLanguage } = useDirection();
  const { navigateToSection } = useCustomNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`text-white`}>
      <div
        className={`flex flex-wrap items-center justify-between px-6 md:px-20 py-8 2xl:px-40 `}
      >
        <button
          onClick={() => handleNavClick("home")}
          className="font-bold text-3xl flex items-center cursor-pointer"
        >
          {!isRtl ? (
            <img
              src={ImageAssets.logoEn}
              className="h-10 md:h-15 md:w-30"
              alt="Logo"
              loading="lazy"
            />
          ) : (
            <img
              src={ImageAssets.logo}
              className="h-10 md:h-15 md:w-24"
              alt="Logo"
              loading="lazy"
            />
          )}
        </button>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white cursor-pointer focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div
          className={`md:flex md:items-center md:space-x-8 ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:w-auto`}
        >
          <ul
            className={`flex flex-col items-start md:flex-row gap-4 md:gap-8 text-lg 
                      ${
                        isMenuOpen
                          ? "block border border-gray-300 p-4 rounded-lg shadow-md"
                          : "hidden"
                      } 
                      md:flex md:border-0 md:shadow-none mt-4`}
          >
            <li>
              <button
                onClick={() => navigateToSection("home")}
                className="hover:text-yellow-400 md:text-2xl transition duration-300 cursor-pointer"
              >
                {t("home")}
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateToSection("video")}
                className="hover:text-yellow-400 md:text-2xl transition duration-300 cursor-pointer"
              >
                {t("services")}
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateToSection("contact")}
                className="hover:text-yellow-400 md:text-2xl transition duration-300 cursor-pointer"
              >
                {t("contact")}
              </button>
            </li>
            <li>
              <BsTranslate
                className="cursor-pointer md:text-2xl mt-1.5 hover:text-yellow-400 transition duration-300"
                onClick={toggleLanguage}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
