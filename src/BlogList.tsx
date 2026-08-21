import { type FC } from "react";

interface BlogItem {
    title: string;
    author: string;
    id: number;
}
interface BlogListProps {
    blogs: BlogItem[];
}

const BlogList: FC<BlogListProps> = ({ blogs }) => {
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div key={blog.id} className="blog-item">
                    <h3>{blog.title}</h3>
                    <p>作者: {blog.author}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;