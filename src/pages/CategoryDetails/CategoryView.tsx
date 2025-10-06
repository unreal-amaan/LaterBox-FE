import { lazy } from "react";
import { useParams } from "react-router-dom";

import { useLinks } from "@/hooks/useLinks";
import type { Link } from "@/types";

const Top = lazy(() => import("./Top"));
const Main = lazy(() => import("./Main"));
const Header = lazy(() => import("./Header"));

const CategoryView = () => {
  const categoryId = useParams().id as string;
  const { getLinks } = useLinks(categoryId);
  const { data, isLoading, isError } = getLinks;

  const options =
    data?.map((link) => ({ label: link.title, value: link.id })) ?? [];
  return (
    <div>
      <div className="px-6 pt-6 sm:px-10 md:px-18">
        <Top options={options} categoryId={categoryId} />
      </div>
      <div className="px-6 pt-6 sm:px-10 md:px-18">
        <Header
          category={data?.[0]?.category?.title ?? ""}
          count={data?.length as number}
          description={data?.[0]?.category?.description as string}
        />
      </div>
      <section className="h-full w-full px-6 py-6 sm:px-10 md:px-18">
        <Main data={data as Link[]} isLoading={isLoading} isError={isError} />
      </section>
    </div>
  );
};

export default CategoryView;
