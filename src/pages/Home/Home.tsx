import { useCategories } from "@/hooks/useCategories";
import Main from "./Main";
import Top from "./Top";
import type { Category } from "@/types";
const Home = () => {

  const { getcategories } = useCategories();
  const { data, isLoading, isError } = getcategories;

  
  const options =
    data?.map((c: Category) => ({ label: c.title, value: c.id })) ?? [];
  
  return (
    <div >
      <div className="px-6 pt-6 sm:px-10 md:px-18">
        <Top options={options}/>
      </div>
      <section className="h-full w-full px-6 py-6 sm:px-10 md:px-18">
        <Main data={data as Category[]} isLoading={isLoading} isError={isError}/>
      </section>
    </div>
  );
};

export default Home;