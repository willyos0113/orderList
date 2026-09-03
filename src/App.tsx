import { type FC } from "react";
import "./App.css";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const App: FC = () => {
  const { blogs, loading, error } = useFetch("http://localhost:8080/blogs");

  return (
    <div className="App">
      {loading && <div>資料載入中...</div>}
      {error && <div>錯誤: {error}</div>}
      <BlogList blogs={blogs} />
    </div>
  );
};

export default App;
