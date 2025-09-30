const Header = ({
  category,
  count,
  description,
}: {
  category: string;
  count: number;
  description: string;
}) => {
  return (
    <div>
      <div className="text-secondary dark:text-accent flex items-center justify-start gap-6 text-4xl font-bold">
        <h1 className="font-sora">{category}</h1>
        <h1 className="font-inter text-2xl">
          {count !== 0 && count}{" "}
          {count !== 0 && (
            <span className="text-muted dark:text-light/90 text-xl">
              Link(s)
            </span>
          )}
        </h1>
      </div>
      <p className="font-work-sans text-primary/80 dark:text-accent w-full text-lg font-medium sm:w-3/4 lg:w-1/2">
        {description}
      </p>
    </div>
  );
};

export default Header;
