import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import CardsContainer from "./components/Cards/CardsContainer";
import Video from "./components/Video/Video";
import Download from "./components/Download/Download";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { FaArrowUp } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <CardsContainer />
      <Video />
      <Download />
      <Contact />
      <Footer />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-6 right-6 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition duration-300"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
}

export default App;
