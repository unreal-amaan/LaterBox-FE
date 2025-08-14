const  FeatureOverview = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="rounded-2xl shadow-2xl p-8 md:p-12 dark:bg-secondary/50 bg-white/60 theme-transition">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-extrabold text-secondary font-sora mb-6 dark:text-accent">
                                Simple. Organized. Powerful.
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start  space-x-4">
                                    <div className="w-8 h-8 bg-secondary dark:bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 theme-transition">
                                        <span className=" text-accent dark:text-secondary text-md font-semibold font-inter">
                                            1
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-xl dark:text-light text-secondary mb-2 font-inter">
                                            Copy Any Link
                                        </h4>
                                        <p className="text-muted/90 font-work-sans font-medium dark:text-accent/70">
                                            From YouTube videos to Medium
                                            articles, just copy the link from
                                            anywhere on the web.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-secondary dark:bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 theme-transition">
                                        <span className=" text-accent dark:text-secondary text-md font-semibold">
                                            2
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-xl text-secondary dark:text-light mb-2 font-inter">
                                            Organize in Categories
                                        </h4>
                                        <p className="text-muted/90 font-work-sans font-medium dark:text-accent/70">
                                            Create custom categories like "Tech
                                            Articles", "Cooking Videos", or
                                            "Weekend Reads".
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-secondary dark:bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 theme-transition">
                                        <span className=" text-accent dark:text-secondary text-md font-semibold">
                                            3
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-xl text-secondary dark:text-light mb-2 font-inter">
                                            Share & Discover
                                        </h4>
                                        <p className="text-muted/90 font-work-sans font-medium dark:text-accent/70">
                                            Make collections public to share
                                            with friends or discover curated
                                            content from others.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-secondary rounded-xl p-8 text-center">
                            <div className="bg-light/10 rounded-lg p-6 mb-6">
                                <div className="w-16 h-16 feature-icon rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📦</span>
                                </div>
                                <h4 className="text-light font-semibold sm:text-lg mb-2 font-sora">
                                    Your Digital Collection
                                </h4>
                                <p className="text-accent text-sm font-inter">
                                    All your saved content, beautifully
                                    organized and instantly searchable
                                </p>
                            </div>
                            <div className="space-y-3 font-work-sans">
                                <div className="bg-light/5 rounded-lg p-3 text-left border border-light/10">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-light rounded-full"></div>
                                        <span className="text-light text-sm">
                                            📺 Tech Reviews (12 items)
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-light/5 rounded-lg p-3 text-left border border-light/10">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-light rounded-full"></div>
                                        <span className="text-light text-sm">
                                            📚 Weekend Reads (8 items)
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-light/5 rounded-lg p-3 text-left border border-light/10">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-light rounded-full"></div>
                                        <span className="text-light text-sm">
                                            🍳 Recipes (15 items)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureOverview;
