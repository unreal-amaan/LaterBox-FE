import { useCategories } from "../../hooks/useCategories"
import type { Category } from "../../types";
import Card from "./Card";
const Main = () => {
  const { getcategories, addCategory, deleteCategory, updateCategory } = useCategories();
  const { data, isLoading, isError } = getcategories;

  if(isLoading) {
    return <div>Loading...</div>
  }
  if(isError) {
    return <div>Error loading categories</div>
  }else  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        data?.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">No Categories Found</h2>
            <p className="text-gray-600">You haven't added any categories yet.</p>
          </div>
        ) : (
            data?.map((category:Category) => {
              return (
                <Card category={category} key={category.id}/>
              )
            })
        )
      }
    </div>
  )
}

export default Main