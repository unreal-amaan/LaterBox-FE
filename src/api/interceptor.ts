import { api, authApi } from "./api";

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log("interceptor invoked::", originalRequest.url);
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        await authApi.post("/auth/refreshtoken");
        // console.log("Retrying request after auth check");
        return api(originalRequest);
      } catch (err) {
        // console.error(err);
        try {
          await authApi.post("/auth/signout");
          // console.log("Logout successful, redirecting to home");
          window.location.href = "/";
        } catch (error) {
          // console.error("Logout failed:", error);
        }
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);
