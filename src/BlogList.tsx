import { type FC } from "react";

interface BlogItem {
  title: string;
  author: string;
  id: number;
}
interface BlogListProps {
  blogs: BlogItem[];
  onDelete: (id: number) => void;
}

const BlogList: FC<BlogListProps> = ({ blogs, onDelete }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item">
          <h3>{blog.title}</h3>
          <p>作者: {blog.author}</p>
          <button onClick={() => onDelete(blog.id)}>刪除</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
