import Step from "./Step";

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
        <div id="how-it-works" className="dark:bg-muted bg-accent/50 py-24 theme-transition">
            <h1 className="text-4xl md:text-5xl text-center font-bold font-sora text-primary dark:text-light">
                How It Works
            </h1>
            <p className="text-md sm:text-lg px-2 md:text-xl text-center py-6 font-medium font-sora text-primary/80 dark:text-accent">
                Get started in minutes and transform how you save and organize
                digital content forever.
            </p>
            <div className="grid grid-cols:1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center mt-10">
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
