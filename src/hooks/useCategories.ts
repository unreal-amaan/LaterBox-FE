import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import CategoryController from "../controllers/category.controller";

export const useCategories = () => {
  const queryClient = useQueryClient();

  const getcategories = useQuery({
    queryKey: ["categories"],
    queryFn: CategoryController.getCategories,
    staleTime: 1000 * 60 * 10,
    refetchOnMount: false,
    refetchOnWindowFocus: true,
    retry: 0,
  });

  const addCategory = useMutation({
    mutationKey: ["addCategory"],
    mutationFn: CategoryController.addCategory,
    retry: 0,
    onSuccess: () => {
      toast.success("Category added successfully", {
        style: {
          background: "#22c55e",
        },
      });
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: () => {
      toast.error("Failed to add category", {
        style: {
          background: "#ef4444",
        },
      });
    }
  });

  const deleteCategory = useMutation({
    mutationKey: ["deleteCategory"],
    mutationFn: CategoryController.deleteCategory,
    onSuccess: () => {
      toast.success("Category deleted successfully", {
        style: {
          background: "#22c55e",
        },
      });
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: () => {
      toast.error("Failed to delete category", {
        style: {
          background: "#ef4444",
        },
      });
    }
  });

  const updateCategory = useMutation({
    mutationKey: ["updateCategory"],
    mutationFn: CategoryController.updateCategory,
    onSuccess: () => {
      toast.success("Category updated successfully", {
        style: {
          background: "#22c55e",
        },
      });
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: () => {
      toast.error("Failed to update category", {
        style: {
          background: "#ef4444",
        },
      });
    }
  });

  return {
    getcategories,
    addCategory,
    deleteCategory,
    updateCategory,
  };
};
