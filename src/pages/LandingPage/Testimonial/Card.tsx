import { IoPersonSharp } from "react-icons/io5";

const Card = (props: { name: string; text: string }) => {
  return (
    <div className="bg-secondary dark:bg-gradient-light theme-transition m-6 max-w-[20rem] min-w-[20rem] rounded-2xl">
      <div className="flex items-center gap-6 pt-8 pl-6">
        <div className="dark:bg-primary bg-light flex h-12 w-12 items-center justify-center rounded-full">
          <IoPersonSharp className="text-primary dark:text-accent text-3xl" />
        </div>
        <div className="text-accent dark:text-secondary font-inter text-xl font-medium">
          {props.name}
        </div>
      </div>
      <div className="mt-6 px-6 pb-8 text-justify">
        <p className="text-accent/90 font-work-sans dark:text-secondary px-2">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Card;
