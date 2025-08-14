import { CgMenuRight } from "react-icons/cg";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

import { menuState } from "../../../context/menu.context";
const MobileNav = () => {
    const [menu, setMenu] = useRecoilState(menuState);
    function toggleMenuState() {
        setMenu((menu) => !menu);
    }
    return (
        <div>
            <button onClick={toggleMenuState} className="md:hidden flex">
                <CgMenuRight className="text-4xl dark:text-accent text-primary" />
            </button>

            {menu && (
                <div className="absolute text-center right-0 mt-2 w-48 md:hidden flex flex-col bg-light dark:bg-secondary backdrop-blur-sm shadow-lg rounded-lg p-2 gap-2 font-work-sans font-semibold theme-transition">
                    <a
                        href="#features"
                        className="text-muted hover:text-secondary dark:text-accent dark:hover:text-light transition-colors px-3 py-2 rounded"
                    >
                        Features
                    </a>
                    <a
                        href="#how-it-works"
                        className="text-muted hover:text-secondary dark:text-accent dark:hover:text-light transition-colors px-3 py-2 rounded"
                    >
                        How it Works
                    </a>
                    <a
                        href="#testimonials"
                        className="text-muted hover:text-secondary dark:text-accent dark:hover:text-light transition-colors px-3 py-2 rounded"
                    >
                        Testimonials
                    </a>
                    <Link
                        to={"/signin"}
                        className="cursor-pointer text-center px-6 py-2 rounded-lg transition-colors text-accent bg-secondary hover:bg-primary dark:text-primary dark:bg-light dark:hover:bg-accent "
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
