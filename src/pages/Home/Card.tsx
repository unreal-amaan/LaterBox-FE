import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { TiPin } from "react-icons/ti";

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
    <div className="card-hover hover:card-hover border-l-secondary dark:border-l-accent/80 bg-light/50 dark:bg-secondary theme-transition text-secondary dark:text-accent rounded-lg border-l-5 px-6 py-8 shadow-lg">
      <div className="mb-4 flex items-center justify-between space-x-2">
        <h2 className="font-sora max-w-[70%] space-y-4 text-xl font-medium break-words">
          {category.isPinned && <TiPin className="" />}
          <span>{category.title}</span>
        </h2>
        <div className="flex flex-shrink-0 items-center space-x-2">
          <TbEdit className="icon-hover dark:icon-hover" title="Edit" />
          <a
            onClick={handleShareClick}
            style={{ cursor: category.isPublic ? "pointer" : "not-allowed" }}
          >
            <RiShareForwardLine
              className={`${!category.isPublic ? "text-gray-400" : "icon-hover dark:icon-hover"}`}
              title={
                category.isPublic ? "Share" : "Make category public to share"
              }
            />
          </a>
          <MdOutlineDeleteOutline
            className="icon-hover dark:icon-hover"
            title="Delete"
          />
        </div>
      </div>
      {category.description && (
        <p className="font-work-sans dark:text-accent mt-6 min-h-[48px] text-sm break-words">
          {category.description}
        </p>
      )}
      <div className="font-inter mb-6 flex items-center justify-between">
        <p className="flex items-center space-x-4">
          <span className="text-3xl font-bold">{category.count}</span>
          <span className="text-md dark:text-accent/80">items</span>
        </p>
        <p className="font-work-sans dark:text-accent/70 space-x-2">
          <span className="">created on :</span>
          <span>{formatDate(category.created_at)}</span>
        </p>
      </div>
      <div>
        <Link
          to={`/category/${category.id}`}
          className="bg-accent dark:bg-muted text-secondary dark:text-accent hover:bg-secondary dark:hover:bg-accent/30 hover:text-accent block w-full cursor-pointer rounded-lg py-2 text-center font-semibold"
        >
          View Collection
        </Link>
      </div>
    </div>
  );
};

export default Card;
