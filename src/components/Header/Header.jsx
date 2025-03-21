import useDirection from "@/hooks/useDirection";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ImageAssets from "@/utils/ImageAssets";

const Header = () => {
  const { isRtl } = useDirection();

  return (
    <header
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      id="home"
      style={{
        backgroundImage: `url(${
          isRtl ? ImageAssets.heroRTL : ImageAssets.heroLTR
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
