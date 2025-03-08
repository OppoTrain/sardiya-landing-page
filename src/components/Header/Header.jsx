import Hero from "./Hero";
import Navbar from "./Navbar";
import ImageAssets from "@/utils/ImageAssets";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  return (
    <header
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      id="home"
      style={{
        backgroundImage: `url(${
          i18n.language == "ar" ? ImageAssets.heroRTL : ImageAssets.heroLTR
        })`,
        backgroundColor: "#d3a93c",
      }}
    >
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
