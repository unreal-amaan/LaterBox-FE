import { FcGoogle } from "react-icons/fc";
const Card = () => {
    return (
        <div className="flex items-center justify-center ">
            <div className="rounded-2xl shadow-2xl p-8 card-hover dark:card-hover bg-light dark:bg-secondary w-sm md:w-full max-w-md ">
                <a href={`${import.meta.env.VITE_API_URL}/auth/signin`} className="w-full google-btn card-hover rounded-xl p-5 flex items-center justify-center space-x-3 mb-8 shadow-lg cursor-pointer bg-light">
                    <FcGoogle className="text-3xl" />
                    <span className="text-xl font-work-sans font-semibold text-primary">
                        Continue with Google
                    </span>
                </a>

                <div className="flex items-center mb-8">
                    <div className="flex-1 border-t border-muted/30 dark:border-gray-600"></div>
                    <span className="px-4 rounded-full text-sm text-muted dark:text-accent bg-light dark:bg-secondary">
                        Quick & Secure
                    </span>
                    <div className="flex-1 border-t border-muted/30 dark:border-gray-600"></div>
                </div>

                <div className="space-y-6 mb-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center">
                            <span className="text-sm w-8 h-8 bg-accent dark:bg-muted rounded-full flex items-center justify-center">
                                🔒
                            </span>
                        </div>
                        <span className="text-md text-muted dark:text-accent">
                            Secure OAuth authentication
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center">
                            <span className="text-sm w-8 h-8 bg-accent dark:bg-muted rounded-full flex items-center justify-center">
                                ⚡
                            </span>
                        </div>
                        <span className="text-md text-muted dark:text-accent">
                            Instant access to your collections
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center">
                            <span className="text-sm w-8 h-8 bg-accent dark:bg-muted rounded-full flex items-center justify-center">
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