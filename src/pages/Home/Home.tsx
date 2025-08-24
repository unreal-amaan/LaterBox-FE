import { api } from "../../api/api";
import Nav from "./Nav";
import { useState } from "react";
import Top from "./Top";
const Home = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const res: any = await api.get("/category/get");
    console.log(res);
    setCategories(res.data);
  };
  return (
    <div>
      <Nav />
      <Top/>
      <button
        className="bg-primary dark:bg-light text-accent dark:text-secondary border-1 border-red-600 text-lg"
        onClick={fetchCategories}
      >
        Fetch
      </button>
      <div>{categories.map((category: any) => category.title)}</div>
    </div>
  );
};

export default Home;
