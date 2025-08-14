import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { themeState } from "./context/Theme.context";
import Signin from "./pages/SignInPage/Signin";
import LandingPage from "./pages/LandingPage/LandingPage";
export default function App() {
    const theme = useRecoilValue(themeState);
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    return (
        <div className="h-screen w-screen">
            <Router>
                <Routes>
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/" element={<LandingPage/>} />
                </Routes>
            </Router>
        </div>
    );
}
