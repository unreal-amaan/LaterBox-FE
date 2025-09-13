import { api } from "../api/api";
import { type Category, type NewCategory, type UpdateCategory } from "../types";
class CategoryController {
  static async getCategories() {
    const response = await api.get<Category[]>("/category/get");
    return response.data;
  }

  static async addCategory(data:NewCategory) {
    const response = await api.post("/category/add", data);
    return response.data;
  }

  static async deleteCategory(categoryId: string) {
    const response = await api.delete(`/category/delete/${categoryId}`);
    return response.data;
  }

  static async updateCategory({id , ...categoryData} :UpdateCategory) {
    const response = await api.put(
      `/category/update/${id}`,
      categoryData,
    );
    return response.data;
  }
}

export default CategoryController;
