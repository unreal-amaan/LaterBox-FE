interface LoaderProps {
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
  className?: string;
}

const Loader = ({ size = "md", fullScreen = false, className = "" }: LoaderProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6", 
    lg: "h-8 w-8"
  };

  const containerClasses = fullScreen 
    ? "fixed inset-0 z-50 flex items-center justify-center bg-transparent"
    : "flex items-center justify-center w-full h-full";

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className="flex space-x-2">
        <div className={`bounce-dot bg-secondary dark:bg-accent ${sizeClasses[size]} rounded-full`}></div>
        <div className={`bounce-dot bg-secondary dark:bg-accent ${sizeClasses[size]} rounded-full`}></div>
        <div className={`bounce-dot bg-secondary dark:bg-accent ${sizeClasses[size]} rounded-full`}></div>
      </div>
    </div>
  );
};

export default Loader;
