import Loader from "@/components/Loader";
import { toast } from "sonner";

import { useCategories } from "../../hooks/useCategories";
import type { Category } from "../../types";
import Card from "./Card";
import Top from "./Top";
const Main = () => {
  const { getcategories } = useCategories();
  const { data, isLoading, isError } = getcategories;

  
  const pinned = data?.filter((c: Category) => c.isPinned) ?? [];
  const unpinned = data?.filter((c: Category) => !c.isPinned) ?? [];
  const options =
    data?.map((c: Category) => ({ label: c.title, value: c.id })) ?? [];

  if (isLoading) return (
    <div className="py-6">
      <div className="mb-8">
        <Top options={options} />
      </div>
      <div className="flex h-[60vh] items-center justify-center">
        <Loader />
      </div>
    </div>
  );
  if (isError) return toast.error("Failed to load categories.", { style: { background: "#ef4444" } });
  if (!data?.length)
    return (
      <div className="py-6">        
        <div className="mb-8">
          <Top options={options} />
        </div>

        <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
          <span className="font-sora dark:text-accent text-secondary text-2xl font-semibold">
            No Categories Found
          </span>
        </div>
      </div>
    );

  return (
    <div className="py-6">
      <div className="mb-8">
        <Top options={options} />
      </div>

      <h2 className="font-sora dark:text-accent text-secondary mb-4 text-xl font-semibold">
        📌 Pinned
      </h2>
      {pinned.length > 0 ? (
        <div className="mb-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            {pinned.map((category) => (
              <div key={category.id} className="mb-6 break-inside-avoid">
                <Card category={category}/>
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
            {unpinned.map((category) => (
              <div key={category.id} className="mb-6 break-inside-avoid">
                <Card category={category} />
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
