import FeatureOverview from "./FeatureOverview";

const Solution = () => {
    return (
        <div className="dark:bg-muted bg-accent/50 py-20 theme-transition">
            <h1 className="text-4xl md:text-5xl text-center font-bold font-sora text-primary dark:text-light">
                Meet LaterBox
            </h1>
            <p className="text-md sm:text-lg md:text-xl text-center py-6 px-2 font-medium font-inter text-primary/80 dark:text-accent">
                One simple solution for all your content saving needs. Copy any
                link, organize it
                <br /> beautifully, and never lose track of your discoveries
                again.
            </p>
            <div className="grid grid-cols-1">
                <FeatureOverview/>
            </div>
        </div>
    );
};

export default Solution;


























