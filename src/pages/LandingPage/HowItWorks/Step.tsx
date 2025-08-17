type Props = {
  title: string;
  num: string;
  description: string;
};
const Step = (props: Props) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="bg-secondary dark:bg-light flex h-24 w-24 items-center justify-center rounded-full">
        <span className="dark:text-secondary text-accent font-inter text-3xl font-bold">
          {props.num}
        </span>
      </div>
      <h3 className="text-secondary dark:text-light font-inter text-2xl font-semibold">
        {props.title}
      </h3>
      <div className="flex  items-start ">
        <p className="text-md dark:text-accent text-primary font-work-sans px-8 text-center">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Step;
