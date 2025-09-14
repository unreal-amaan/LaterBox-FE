import { useForm } from "react-hook-form";
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
import { TbEdit } from "react-icons/tb";
import Loader from "@/components/Loader";

import { useCategories } from "@/hooks/useCategories";
import type { Category, UpdateCategory } from "@/types";

const EditCategoryModal = ({ category }: { category: Category }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateCategory>({
    defaultValues: {
      id: category.id,
      title: category.title,
      description: category.description ?? "",
      isPublic: category.isPublic,
      isPinned: category.isPinned,
    },
  });

  const { updateCategory } = useCategories();
  const { mutate, isPending } = updateCategory;

  const onSubmit = (data: UpdateCategory) => {
    mutate(data);
    reset(data);
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (open) {
          reset({
            id: category.id,
            title: category.title,
            description: category.description ?? "",
            isPublic: category.isPublic,
            isPinned: category.isPinned,
          });
        } else {
          reset();
        }
      }}
    >
      <DialogTrigger asChild>
        <button type="button" title="Edit">
          <TbEdit className="icon-hover dark:icon-hover" />
        </button>
      </DialogTrigger>

      <DialogContent className="bg-accent dark:bg-secondary text-secondary dark:text-light sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-sora text-2xl font-bold">
            Edit Category
          </DialogTitle>
          <DialogDescription className="font-inter text-sm">
            Update the details of this category.
          </DialogDescription>
        </DialogHeader>

        {isPending ? (
          <div className="flex h-32 items-center justify-center">
            <Loader size="sm" />
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 flex flex-col gap-4"
          >
          <div className="flex flex-col">
            <label className="font-inter font-semibold">Title *</label>
            <input
              {...register("title", { required: true, maxLength: 25 })}
              className="bg-light/50 dark:bg-secondary font-inter dark:border-primary rounded-md border p-2"
              placeholder="Category title"
            />
            {errors.title && (
              <span className="font-work-sans text-sm text-red-500">
                Title is required (max 25 chars)
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="font-inter font-semibold">
              Description
              <span className="text-sm font-normal opacity-70">(optional)</span>
            </label>
            <textarea
              {...register("description", { maxLength: 150 })}
              className="bg-light/50 dark:bg-secondary font-inter dark:border-primary rounded-md border p-2"
              placeholder="Brief description of the category"
            />
            {errors.description && (
              <span className="font-work-sans text-sm text-red-500">
                Max 150 characters
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <label className="font-inter flex items-center gap-2 font-semibold">
              <input type="checkbox" {...register("isPublic")} />
              Public
            </label>
            <label className="font-inter flex items-center gap-2 font-semibold">
              <input type="checkbox" {...register("isPinned")} />
              Pin
            </label>
          </div>

          <DialogFooter className="font-inter text-md font-semibold">
            <DialogClose asChild>
              <Button
                variant="outline"
                onClick={() => reset()}
                className="bg-light/50 hover:accent/50 dark:border-primary dark:bg-secondary dark:hover:bg-primary/50 cursor-pointer border-2"
              >
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                onClick={handleSubmit(onSubmit)}
                disabled={isPending}
                className="bg-secondary hover:bg-primary text-light border-primary dark:bg-light dark:text-secondary dark:hover:bg-accent cursor-pointer border-1 disabled:opacity-50"
              >
                {isPending ? "Saving..." : "Save"}
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EditCategoryModal;
