import { useEffect, useState, type FC } from "react";
import "./App.css";
import BlogList from "./BlogList";
import type { BlogItem } from "./types/common";

const App: FC = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data: BlogItem[]) => {
        setTimeout(() => {
          setBlogs(data);
          setLoading(false);
        }, 1000);
      })
      .catch((err: unknown) => {
        setLoading(false);
        setError(err instanceof Error ? err.message : String(err));
      });
  }, []);

  return (
    <div className="App">
      {loading && <div>資料載入中...</div>}
      {error && <div>錯誤: {error}</div>}
      <BlogList blogs={blogs} />
    </div>
  );
};

export default App;
