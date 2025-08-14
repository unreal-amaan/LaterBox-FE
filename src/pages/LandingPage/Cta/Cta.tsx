import { Link } from "react-router-dom";
const Cta = () => {
  return (
    <div id="features" className="bg-gradient-dark theme-transition py-20">
      <h1 className="font-sora text-light mb-4 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        Organize Everything.
      </h1>
      <h1 className="font-sora text-light text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        Forget Nothing.
      </h1>
      <p className="text-md font-inter text-light/70 px-2 py-6 text-center font-medium sm:text-lg md:text-xl">
        Save and organize all your digital discoveries in one place.
      </p>
      <div className="mx-auto flex justify-center">
        <Link
          to={"/signin"}
          className="bg-light font-work-sans text-secondary hover:bg-accent rounded-lg px-8 py-4 text-xl font-semibold"
        >
          Start for Free
        </Link>
      </div>
    </div>
  );
};

export default Cta;
