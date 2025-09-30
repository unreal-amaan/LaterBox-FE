import { lazy } from "react";

const AddLinkModal = lazy(() => import("./LinkModals/addLinkModal"));
const AutoComplete = lazy(() => import("../../components/AutoComplete"));

interface TopProps {
  options: { label: string; value: string }[];
  categoryId: string;
}

const Top = ({ options, categoryId }: TopProps) => {
  return (
    <div className="flex items-center justify-between">
      <AutoComplete
        options={options}
        onChange={(value) => console.log(value)}
        type="link"
      />
      <AddLinkModal categoryId={categoryId} />
    </div>
  );
};

export default Top;
