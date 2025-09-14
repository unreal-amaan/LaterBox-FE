import { api } from "../api/api";
import { type Category, type NewCategory, type UpdateCategory } from "../types";
class CategoryController {
  static async getCategories() {
    const response = await api.get<Category[]>("/category/get");
    return response.data;
  }

  static async addCategory(data:NewCategory): Promise<Category> {
    const response = await api.post<Category>("/category/add", data);
    return response.data;
  }

  static async deleteCategory(categoryId: string): Promise<Category> {
    const response = await api.delete<Category>(`/category/delete/${categoryId}`);
    return response.data;
  }

  static async updateCategory({id , ...categoryData} :UpdateCategory): Promise<Category> {
    const response = await api.put<Category>(
      `/category/update/${id}`,
      categoryData,
    );
    return response.data;
  }
}

export default CategoryController;
