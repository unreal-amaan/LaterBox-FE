import Loader from "@/components/Loader";
import type { Link } from "@/types";
import { toast } from "sonner";
import Card from "./Card";

const Main = ({
  data,
  isLoading,
  isError,
}: {
  data: Link[];
  isLoading: boolean;
  isError: boolean;
    }) => {
    const pinned: Link[] = data?.filter((c: Link) => c.isPinned) ?? [];
    const unpinned: Link[] = data?.filter((c: Link) => !c.isPinned) ?? [];
    if (isLoading) {
        return (
          <div className="flex h-[60vh] items-center justify-center">
            <Loader />
          </div>
        );
    }
    if (isError) {
        return toast.error("Failed to load links.", {
          style: { background: "#ef4444" },
        });
    }
    if (!data?.length) {
    return (
      <div className="py-6">
        <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
          <span className="font-sora dark:text-accent text-secondary text-2xl font-semibold">
            No Links Created Yet
          </span>
        </div>
      </div>
    );        
    }
  return (
    <div className="py-6">
      <h2 className="font-sora dark:text-accent text-secondary mb-4 text-xl font-semibold">
        📌 Pinned
      </h2>
      {pinned.length > 0 ? (
        <div className="mb-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pinned.map((link) => (
              <div key={link.id} className="mb-6 break-inside-avoid">
                <Card link={link} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-10 flex h-20 flex-col items-center justify-center gap-4">
          <span className="font-inter dark:text-accent text-secondary text-2xl font-semibold">
            No Pinned Categories
          </span>
        </div>
      )}

      <h2 className="font-sora dark:text-accent text-secondary mb-4 text-xl font-semibold">
        Other Categories
      </h2>
      {unpinned.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {unpinned.map((link) => (
              <div key={link.id} className="mb-6 break-inside-avoid">
                <Card link={link} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-4 flex h-20 flex-col items-center justify-center gap-4">
          <span className="font-sora dark:text-accent text-secondary text-2xl font-semibold">
            No Other Categories
          </span>
        </div>
      )}
    </div>
  );
};

export default Main;
