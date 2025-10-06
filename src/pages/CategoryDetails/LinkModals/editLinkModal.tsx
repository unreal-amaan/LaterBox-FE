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
import type { Link, UpdateLink } from "@/types";
import { useLinks } from "@/hooks/useLinks";

const EditLinkModal = ({ link }: { link: Link }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<UpdateLink>({
    defaultValues: {
      title: link.title,
      note: link.note ?? "",
      tags: link.tags,
      isPinned: link.isPinned,
      link: link.link,
    },
  });

  const { updateLink } = useLinks(link.categoryId);
  const { mutate, isPending } = updateLink;

  const onSubmit = (data: UpdateLink) => {
    const tagsArray =
      typeof data.tags === "string" ? parseTags(data.tags) : data.tags;
    data.tags = tagsArray;
    console.table(data);
    mutate({ ...data, id: link.id });
    reset(data);
  };

  const parseTags = (tags: string): string[] => {
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (open) {
          reset({
            title: link.title,
            note: link.note ?? "",
            tags: link.tags,
            isPinned: link.isPinned,
            link: link.link,
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
            Edit Link
          </DialogTitle>
          <DialogDescription className="font-inter text-sm">
            Update the details of this link.
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
                maxLength={50}
                className="bg-light/50 dark:bg-secondary font-inter dark:border-primary rounded-md border p-2"
                placeholder="Link title"
              />
              <p className="font-work-sans text-sm text-gray-500">
                {`${watch("title")?.length || 0}/50 characters`}
              </p>
              {errors.title && (
                <span className="font-work-sans text-sm text-red-500">
                  Title is required
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-inter font-semibold">URL *</label>
              <input
                {...register("link", { required: true })}
                className="bg-light/50 dark:bg-secondary font-inter dark:border-primary rounded-md border p-2"
                placeholder="https://example.com"
              />
              {errors.link && (
                <span className="font-work-sans text-sm text-red-500">
                  Valid URL is required
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-inter font-semibold">
                Note{" "}
                <span className="text-sm font-normal opacity-70">
                  (optional)
                </span>
              </label>
              <textarea
                {...register("note")}
                maxLength={150}
                className="bg-light/50 dark:bg-secondary font-inter dark:border-primary rounded-md border p-2"
                placeholder="Brief note"
              />
              <p className="font-work-sans text-sm text-gray-500">
                {`${watch("note")?.length || 0}/150 characters`}
              </p>
            </div>

            <div className="flex flex-col">
              <label className="font-inter font-semibold">Tags *</label>
              <textarea
                {...register("tags")}
                maxLength={150}
                className="bg-light/50 dark:bg-secondary font-inter dark:border-primary rounded-md border p-2"
                placeholder="e.g. tech, productivity, finance"
              />
              <p className="font-work-sans text-sm text-gray-500">
                Separate multiple tags with commas
              </p>
            </div>
            <div className="flex items-center gap-4">
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
                onClick={handleSubmit(onSubmit)}
                disabled={isPending}
                className="bg-secondary hover:bg-primary text-light border-primary dark:bg-light dark:text-secondary dark:hover:bg-accent cursor-pointer border-1 disabled:opacity-50"
              >
                {isPending ? "Saving..." : "Save"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EditLinkModal;
