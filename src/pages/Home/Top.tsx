import AutoComplete from "../../components/AutoComplete";
import { useCategories } from "../../hooks/useCategories";

const Top = () => {
  const { getcategories } = useCategories();
  const { data } = getcategories;
  const options = data ? data.map((category) => ({ label: category.title, value: category.id })) : [];
  return (
    <div className="flex items-center justify-between">
      <AutoComplete options={options} onChange={(value) => { console.log(value) }}/>
      <button className="dark:bg-light bg-secondary dark:text-secondary hover:bg-primary dark:hover:bg-accent text-light font-work-sans card-hover hover:card-hover theme-transition flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 font-semibold sm:px-4">
        <span className="text-2xl font-medium">+</span>
        <span className="text-lg">New Category</span>
      </button>
    </div>
  );
};

export default Top;
