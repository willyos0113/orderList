import { type FC } from "react";
import type { BlogItem } from "./types/common";

interface BlogListProps {
  blogs: BlogItem[];
}

const BlogList: FC<BlogListProps> = ({ blogs }) => {
  return (
    <div>
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
