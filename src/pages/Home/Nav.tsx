import { LuLogOut } from "react-icons/lu";

import ThemeToggle from "../../components/ThemeToggle";
import { useAuth } from "../../hooks/useAuth";
const Nav = () => {
  const { logout } = useAuth();
  return (
    <div className="h-20 sm:h-22">
      <nav className="bg-light/95 dark:bg-secondary/95 dark:border-accent/20 border-primary/20 theme-transition fixed top-0 z-50 w-screen border-b shadow-xl backdrop-blur-sm">
        <div className="mx-auto px-4 md:px-6">
          <div className="flex h-20 items-center justify-between sm:h-22">
            <a href="#" className="flex items-center justify-center space-x-2">
              <div className="bg-secondary dark:bg-light flex h-10 w-10 items-center justify-center rounded-xl shadow-lg sm:rounded-xl">
                <span className="font-rum-raisin text-light dark:text-primary text-2xl font-extrabold ">
                  L
                </span>
              </div>
              <span className="font-sora text-primary dark:text-light text-2xl font-bold ">
                LaterBox
              </span>
            </a>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <div className="bg-secondary dark:bg-light flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl shadow-lg">
                <button
                  onClick={logout}
                  className="font-rum-raisin text-light dark:text-primary cursor-pointer text-2xl font-bold"
                >
                  <LuLogOut />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
