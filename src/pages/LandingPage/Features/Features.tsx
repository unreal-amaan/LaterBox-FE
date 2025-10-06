import { lazy } from "react";

const Card = lazy(() => import("../../../components/FeatureCard"));

const cards = [
  {
    title: "Smart Categories",
    image: "📂",
    description:
      "Create unlimited custom categories to organize your content exactly how you want.",
  },
  {
    title: "Always on Top",
    image: "📌",
    description: " Keep your most important categories pinned and in sight.",
  },
  {
    title: "Privacy Control",
    image: "🔒",
    description:
      "Keep collections private or public - you have complete control over who can see your saved content.",
  },
  {
    title: "Instant Search",
    image: "🔍",
    description:
      "Find any saved content in seconds with our powerful search that looks through titles, descriptions, and tags.",
  },
  {
    title: "Universal Links",
    image: "⏰",
    description:
      "Save links from any platform - YouTube, Instagram, Twitter, Medium, Reddit, and thousands more.",
  },
  {
    title: "Share Collections",
    image: "🤝",
    description:
      "Make your collections public to share curated content with friends or discover amazing collections from others.",
  },
];

const Features = () => {
  return (
    <div
      id="features"
      className="dark:bg-secondary bg-accent/50 theme-transition py-20"
    >
      <h1 className="font-sora text-primary dark:text-light text-center text-3xl font-bold sm:text-4xl md:text-5xl">
        Everything You Need
      </h1>
      <p className="text-md font-inter text-primary/80 dark:text-light/70 py-6 text-center font-medium sm:text-lg md:text-xl">
        Powerful features designed to make content organization effortless and
        enjoyable.
      </p>
      <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3">
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

export default Features;
