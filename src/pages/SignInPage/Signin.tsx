import ThemeToggle from "../../components/ThemeToggle";
import Card from "./Card";
import Heading from "./Heading";
const Signin = () => {
    return (
        <div className="w-screen h-screen theme-transition relative bg-gradient-light dark:bg-gradient-dark">
            <div className="absolute top-6 right-6">
                <ThemeToggle />
            </div>
            <Heading />
            <Card />
        </div>
    );
};

export default Signin;
