import { Link } from "react-router-dom";
const Cta = () => {
  return (
      <div id="features" className="bg-gradient-dark py-20 theme-transition">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold font-sora text-light mb-4">
              Organize Everything.
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold font-sora text-light">
              Forget Nothing.
          </h1>
          <p className="text-md sm:text-lg md:text-xl text-center py-6 px-2 font-medium font-inter text-light/70">
              Save and organize all your digital discoveries in one place.
          </p>
          <div className="flex justify-center mx-auto">
              <Link
                  to={"/signin"}
                  className="px-8 py-4 bg-light rounded-lg font-work-sans font-semibold text-secondary text-xl hover:bg-accent"
              >
                  Start for Free
              </Link>
          </div>
      </div>
  );
}

export default Cta