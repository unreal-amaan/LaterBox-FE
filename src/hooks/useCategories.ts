import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import CategoryController from "../controllers/category.controller";
import type { Category, SharedCategoryLink } from "@/types";

export const useCategories = () => {
  const queryClient = useQueryClient();
  const isPublicPage = window.location.pathname.startsWith("/share/public/");

  const getcategories = useQuery({
    queryKey: ["categories"],
    queryFn: CategoryController.getCategories,
    staleTime: 1000 * 60 * 10,
    enabled: !isPublicPage,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
  });

  const addCategory = useMutation({
    mutationKey: ["addCategory"],
    mutationFn: CategoryController.addCategory,
    retry: 0,
    onSuccess: (newCategory) => {
      toast.success("Category added successfully", {
        style: {
          background: "#22c55e",
        },
      });

      queryClient.setQueryData<Category[]>(["categories"], (oldCategories) => {
        return oldCategories ? [newCategory, ...oldCategories] : [newCategory];
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

  const deleteCategory = useMutation({
    mutationKey: ["deleteCategory"],
    mutationFn: CategoryController.deleteCategory,
    onSuccess: ({ id }) => {
      toast.success("Category deleted successfully", {
        style: {
          background: "#22c55e",
        },
      });

      queryClient.setQueryData<Category[]>(["categories"], (oldCategories) => {
        return oldCategories ? oldCategories.filter((c) => c.id !== id) : [];
      });

      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: () => {
      toast.error("Failed to delete category", {
        style: {
          background: "#ef4444",
        },
      });
    },
  });

  const updateCategory = useMutation({
    mutationKey: ["updateCategory"],
    mutationFn: CategoryController.updateCategory,
    onSuccess: (updatedCategory) => {
      toast.success("Category updated successfully", {
        style: {
          background: "#22c55e",
        },
      });

      queryClient.setQueryData<Category[]>(["categories"], (oldCategories) => {
        return oldCategories?.map((c) => {
          if (c.id === updatedCategory.id) {
            return updatedCategory;
          }
          return c;
        });
      });

      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: () => {
      toast.error("Failed to update category", {
        style: {
          background: "#ef4444",
        },
      });
    },
  });

  const useSharedCategoryLinks = (categoryId?: string) => {
    return useQuery<SharedCategoryLink, { message: string }>({
      queryKey: ["sharedCategoryLinks", categoryId],
      queryFn: async () => {
        if (!categoryId) throw new Error("Category ID is missing");
        try {
          return await CategoryController.getSharedCategoryLinks(categoryId);
        } catch (error: any) {
          throw error.response?.data || { message: "Something went wrong" };
        }
      },
      enabled: !!categoryId,
      staleTime: 1000 * 60 * 10,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
    });
  };

  return {
    getcategories,
    addCategory,
    deleteCategory,
    updateCategory,
    useSharedCategoryLinks,
  };
};
