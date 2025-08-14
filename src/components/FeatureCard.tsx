type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card = (props: CardProps) => {
  return (
    <div className="dark:bg-primary/40 card-hover dark:card-hover border-muted/20 dark:border-accent/30 relative rounded-2xl border-1 bg-white/60 p-6 shadow-lg">
      <div className="bg-gradient-light dark:bg-gradient-dark mb-4 flex h-16 w-16 items-center justify-center rounded-lg text-2xl">
        {props.image}
      </div>
      <div className="text-primary dark:text-light font-inter mb-4 text-2xl font-semibold">
        {props.title}
      </div>
      <div className="text-muted dark:text-accent text-md font-work-sans">
        {props.description}
      </div>
    </div>
  );
};

export default Card;
