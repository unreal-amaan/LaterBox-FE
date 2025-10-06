import { lazy } from "react";

const Step = lazy(() => import("./Step"));

const steps = [
  {
    num: "1",
    title: "Copy Link",
    description:
      "Found something interesting? Just copy the link from any website or app.",
  },
  {
    num: "2",
    title: "Paste & Save",
    description:
      "Paste it into LaterBox and choose a category or create a new one.",
  },
  {
    num: "3",
    title: "Organize",
    description:
      "Add tags, notes, and organize your content in beautiful, searchable collections.",
  },
  {
    num: "4",
    title: "Enjoy",
    description:
      "Access your curated content anytime, anywhere, and never lose track of great finds again.",
  },
];

const WorkFlow = () => {
  return (
    <div
      id="how-it-works"
      className="dark:bg-muted bg-accent/50 theme-transition py-24"
    >
      <h1 className="font-sora text-primary dark:text-light text-center text-4xl font-bold md:text-5xl">
        How It Works
      </h1>
      <p className="text-md font-sora text-primary/80 dark:text-accent px-2 py-6 text-center font-medium sm:text-lg md:text-xl">
        Get started in minutes and transform how you save and organize digital
        content forever.
      </p>
      <div className="grid-cols:1 mt-10 grid place-items-center gap-5 sm:grid-cols-2 md:grid-cols-4">
        {steps.map((step, index) => (
          <Step
            key={index}
            num={step.num}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkFlow;
