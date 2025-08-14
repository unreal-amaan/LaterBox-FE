import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section id="hero" className="bg-gradient-dark mx-auto w-full py-20 text-center font-inter">
            <h1 className="text-4xl md:text-7xl font-bold text-light mb-4">
                Stop Losing Your
                <span className="text-accent pulse-animation"> Digital</span>
            </h1>
            <span className="text-accent text-4xl md:text-7xl font-bold">
                Discoveries
            </span>
            <p className="text-light text-md px-2 sm:text-xl py-2 font-work-sans mt-6">
                Tired of saving interesting videos, articles, and content across
                different apps?
            </p>
            <p className="text-light text-md px-2 sm:text-xl font-work-sans mb-8">
                LaterBox organizes all your saved links in one beautiful,
                searchable place.
            </p>
            <Link
                to={"/signin"}
                className="px-8 py-4 bg-light rounded-lg font-work-sans font-semibold text-secondary text-xl hover:bg-accent"
            >
                Start Organizing Now
            </Link>
        </section>
    );
};

export default Hero;
