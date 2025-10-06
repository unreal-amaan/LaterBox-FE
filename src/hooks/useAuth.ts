import { authApi } from "../api/api";
import { authState } from "../context/global.context";

import { useSetRecoilState } from "recoil";

export const useAuth = () => {
  const setAuth = useSetRecoilState(authState);

  const checkAuth = async () => {
    try {
      await authApi.post("/auth/refreshtoken");
      setAuth(true);
    } catch (error: any) {
      setAuth(false);
    }
  };

  const logout = async () => {
    try {
      await authApi.post("/auth/signout");
      setAuth(false);
    } catch (error) {}
  };

  return { checkAuth, logout };
};
