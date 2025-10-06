import { lazy } from "react";

const ThemeToggle = lazy(() => import("../../components/ThemeToggle"));
const Card = lazy(() => import("./Card"));
const Heading = lazy(() => import("./Heading"));

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
