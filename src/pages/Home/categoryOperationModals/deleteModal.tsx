import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useCategories } from "@/hooks/useCategories";
import type { Category } from "@/types";

const DeleteCategoryModal = ({ category }: { category: Category }) => {
  const { deleteCategory } = useCategories();
  const { mutate } = deleteCategory;

  const handleDelete = () => {
    mutate(category.id);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          title="Delete"
        >
          <MdOutlineDeleteOutline className="icon-hover dark:icon-hover" />
        </button>
      </DialogTrigger>

      <DialogContent className="bg-accent dark:bg-secondary text-secondary dark:text-light sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-sora text-2xl font-bold">
            Delete Category
          </DialogTitle>
          <DialogDescription className="font-inter text-sm">
            Are you sure you want to delete{" "}
            <span className="text-lg font-bold">"{category.title}"</span>?{" "}
            <br />
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="font-inter text-md font-semibold">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="bg-light/50 hover:bg-accent/50 dark:border-primary dark:bg-secondary dark:hover:bg-primary/50 cursor-pointer border-2"
            >
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onClick={handleDelete}
              className="text-light dark:text-light cursor-pointer border-1 border-red-700 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCategoryModal;
