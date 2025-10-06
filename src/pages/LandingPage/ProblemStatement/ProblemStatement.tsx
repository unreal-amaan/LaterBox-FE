import { lazy } from "react";

const Card = lazy(() => import("../../../components/FeatureCard"));

const cards = [
  {
    title: "Scattered Everywhere",
    image: "😵‍💫",
    description:
      "YouTube Watch Later, browser bookmarks, Instagram saves, Twitter likes - your content is everywhere except where you need it.",
  },
  {
    title: "Hard to Find",
    image: "🔍",
    description:
      "Remember that amazing article you saved 3 weeks ago? Good luck finding it among hundreds of unsorted bookmarks.",
  },
  {
    title: "Never Revisited",
    image: "⏰",
    description:
      "You save content with good intentions, but most of it gets buried and forgotten in the digital chaos.",
  },
];

const ProblemStatement = () => {
  return (
    <div className="dark:bg-secondary bg-accent/50 theme-transition py-20">
      <h1 className="font-sora text-primary dark:text-light text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        The Problem We All Face
      </h1>
      <p className="text-md font-inter text-primary/80 dark:text-light/70 py-6 text-center font-medium sm:text-lg md:text-xl">
        Every day, we discover amazing content while browsing the internet,
        <br /> but our current saving methods are scattered and chaotic.
      </p>
      <div className="grid gap-6 p-6 md:grid-cols-3">
        {cards.map((card) => {
          return (
            <Card
              key={card.title}
              title={card.title}
              image={card.image}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProblemStatement;
