import Cta from "./Cta/Cta";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import WorkFlow from "./HowItWorks/WorkFlow";
import Nav from "./Nav/Nav";
import ProblemStatement from "./ProblemStatement/ProblemStatement";
import Solution from "./Solution/Solution";

const LandingPage = () => {
  return (
    <div className="h-screen w-full">
      <Nav />
      <Hero />
      <ProblemStatement />
      <Solution />
      <Features />
      <WorkFlow />
      <Cta />
    </div>
  );
};

export default LandingPage;
