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
        return api(originalRequest);
      } catch (err) {
        try {
          await authApi.post("/auth/signout");
          window.location.href = "/";
        } catch (error) {
        }
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);
