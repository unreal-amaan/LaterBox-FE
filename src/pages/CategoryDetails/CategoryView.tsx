import { useLinks } from "@/hooks/useLinks";
import Top from "./Top";
import { useParams } from "react-router-dom";
import type { Link } from "@/types";
import Main from "./Main";

const CategoryView = () => {
  const categoryId = useParams().id as string;
  const { getLinks } = useLinks(categoryId);
  const { data , isLoading, isError } = getLinks;

  const options = data?.map((link) => ({ label: link.title, value: link.id })) ?? [];
  return (
    <div>
      <div className="px-6 pt-6 sm:px-10 md:px-18">
        <Top options={options} />
      </div>
      <section className="h-full w-full px-6 py-6 sm:px-10 md:px-18">
        <Main
          data={data as Link[]}
          isLoading={isLoading}
          isError={isError}
        />
      </section>
    </div>
  );
};

export default CategoryView;
