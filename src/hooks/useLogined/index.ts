import { getItem } from "@/utils/localStorage";
import { useEffect, useState } from "react";

export const useLogined = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (getItem("access_token") !== null) {
      setIsLogin(true);
    }
  }, []);

  return isLogin;
};
