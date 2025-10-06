import { lazy } from "react";
import { Link, useParams } from "react-router-dom";

import { useCategories } from "@/hooks/useCategories";

const ThemeToggle = lazy(() => import("@/components/ThemeToggle"));
const Loader = lazy(() => import("@/components/Loader"));
const Card = lazy(() => import("./Card"));

const Page = () => {
  const categoryId = useParams().id as string;
  const { useSharedCategoryLinks } = useCategories();
  const { data, isLoading, isError, error } =
    useSharedCategoryLinks(categoryId);

  if (isLoading) {
    return (
      <div className="bg-gradient-light dark:bg-gradient-dark flex h-screen w-screen items-center justify-center">
        <Loader fullScreen />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-gradient-light dark:bg-gradient-dark flex h-screen w-screen items-center justify-center">
        <p className="font-inter text-4xl font-semibold text-red-500/70">
          {(error as { message: string }).message}
        </p>
      </div>
    );
  }

  const userDetails = data?.user;
  const categoryDetails = {
    id: data?.id,
    title: data?.title,
    description: data?.description,
    isPublic: data?.isPublic,
    created_at: data?.created_at,
  };

  const links = data?.savedLinks ?? [];
  const linkCount = links.length;

  const pinned = links.filter((link) => link.isPinned);
  const unpinned = links.filter((link) => !link.isPinned);

  if (!userDetails || !categoryDetails) {
    return (
      <div className="bg-gradient-light dark:bg-gradient-dark flex h-screen w-screen items-center justify-center">
        <p className="text-muted-foreground">No user data found</p>
      </div>
    );
  }

  function formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div className="bg-gradient-light dark:bg-gradient-dark theme-transition min-h-screen w-full px-6 py-6 transition-colors sm:px-10 md:px-18">
      <div className="mb-10 flex items-center justify-end gap-4">
        <ThemeToggle />
        <Link
          to={"/"}
          className="text-accent bg-secondary hover:bg-primary dark:text-primary dark:bg-light dark:hover:bg-accent cursor-pointer rounded-lg px-6 py-2 text-lg font-semibold transition-colors"
        >
          Get Started
        </Link>
      </div>
      <div className="mx-auto space-y-8">
        <div className="border-accent/30 dark:border-accent/20 bg-light/60 dark:bg-secondary/50 text-secondary dark:text-accent rounded-2xl border p-6 shadow-md">
          <h1 className="font-sora mb-2 text-2xl font-semibold">Shared by</h1>
          <p className="font-work-sans text-lg">{userDetails.name}</p>
          <p className="font-work-sans text-sm opacity-70">
            {userDetails.email}
          </p>
        </div>

        <div className="border-accent/30 dark:border-accent/20 bg-light/60 dark:bg-secondary/50 text-secondary dark:text-accent rounded-2xl border p-6 shadow-md">
          <div className="text-secondary dark:text-accent flex items-center justify-start gap-6 text-4xl font-bold">
            <h1 className="font-sora">{categoryDetails.title}</h1>
            <h1 className="font-inter text-2xl">
              {linkCount !== 0 && linkCount}{" "}
              {linkCount !== 0 && (
                <span className="text-muted dark:text-light/90 text-xl">
                  Link(s)
                </span>
              )}
            </h1>
          </div>
          {categoryDetails.description && (
            <p className="font-work-sans mb-2 text-base opacity-80">
              {categoryDetails.description}
            </p>
          )}
          <p className="font-work-sans text-sm opacity-70">
            Created on{" "}
            <span className="font-medium">
              {formatDate(categoryDetails.created_at!)}
            </span>
          </p>
        </div>

        <div className="py-6">
          <h2 className="font-sora dark:text-accent text-secondary mb-4 text-xl font-semibold">
            📌 Pinned
          </h2>
          {pinned.length > 0 ? (
            <div className="mb-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pinned.map((link) => (
                  <div className="mb-6 break-inside-avoid">
                    <Card link={link ?? []} />
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
                  <div className="mb-6 break-inside-avoid">
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
      </div>
    </div>
  );
};

export default Page;
