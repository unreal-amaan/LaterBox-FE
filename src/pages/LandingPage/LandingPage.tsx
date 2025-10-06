import { lazy } from "react";

const Cta = lazy(() => import("./Cta/Cta"));
const Features = lazy(() => import("./Features/Features"));
const Hero = lazy(() => import("./Hero/Hero"));
const WorkFlow = lazy(() => import("./HowItWorks/WorkFlow"));
const Nav = lazy(() => import("./Nav/Nav"));
const ProblemStatement = lazy(
  () => import("./ProblemStatement/ProblemStatement"),
);
const Solution = lazy(() => import("./Solution/Solution"));
const Testimonial = lazy(() => import("./Testimonial/Testimonial"));

const LandingPage = () => {
  return (
    <div className="h-screen w-full">
      <Nav />
      <Hero />
      <ProblemStatement />
      <Solution />
      <Features />
      <WorkFlow />
      <Testimonial />
      <Cta />
    </div>
  );
};

export default LandingPage;
