import { useCategories } from "../../hooks/useCategories";
import type { Category } from "../../types";
import Card from "./Card";
const Main = () => {
  const { getcategories } = useCategories();
  const { data, isLoading, isError } = getcategories;
  const pinned = data?.filter((c: Category) => c.isPinned);
  const unpinned = data?.filter((c: Category) => !c.isPinned);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading categories</div>;
  } else {
    if (data?.length === 0) {
      return (
        <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
          <span className="font-sora dark:text-accent text-secondary text-2xl font-semibold">
            No Categories Found
          </span>
        </div>
      );
    }
    return (
      <div className="">
        <h2 className="font-sora dark:text-accent text-secondary mb-4 text-xl font-semibold">
          📌 Pinned
        </h2>
        {(pinned as Category[]).length > 0 ? (
          <div className="mb-10">
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
              {pinned?.map((category: Category) => (
                <div key={category.id} className="mb-6 break-inside-avoid">
                  <Card category={category} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex h-20 flex-col items-center justify-center gap-4 mb-10">
            <span className="font-inter dark:text-accent text-secondary text-2xl font-semibold">
              No Pinned Categories
            </span>
          </div>
        )}

        {/* 🔹 Unpinned Section */}
        <h2 className="font-sora dark:text-accent text-secondary mb-4 text-xl font-semibold">
          All Categories
        </h2>
        {(unpinned as Category[]).length > 0 ? (
          <div>
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
              {unpinned?.map((category: Category) => (
                <div key={category.id} className="mb-6 break-inside-avoid">
                  <Card category={category} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex h-20 mb-4 flex-col items-center justify-center gap-4">
            <span className="font-sora dark:text-accent text-secondary text-2xl font-semibold">
              No Other Categories
            </span>
          </div>
        )}
      </div>
    );
  }
};

export default Main;
