import { lazy } from "react";

const AutoComplete = lazy(() => import("../../components/AutoComplete"));
const AddCategoryModal = lazy(() => import("./categoryModals/addModal"));

interface TopProps {
  options: { label: string; value: string }[];
}

const Top = ({ options }: TopProps) => {
  return (
    <div className="flex items-center justify-between">
      <AutoComplete
        options={options}
        onChange={(value) => console.log(value)}
        type="category"
      />
      <AddCategoryModal />
    </div>
  );
};

export default Top;
