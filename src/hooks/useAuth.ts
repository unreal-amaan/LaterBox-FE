import { authApi } from "../api/api";
import { authState } from "../context/global.context";

import { useSetRecoilState } from "recoil";

export const useAuth = () => {
  const setAuth = useSetRecoilState(authState);

  const checkAuth = async () => {
    try {
      // console.log("Checking authentication status...");
      await authApi.post("/auth/refreshtoken");
        // console.log("User Authenticated");
      setAuth(true);
    } catch (error:any) {
        setAuth(false);
        // console.error("Error checking authentication:", error);
    }
  };

  const logout = async () => {
    try {
      await authApi.post("/auth/signout");
      // console.log("Logout successful");
      setAuth(false);
    } catch (error) {
      // console.error("Logout failed:", error);
    }
  };

  return { checkAuth, logout };
};
