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
      className={`theme-transition text-primary bg-light dark:bg-secondary dark:text-light flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl shadow-lg`}
    >
      <IoMoonOutline className="hidden text-lg dark:block" />
      <IoSunnyOutline className="block text-lg dark:hidden" />
    </button>
  );
};

export default ThemeToggle;
