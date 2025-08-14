
const Heading = () => {
    return (
        <div className=" flex items-center justify-center p-4 pt-30">
            <div className="w-full h-full">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-3 mb-6">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-primary dark:bg-light">
                            <span className="text-4xl font-extrabold font-rum-raisin text-light dark:text-primary">
                                L
                            </span>
                        </div>
                        <span className="text-4xl font-bold font-sora text-primary dark:text-light">
                            LaterBox
                        </span>
                    </div>
                    <h1 className="md:text-5xl text-4xl font-bold mb-2 font-inter text-primary dark:text-light">
                        Welcome
                    </h1>
                    <p className="text-lg font-work-sans text-muted dark:text-accent">
                        Sign in to organize your digital discoveries
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Heading;
