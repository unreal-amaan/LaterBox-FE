import { useCategories } from "../../hooks/useCategories"
const Main = () => {
  const { getcategories, addCategory, deleteCategory, updateCategory } = useCategories();
  const { data, isLoading, isError } = getcategories;

  if(isLoading) {
    return <div>Loading...</div>
  }
  if(isError) {
    return <div>Error loading categories</div>
  }else  return (
    <div>
      {data?.map((category) => (
        <div key={category.id}>
          <h2>{category.title}</h2>
          <h3>{category.created_at}</h3>
          <p>Count: {category.count}</p>
          <p>Pinned: {category.isPinned ? "Yes" : "No"}</p>
          <p>Public: {category.isPublic ? "Yes" : "No"}</p>
          <p>Share Link: {category.shareLink ? category.shareLink : "N/A"}</p>
        </div>
      ))}
    </div>
  )
}

export default Main