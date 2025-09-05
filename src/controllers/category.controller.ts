import { api } from "../api/api";
import { type Category } from "../types";
class CategoryController {
  static async getCategories() {
    const response = await api.get<Category[]>("/category/get");
    return response.data;
  }

  static async addCategory() {
    const response = await api.post("/category/add");
    return response.data;
  }

  static async deleteCategory(categoryId: any) {
    const response = await api.delete(`/category/delete/${categoryId}`);
    return response.data;
  }

  static async updateCategory(categoryId: any, categoryData: any) {
    const response = await api.put(
      `/category/update/${categoryId}`,
      categoryData,
    );
    return response.data;
  }
}

export default CategoryController;
