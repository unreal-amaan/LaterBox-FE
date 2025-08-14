
type CardProps = {
    title: string,
    description: string,
    image: string,
}


const Card = (props:CardProps) => {
  return (
      <div className="bg-white/60 dark:bg-primary/40 p-6 rounded-2xl card-hover dark:card-hover shadow-lg relative border-1 border-muted/20 dark:border-accent/30">
          <div className="text-2xl bg-gradient-light dark:bg-gradient-dark h-16 w-16 rounded-lg flex items-center justify-center mb-4">
              {props.image}
          </div>
          <div className="text-primary dark:text-light text-2xl font-inter font-semibold mb-4">
              {props.title}
          </div>
          <div className="text-muted dark:text-accent text-md font-work-sans">
              {props.description}
          </div>
      </div>
  );
}

export default Card