import Card from "../../../components/FeatureCard";

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
        <div className="dark:bg-secondary bg-accent/50 py-20 theme-transition">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold font-sora text-primary dark:text-light">
                The Problem We All Face
            </h1>
            <p className="text-md sm:text-lg md:text-xl text-center py-6 font-medium font-inter text-primary/80 dark:text-light/70">
                Every day, we discover amazing content while browsing the
                internet,
                <br /> but our current saving methods are scattered and chaotic.
            </p>
            <div className="grid md:grid-cols-3 gap-6 p-6">
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
