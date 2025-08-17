import { authApi } from "../api/api";
import { isLoadingState, authState } from "../context/global.context";

import { useSetRecoilState } from "recoil";

export const useAuth = () => {
  const setAuth = useSetRecoilState(authState);
  const setLoading = useSetRecoilState(isLoadingState);

  const checkAuth = async () => {
    setLoading(true);
    try {
      console.log("Checking authentication status...");
      await authApi.post("/auth/refreshtoken");
        console.log("User Authenticated");
      setAuth(true);
    } catch (error:any) {
        setAuth(false);
        console.error("Error checking authentication:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await authApi.post("/auth/signout");
      console.log("Logout successful");
      setAuth(false);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return { checkAuth, logout };
};
