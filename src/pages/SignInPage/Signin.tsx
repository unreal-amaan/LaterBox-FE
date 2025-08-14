import ThemeToggle from "../../components/ThemeToggle";
import Card from "./Card";
import Heading from "./Heading";
const Signin = () => {
  return (
    <div className="theme-transition bg-gradient-light dark:bg-gradient-dark relative h-screen w-screen">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>
      <Heading />
      <Card />
    </div>
  );
};

export default Signin;
