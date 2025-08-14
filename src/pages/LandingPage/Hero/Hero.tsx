import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-dark font-inter mx-auto w-full py-20 text-center"
    >
      <h1 className="text-light mb-4 text-4xl font-bold md:text-7xl">
        Stop Losing Your
        <span className="text-accent pulse-animation"> Digital</span>
      </h1>
      <span className="text-accent text-4xl font-bold md:text-7xl">
        Discoveries
      </span>
      <p className="text-light text-md font-work-sans mt-6 px-2 py-2 sm:text-xl">
        Tired of saving interesting videos, articles, and content across
        different apps?
      </p>
      <p className="text-light text-md font-work-sans mb-8 px-2 sm:text-xl">
        LaterBox organizes all your saved links in one beautiful, searchable
        place.
      </p>
      <Link
        to={"/signin"}
        className="bg-light font-work-sans text-secondary hover:bg-accent rounded-lg px-8 py-4 text-xl font-semibold"
      >
        Start Organizing Now
      </Link>
    </section>
  );
};

export default Hero;
