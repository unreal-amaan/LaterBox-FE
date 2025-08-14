import { FcGoogle } from "react-icons/fc";
const Card = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="card-hover dark:card-hover bg-light dark:bg-secondary w-sm max-w-md rounded-2xl p-8 shadow-2xl md:w-full">
        <a
          href={`${import.meta.env.VITE_API_URL}/auth/signin`}
          className="google-btn card-hover bg-light mb-8 flex w-full cursor-pointer items-center justify-center space-x-3 rounded-xl p-5 shadow-lg"
        >
          <FcGoogle className="text-3xl" />
          <span className="font-work-sans text-primary text-xl font-semibold">
            Continue with Google
          </span>
        </a>

        <div className="mb-8 flex items-center">
          <div className="border-muted/30 flex-1 border-t dark:border-gray-600"></div>
          <span className="text-muted dark:text-accent bg-light dark:bg-secondary rounded-full px-4 text-sm">
            Quick & Secure
          </span>
          <div className="border-muted/30 flex-1 border-t dark:border-gray-600"></div>
        </div>

        <div className="mb-6 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full">
              <span className="bg-accent dark:bg-muted flex h-8 w-8 items-center justify-center rounded-full text-sm">
                🔒
              </span>
            </div>
            <span className="text-md text-muted dark:text-accent">
              Secure OAuth authentication
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full">
              <span className="bg-accent dark:bg-muted flex h-8 w-8 items-center justify-center rounded-full text-sm">
                ⚡
              </span>
            </div>
            <span className="text-md text-muted dark:text-accent">
              Instant access to your collections
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full">
              <span className="bg-accent dark:bg-muted flex h-8 w-8 items-center justify-center rounded-full text-sm">
                🌐
              </span>
            </div>
            <span className="text-md text-muted dark:text-accent">
              Sync across all your devices
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
