import { lazy } from "react";

const ThemeToggle = lazy(() => import("../../../components/ThemeToggle"));
const LargeNav = lazy(() => import("./LargeNav"));
const MobileNav = lazy(() => import("./MobileNav"));

const Nav = () => {
  return (
    <div className="h-20 sm:h-22">
      <nav className="bg-light/95 theme-transition dark:bg-secondary/95 dark:border-accent/20 border-primary/20 fixed top-0 z-50 w-screen border-b shadow-xl backdrop-blur-sm">
        <div className="mx-auto px-4 md:px-6">
          <div className="flex h-20 items-center justify-between sm:h-22">
            <a href="#" className="flex items-center justify-center space-x-2">
              <div className="bg-secondary dark:bg-light flex h-10 w-10 items-center justify-center rounded-xl shadow-lg">
                <span className="font-rum-raisin text-light dark:text-primary text-xl font-extrabold">
                  L
                </span>
              </div>
              <span className="font-sora text-primary dark:text-light text-2xl font-bold">
                LaterBox
              </span>
            </a>
            <div className="flex items-center gap-3">
              <LargeNav />
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
