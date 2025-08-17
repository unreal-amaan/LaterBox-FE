import { GoSignOut } from "react-icons/go";

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
              <div className="bg-secondary dark:bg-light flex h-8 w-8 items-center justify-center rounded-lg shadow-lg sm:h-10 sm:w-10 sm:rounded-xl">
                <span className="font-rum-raisin text-light dark:text-primary text-xl font-extrabold sm:text-2xl">
                  L
                </span>
              </div>
              <span className="font-sora text-primary dark:text-light text-xl font-bold sm:text-2xl">
                LaterBox
              </span>
            </a>
            <div>
              <input
                type="text"
                placeholder="Search Categories..."
                className="dark:bg-secondary bg-light dark:placeholder:text-accent placeholder:text-primary placeholder:font-work-sans border-primary dark:text-accent text-primary ,d:pl-4 sm:placeholder:text-md w-33 rounded-lg border-1 py-2 pl-1 placeholder:text-xs sm:pl-2 md:w-80 md:placeholder:text-lg"
              />
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <div className="bg-secondary dark:bg-light flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg shadow-lg sm:h-10 sm:w-10 sm:rounded-xl">
                <button
                  onClick={logout}
                  className="font-rum-raisin text-light dark:text-primary cursor-pointer text-xl font-extrabold sm:text-2xl"
                >
                  <GoSignOut />
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
