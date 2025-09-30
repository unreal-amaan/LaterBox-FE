import type { Link } from "@/types";
import EditLinkModal from "./LinkModals/editLinkModal";
import DeleteLinkModal from "./LinkModals/deleteLinkModal";

const Card = ({ link }: { link: Link }) => {
  function formatDate(isoDate: string): string {
    const date = new Date(isoDate);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="card-hover hover:card-hover border-l-secondary dark:border-l-accent/80 bg-light/50 dark:bg-secondary theme-transition text-secondary dark:text-accent flex h-full w-full flex-col rounded-lg border-l-5 p-6 shadow-lg">
      {/* Top section */}
      <div className="mb-4 flex items-center justify-between space-x-2">
        <h2 className="font-sora max-w-[70%] space-y-4 text-xl font-medium break-words">
          <span>{link.title}</span>
        </h2>
        <div className="flex flex-shrink-0 items-center space-x-2">
          <EditLinkModal link={link} />
          <DeleteLinkModal link={link} />
        </div>
      </div>

      <div className="flex-grow">
        {link.note && (
          <p className="font-work-sans dark:text-accent text-sm break-words">
            {link.note}
          </p>
        )}
      </div>

      <div className="mt-6">
        <div className="font-inter mb-4 flex items-center justify-end">
          <p className="font-work-sans dark:text-accent/70 space-x-2">
            <span>created on :</span>
            <span>{formatDate(link.created_at)}</span>
          </p>
        </div>
        <a
          href={link.link}
          target="_blank"
          className="bg-accent dark:bg-muted text-secondary dark:text-accent hover:bg-secondary dark:hover:bg-accent/30 hover:text-accent block w-full cursor-pointer rounded-lg py-2 text-center font-semibold"
        >
          Visit Link
        </a>
      </div>
    </div>
  );
};

export default Card;
