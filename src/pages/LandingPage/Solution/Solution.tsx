import { lazy } from "react";

const FeatureOverview = lazy(() => import("./FeatureOverview"));

const Solution = () => {
  return (
    <div className="dark:bg-muted bg-accent/50 theme-transition py-20">
      <h1 className="font-sora text-primary dark:text-light text-center text-4xl font-bold md:text-5xl">
        Meet LaterBox
      </h1>
      <p className="text-md font-inter text-primary/80 dark:text-accent px-2 py-6 text-center font-medium sm:text-lg md:text-xl">
        One simple solution for all your content saving needs. Copy any link,
        organize it
        <br /> beautifully, and never lose track of your discoveries again.
      </p>
      <div className="grid grid-cols-1">
        <FeatureOverview />
      </div>
    </div>
  );
};

export default Solution;
