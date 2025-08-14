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
      <button onClick={toggleMenuState} className="flex md:hidden">
        <CgMenuRight className="dark:text-accent text-primary text-4xl" />
      </button>

      {menu && (
        <div className="bg-light dark:bg-secondary font-work-sans theme-transition absolute right-0 mt-2 flex w-48 flex-col gap-2 rounded-lg p-2 text-center font-semibold shadow-lg backdrop-blur-sm md:hidden">
          <a
            href="#features"
            className="text-muted hover:text-secondary dark:text-accent dark:hover:text-light rounded px-3 py-2 transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-muted hover:text-secondary dark:text-accent dark:hover:text-light rounded px-3 py-2 transition-colors"
          >
            How it Works
          </a>
          <a
            href="#testimonials"
            className="text-muted hover:text-secondary dark:text-accent dark:hover:text-light rounded px-3 py-2 transition-colors"
          >
            Testimonials
          </a>
          <Link
            to={"/signin"}
            className="text-accent bg-secondary hover:bg-primary dark:text-primary dark:bg-light dark:hover:bg-accent cursor-pointer rounded-lg px-6 py-2 text-center transition-colors"
          >
            Get Started
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
