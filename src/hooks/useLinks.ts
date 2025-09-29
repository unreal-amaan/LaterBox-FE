import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import LinkController from "../controllers/link.controller";
import type { Link } from "@/types";

export const useLinks = (categoryId: string) => {
  const queryClient = useQueryClient();

  const getLinks = useQuery({
    queryKey: ["links", categoryId],
    queryFn: () => LinkController.getLinks(categoryId as string),
    staleTime: 1000 * 60 * 10,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !!categoryId,
    retry: 0,
  });

  const addLink = useMutation({
    mutationKey: ["addLink"],
    mutationFn: LinkController.addLink,
    retry: 0,
    onSuccess: (newLink) => {
      toast.success("Category added successfully", {
        style: {
          background: "#22c55e",
        },
      });

      queryClient.setQueryData<Link[]>(["categories"], (oldCategories) => {
        return oldCategories ? [newLink, ...oldCategories] : [newLink];
      });

      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: () => {
      toast.error("Failed to add category", {
        style: {
          background: "#ef4444",
        },
      });
    },
  });

//   const deleteCategory = useMutation({
//     mutationKey: ["deleteCategory"],
//     mutationFn: CategoryController.deleteCategory,
//     onSuccess: ({ id }) => {
//       toast.success("Category deleted successfully", {
//         style: {
//           background: "#22c55e",
//         },
//       });

//       queryClient.setQueryData<Category[]>(["categories"], (oldCategories) => {
//         return oldCategories ? oldCategories.filter((c) => c.id !== id) : [];
//       });

//       queryClient.invalidateQueries({ queryKey: ["categories"] });
//     },
//     onError: () => {
//       toast.error("Failed to delete category", {
//         style: {
//           background: "#ef4444",
//         },
//       });
//     },
//   });

//   const updateCategory = useMutation({
//     mutationKey: ["updateCategory"],
//     mutationFn: CategoryController.updateCategory,
//     onSuccess: (updatedCategory) => {
//       toast.success("Category updated successfully", {
//         style: {
//           background: "#22c55e",
//         },
//       });

//       queryClient.setQueryData<Category[]>(["categories"], (oldCategories) => {
//         return oldCategories?.map((c) => {
//           if (c.id === updatedCategory.id) {
//             return updatedCategory;
//           }
//           return c;
//         });
//       });

//       queryClient.invalidateQueries({ queryKey: ["categories"] });
//     },
//     onError: () => {
//       toast.error("Failed to update category", {
//         style: {
//           background: "#ef4444",
//         },
//       });
//     },
//   });

  return {
    getLinks,
    // addCategory,
    // deleteCategory,
    // updateCategory,
  };
};
