import { type FC } from "react";
import useFetch from "./useFetch";

const BlogList: FC = () => {
  const { blogs, loading, error } = useFetch("http://localhost:8080/blogs");

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
    </div>
  );
};

export default BlogList;
