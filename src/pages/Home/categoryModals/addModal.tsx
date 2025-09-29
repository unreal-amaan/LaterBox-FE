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
import Loader from "@/components/Loader";

import { useCategories } from "@/hooks/useCategories";
import type { NewCategory } from "@/types";



const AddCategoryModal = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<NewCategory>({
    defaultValues: {
      title: "",
      description: "",
      isPublic: true,
      isPinned: false,
    },
  });

    const { addCategory } = useCategories();
    const { mutate, isPending } = addCategory;
    const onSubmit = (data: NewCategory) => {
        const date = new Date();
        data.created_at = date.toISOString();
        mutate(data);
        reset();
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) reset();
      }}
    >
      <DialogTrigger asChild>
        <button className="dark:bg-light bg-secondary dark:text-secondary hover:bg-primary dark:hover:bg-accent text-light font-work-sans card-hover hover:card-hover theme-transition flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 font-semibold sm:px-4">
          <span className="text-2xl font-medium">+</span>
          <span className="text-lg">New Category</span>
        </button>
      </DialogTrigger>

      <DialogContent className="bg-accent dark:bg-secondary text-secondary dark:text-light sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-sora text-2xl font-bold">
            Add Category
          </DialogTitle>
          <DialogDescription className="font-inter text-sm">
            Provide details for the new category.
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
                {...register("title", { required: true })}
                maxLength={25}
                onInput={(e) => {
                  const input = e.currentTarget;
                  if (input.value.length >= 25) {
                    input.value = input.value.slice(0, 25);
                  }
                }}
                className="bg-light/50 dark:bg-secondary font-inter dark:border-primary rounded-md border p-2"
                placeholder="Category title"
              />
              <p className="font-work-sans text-sm text-gray-500">
                {`${watch("title")?.length || 0}/25 characters`}
              </p>
              {errors.title && (
                <span className="font-work-sans text-sm text-red-500">
                  Title is required
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-inter font-semibold">
                Description
                <span className="text-sm font-normal opacity-70">
                  (optional)
                </span>
              </label>
              <textarea
                {...register("description")}
                maxLength={150}
                onInput={(e) => {
                  const input = e.currentTarget;
                  if (input.value.length >= 150) {
                    input.value = input.value.slice(0, 150);
                  }
                }}
                className="bg-light/50 dark:bg-secondary font-inter dark:border-primary rounded-md border p-2"
                placeholder="Brief description of the category"
              />
              <p className="font-work-sans text-sm text-gray-500">
                {`${watch("description")?.length || 0}/150 characters`}
              </p>
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
              <Button
                type="submit"
                disabled={isPending}
                className="bg-secondary hover:bg-primary text-light border-primary dark:bg-light dark:text-secondary dark:hover:bg-accent cursor-pointer border-1 disabled:opacity-50"
              >
                {isPending ? "Adding..." : "Add"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryModal;
