import { api } from "../api/api";
import { type Link, type NewCategory, type UpdateCategory } from "../types";
class LinkController {
  static async getLinks(categoryId: string): Promise<Link[]> {
    const response = await api.get<Link[]>(`/link/get/${categoryId}`);
    return response.data;
  }

  static async addLink(data: NewCategory): Promise<Link> {
    const response = await api.post<Link>("/link/add", data);
    return response.data;
  }

  static async deleteLink(categoryId: string): Promise<Link> {
    const response = await api.delete<Link>(
      `/link/delete/${categoryId}`,
    );
    return response.data;
  }

  static async updateLink({
    id,
    ...categoryData
  }: UpdateCategory): Promise<Link> {
    const response = await api.put<Link>(
      `/link/update/${id}`,
      categoryData,
    );
    return response.data;
  }
}

export default LinkController;