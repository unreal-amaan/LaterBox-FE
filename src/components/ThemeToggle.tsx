import { themeState } from "../context/Theme.context";
import { useRecoilState } from "recoil";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
const ThemeToggle = () => {
    const [theme, setTheme] = useRecoilState(themeState);
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "" : "dark");
    };
    return (
        <button
            onClick={toggleTheme}
            className={`rounded-xl h-10 w-10 shadow-lg theme-transition cursor-pointer flex items-center justify-center text-primary bg-light dark:bg-secondary dark:text-light`}
        >
            <IoMoonOutline className="hidden dark:block text-lg" />
            <IoSunnyOutline className="dark:hidden block text-lg" />
        </button>
    );
};

export default ThemeToggle;
