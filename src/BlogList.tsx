import { useState, type FC } from "react";
import useFetch from "./useFetch";

const BlogList: FC = () => {
  const { blogs, loading, error } = useFetch("http://localhost:8080/blogs");

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBlog = { title, author };
  };

  return (
    <div className="blog-list">
      {loading && <div>資料載入中...</div>}
      {error && <div>錯誤: {error}</div>}
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="標題"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="作者"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </form>
    </div>
  );
};

export default BlogList;
