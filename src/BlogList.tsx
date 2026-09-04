import { useState, type FC } from "react";
import useFetch from "./useFetch";

const BlogList: FC = () => {
  const { blogs, loading, error } = useFetch("http://localhost:8080/blogs");

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBlog = { title, author };
    fetch("http://localhost:8080/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    }).then(() => {
      console.log("新增 blog: ", newBlog);
    });
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
        <label htmlFor="title">標題: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="author">作者: </label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">確認</button>
      </form>
    </div>
  );
};

export default BlogList;
