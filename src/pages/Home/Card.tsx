import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PiShareFatLight } from "react-icons/pi";


import type { Category } from "../../types";
const Card = ({ category }: { category: Category }) => {

  function formatDate(isoDate: string): string {
    const date = new Date(isoDate);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  return (
    <div className="card-hover hover:card-hover rounded-lg border-2 border-zinc-800 px-6 py-2 shadow-xl">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="mb-2 text-xl font-bold">{category.title}</h2>
        <div className="flex space-x-2 text-lg text-gray-600">
          <TbEdit />
          <MdOutlineDeleteOutline />
          <PiShareFatLight />
        </div>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <p className="space-x-1">
          <span className="text-3xl font-bold">{category.count}</span>
          <span className="text-md">items</span>
        </p>
        <p className="space-x-2">
          <span className="">created on :</span>
          <span>{formatDate(category.created_at)}</span>
        </p>
      </div>
      <div>
        <Link
          to={`/category/${category.id}`}
          className="w-fit rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          View Collection
        </Link>
      </div>
    </div>
  );
};

export default Card;
