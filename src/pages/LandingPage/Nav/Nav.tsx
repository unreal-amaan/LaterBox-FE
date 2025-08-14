import ThemeToggle from "../../../components/ThemeToggle";
import LargeNav from "./LargeNav";
import MobileNav from "./MobileNav";

const Nav = () => {
    return (
        <div className="sm:h-22 h-20">
            <nav className="bg-light/95 dark:bg-secondary/95 backdrop-blur-sm w-screen border-b dark:border-accent/20 border-primary/20 fixed top-0 z-50 shadow-xl">
                <div className="mx-auto px-4 md:px-6">
                    <div className="flex justify-between items-center sm:h-22 h-20">
                        <a href="#hero" className="flex items-center justify-center space-x-2">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg bg-secondary dark:bg-light">
                                <span className="text-xl font-extrabold font-rum-raisin text-light dark:text-primary">
                                    L
                                </span>
                            </div>
                            <span className="text-2xl font-bold font-sora text-primary dark:text-light">
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
