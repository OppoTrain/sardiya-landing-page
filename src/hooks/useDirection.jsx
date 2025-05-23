import { useContext } from "react";
import { DirectionContext } from "@/contexts/DirectionContext";

const useDirection = () => {
  return useContext(DirectionContext);
};

export default useDirection;
