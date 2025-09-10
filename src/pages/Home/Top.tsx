import AutoComplete from "../../components/AutoComplete";
import { useCategories } from "../../hooks/useCategories";
import AddCategoryModal from "./addCategory/addCategoryModal";

const Top = () => {
  const { getcategories } = useCategories();
  const { data } = getcategories;
  const options = data ? data.map((category) => ({ label: category.title, value: category.id })) : [];
  return (
    <div className="flex items-center justify-between">
      <AutoComplete options={options} onChange={(value) => { console.log(value) }}/>
      <AddCategoryModal/>
    </div>
  );
};

export default Top;
