const Card = ({ link }: { link: any }) => {
  function formatDate(isoDate: string): string {
    const date = new Date(isoDate);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="card-hover hover:card-hover border-l-secondary dark:border-l-accent/80 bg-light/50 dark:bg-secondary theme-transition text-secondary dark:text-accent flex h-full w-full flex-col rounded-lg border-l-5 p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between space-x-2">
        <h2 className="font-sora max-w-[70%] space-y-4 text-xl font-medium break-words">
          <span>{link.title}</span>
        </h2>
      </div>

      <div className="flex-grow">
        {link.note && (
          <p className="font-work-sans dark:text-accent text-sm break-words">
            {link.note}
          </p>
        )}
      </div>

      <div className="mt-2">
        <p className="font-work-sans dark:text-accent/70 text-md">
          <span>created on :</span> <span>{formatDate(link.created_at)}</span>
        </p>
      </div>

      {link.tags && link.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {link.tags.map((tag: string) => (
            <span
              key={tag}
              className="bg-accent/20 dark:bg-accent/30 text-secondary dark:text-accent rounded-md px-2 py-1 text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-6">
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
