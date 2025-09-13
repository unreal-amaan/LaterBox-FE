import { lazy } from "react";
import AutoComplete from "../../components/AutoComplete";

const AddCategoryModal = lazy(
  () => import("./categoryOperationModals/addModal"),
);

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
