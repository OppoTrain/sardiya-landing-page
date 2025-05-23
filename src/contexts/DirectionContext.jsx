import { createContext, useEffect, useState } from "react";
import i18n from "@/utils/i18n";

const DirectionContext = createContext();

const DirectionProvider = ({ children }) => {
  const [isRtl, setIsRtl] = useState(i18n.language === "ar");

  useEffect(() => {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }, [isRtl]);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    setIsRtl(newLanguage === "ar");
  };

  let exportData = {
    isRtl,
    setIsRtl,
    toggleLanguage,
  };
  return (
    <DirectionContext.Provider value={exportData}>
      {children}
    </DirectionContext.Provider>
  );
};

export { DirectionContext, DirectionProvider };
