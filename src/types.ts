export type Category = {
  id: string;
  title: string;
  created_at: string;
  isPinned: boolean;
  isPublic: boolean;
  shareLink: string | null;
  count: number;
};
