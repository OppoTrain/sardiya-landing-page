import { createContext } from "react";

const NavigateContext = createContext();

const NavigateProvider = ({ children }) => {
  const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  let exportData = {
    navigateToSection,
  };

  return (
    <NavigateContext.Provider value={exportData}>
      {children}
    </NavigateContext.Provider>
  );
};

export { NavigateContext, NavigateProvider };
