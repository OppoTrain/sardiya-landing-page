import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsTranslate } from "react-icons/bs";
import i18n from "@/utils/i18n";
import ImageAssets from '@/utils/ImageAssets'

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`text-white`}>
      <div
        className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-8`}
      >
        <button
          onClick={() => handleNavClick("home")}
          className="font-bold text-3xl flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
        >
          {i18n.language === "en" ? (
            "Sardiya"
          ) : (
            <img
              src={ImageAssets.logo}
              className="h-10"
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
                onClick={() => handleNavClick("home")}
                className="hover:text-yellow-400 transition duration-300 cursor-pointer"
              >
                {t("home")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("video")}
                className="hover:text-yellow-400 transition duration-300 cursor-pointer"
              >
                {t("services")}
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("contact")}
                className="hover:text-yellow-400 transition duration-300 cursor-pointer"
              >
                {t("contact")}
              </button>
            </li>
            <li>
              <BsTranslate
                className="cursor-pointer text-xl mt-1.5 hover:text-yellow-400 transition duration-300"
                onClick={handleLanguageChange}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
