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
    mutationKey: ["addLink", categoryId],
    mutationFn: LinkController.addLink,
    retry: 0,
    onSuccess: (newLink) => {
      toast.success("Link added successfully", {
        style: {
          background: "#22c55e",
        },
      });

      queryClient.setQueryData<Link[]>(["links"], (oldLinks) => {
        return oldLinks ? [newLink, ...oldLinks] : [newLink];
      });

      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
    onError: () => {
      toast.error("Failed to add Link", {
        style: {
          background: "#ef4444",
        },
      });
    },
  });

  const deleteLink = useMutation({
    mutationKey: ["deleteLink", categoryId],
    mutationFn: LinkController.deleteLink,
    onSuccess: ({ id }) => {
      toast.success("Link deleted successfully", {
        style: {
          background: "#22c55e",
        },
      });

      queryClient.setQueryData<Link[]>(["links", categoryId], (oldLinks) =>
        oldLinks ? oldLinks.filter((link) => link.id !== id) : [],
      );

      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
    onError: () => {
      toast.error("Failed to delete Link", {
        style: {
          background: "#ef4444",
        },
      });
    },
  });

  const updateLink = useMutation({
    mutationKey: ["updateLink", categoryId],
    mutationFn: LinkController.updateLink,
    onSuccess: (updatedLink) => {
      toast.success("Link updated successfully", {
        style: { background: "#22c55e" },
      });

      queryClient.setQueryData<Link[]>(["links"], (oldLinks) => {
        return oldLinks?.map((link) =>
          link.id === updatedLink.id ? updatedLink : link,
        );
      });

      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.error ?? "Failed to update link", {
        style: { background: "#ef4444" },
      });
    },
  });

  return {
    getLinks,
    addLink,
    deleteLink,
    updateLink,
  };
};
