import { Link } from "react-router-dom";

const LargeNav = () => {
  return (
    <div className="font-work-sans theme-transition hidden items-center space-x-8 font-semibold md:flex">
      <a
        href="#features"
        className="text-muted hover:text-secondary dark:text-accent dark:hover:text-light transition-colors"
      >
        Features
      </a>
      <a
        href="#how-it-works"
        className="text-muted hover:text-secondary dark:text-accent dark:hover:text-light transition-colors"
      >
        How it Works
      </a>
      <a
        href="#testimonials"
        className="text-muted hover:text-secondary dark:text-accent dark:hover:text-light transition-colors"
      >
        Testimonials
      </a>
      <Link
        to={"/signin"}
        className="text-accent bg-secondary hover:bg-primary dark:text-primary dark:bg-light dark:hover:bg-accent cursor-pointer rounded-lg px-6 py-2 transition-colors"
      >
        Get Started
      </Link>
    </div>
  );
};

export default LargeNav;
