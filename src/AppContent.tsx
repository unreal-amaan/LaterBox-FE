import { useEffect, lazy, Suspense } from "react";
import { useRecoilValue } from "recoil";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

//Context
import { themeState, authState } from "./context/global.context";

//hooks
import { useAuth } from "./hooks/useAuth";

//Components
const Loader = lazy(() => import("./components/Loader"));
const CategoryView = lazy(() => import("./pages/CategoryDetails/CategoryView"));
const Layout = lazy(() => import("./pages/Layout/Layout"));
const Page = lazy(() => import("./pages/public/Page"));
const Signin = lazy(() => import("./pages/SignInPage/Signin"));
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const Home = lazy(() => import("./pages/Home/Home"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute/ProtectedRoute"));

export default function AppContent() {
  const theme = useRecoilValue(themeState);
  const isAuthenticated = useRecoilValue(authState);
  const navigate = useNavigate();
  const location = useLocation();
  const { checkAuth } = useAuth();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated && location.pathname === "/") {
      console.log("Authenticated. Redirecting from / to /home");
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, location.pathname, navigate]);

  if (isAuthenticated === null) {
    return (
      <div className="bg-gradient-light dark:bg-gradient-dark flex h-screen w-screen items-center justify-center">
        <Loader fullScreen />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen">
      <Suspense>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<LandingPage />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/category/:id" element={<CategoryView />} />
            </Route>
          </Route>
          <Route path="/share/public/:id" element={<Page />} />
        </Routes>
      </Suspense>
    </div>
  );
}
