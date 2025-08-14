const Heading = () => {
  return (
    <div className="flex items-center justify-center p-4 pt-30">
      <div className="h-full w-full">
        <div className="mb-8 text-center">
          <div className="mb-6 flex items-center justify-center space-x-3">
            <div className="bg-primary dark:bg-light flex h-12 w-12 items-center justify-center rounded-xl shadow-lg">
              <span className="font-rum-raisin text-light dark:text-primary text-4xl font-extrabold">
                L
              </span>
            </div>
            <span className="font-sora text-primary dark:text-light text-4xl font-bold">
              LaterBox
            </span>
          </div>
          <h1 className="font-inter text-primary dark:text-light mb-2 text-4xl font-bold md:text-5xl">
            Welcome
          </h1>
          <p className="font-work-sans text-muted dark:text-accent text-lg">
            Sign in to organize your digital discoveries
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
