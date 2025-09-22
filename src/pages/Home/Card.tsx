import { Link } from "react-router-dom";
import { lazy } from "react";

const EditCategoryModal = lazy(
  () => import("./categoryOperationModals/editModal"),
);
const ShareModal = lazy(() => import("./categoryOperationModals/shareModal"));
const DeleteCategoryModal = lazy(
  () => import("./categoryOperationModals/deleteModal"),
);
import type { Category } from "../../types";
const Card = ({ category }: { category: Category }) => {
  function formatDate(isoDate: string): string {
    const date = new Date(isoDate);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  const handleShareClick = (e: React.MouseEvent) => {
    if (!category.isPublic) {
      e.preventDefault();
    }
  };

  return (
    <div className="card-hover hover:card-hover border-l-secondary dark:border-l-accent/80 bg-light/50 dark:bg-secondary theme-transition text-secondary dark:text-accent flex h-full w-full flex-col rounded-lg border-l-5 p-6 shadow-lg">
      {/* Top section */}
      <div className="mb-4 flex items-center justify-between space-x-2">
        <h2 className="font-sora max-w-[70%] space-y-4 text-xl font-medium break-words">
          <span>{category.title}</span>
        </h2>
        <div className="flex flex-shrink-0 items-center space-x-2">
          <EditCategoryModal category={category} />
          <a
            onClick={handleShareClick}
            style={{ cursor: category.isPublic ? "pointer" : "not-allowed" }}
          >
            <ShareModal
              isPublic={category.isPublic}
              link={category.shareLink ?? ""}
            />
          </a>
          <DeleteCategoryModal category={category} />
        </div>
      </div>

      {/* Flexible middle (description) */}
      <div className="flex-grow">
        {category.description && (
          <p className="font-work-sans dark:text-accent text-sm break-words">
            {category.description}
          </p>
        )}
      </div>

      {/* Bottom fixed section */}
      <div className="mt-6">
        <div className="font-inter mb-4 flex items-center justify-between">
          <p className="flex items-center space-x-4">
            <span className="text-3xl font-bold">{category.count}</span>
            <span className="text-md dark:text-accent/80">items</span>
          </p>
          <p className="font-work-sans dark:text-accent/70 space-x-2">
            <span>created on :</span>
            <span>{formatDate(category.created_at)}</span>
          </p>
        </div>
        <Link
          to={`/category/${category.id}`}
          target="_blank"
          className="bg-accent dark:bg-muted text-secondary dark:text-accent hover:bg-secondary dark:hover:bg-accent/30 hover:text-accent block w-full cursor-pointer rounded-lg py-2 text-center font-semibold"
        >
          View Collection
        </Link>
      </div>
    </div>
  );
};

export default Card;
