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
  categoryId: string;
  category?: Pick<Category, "id" | "title" | "description"> | null;
};
export type UpdateLink = {
  id: string;
  title?: string;
  link?: string;
  note?: string | null;
  isPinned?: boolean;
  tags?: string[];
};

export type SharedCategoryLink = {
  id: string;
  title: string;
  created_at: string;
  description: string | null;
  isPublic: boolean;
  user: {
    name: string;
    email: string;
  };
  savedLinks: {
    title: string;
    link: string;
    note: string | null;
    created_at: string;
    isPinned: boolean;
    tags: string[];
  }[];
};
