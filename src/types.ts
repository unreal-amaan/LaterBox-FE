import type { Url } from "url";

export type Category = {
  id: string;
  title: string;
  description: string | null;
  created_at: string;
  isPinned: boolean;
  isPublic: boolean;
  shareLink: string | null;
  count: number;
};

export type NewCategory = {
  title: string;
  description?: string | null;
  created_at: string;
  isPinned?: boolean;
  isPublic?: boolean;
};

export type UpdateCategory = {
  id: string;
  title?: string;
  description?: string;
  isPinned?: boolean;
  isPublic?: boolean;
};

export type Link = {
  id: string;
  title: string;
  link: string;
  note: string | null;
  isPinned: boolean;
  tags: string[];
  created_at: string;
};
