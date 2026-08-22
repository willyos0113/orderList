import { useEffect, useState, type FC } from "react";
import "./App.css";
import BlogList from "./BlogList";

interface BlogItem {
  id: number;
  title: string;
  author: string;
}

const App: FC = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="App">
      <BlogList blogs={blogs} />
    </div>
  );
};

export default App;
