type Props = {
    title: string;
    num: string;
    description: string;
};
const Step = (props: Props) => {
    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="rounded-full w-24 h-24 flex items-center justify-center bg-secondary dark:bg-light">
                <span className="text-3xl font-bold dark:text-secondary text-accent font-inter">
                    {props.num}
                </span>
            </div>
            <h3 className="text-2xl font-semibold text-secondary dark:text-light font-inter ">
                {props.title}
            </h3>
            <div className="h-24 flex items-start">
                <p className="text-md dark:text-accent text-primary font-work-sans text-center px-8">
                    {props.description}
                </p>
            </div>
        </div>
    );
};

export default Step;
