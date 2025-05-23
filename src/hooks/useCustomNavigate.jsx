import { useContext } from "react";
import { NavigateContext } from "@/contexts/NavigateContext";

const useCustomNavigate = () => {
  return useContext(NavigateContext);
};

export default useCustomNavigate;
