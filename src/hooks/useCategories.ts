import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import CategoryController from "../controllers/category.controller";

export const useCategories = () => {
    const queryClient = useQueryClient();

    const getcategories = useQuery({
        queryKey: ['categories'],
        queryFn: CategoryController.getCategories,
        staleTime: 1000 * 60 * 10,
        refetchOnMount: false,
        refetchOnWindowFocus: true,
        retry:0
    })

    const addCategory = useMutation({
        mutationFn: CategoryController.addCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        }
    })

    const deleteCategory = useMutation({
        mutationFn: CategoryController.deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
        }
    })

    const updateCategory = useMutation({
      mutationFn: () => CategoryController.updateCategory("vbhjk", "tcgvhjb"),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["categories"] });
      },
    });

    return {
        getcategories,
        addCategory,
        deleteCategory,
        updateCategory
    }
}