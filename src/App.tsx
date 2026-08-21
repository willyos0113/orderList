import { useState, type FC } from "react";
import BlogList from "./BlogList";

const App: FC = () => {
  const [blogs, setBlogs] = useState([
    { title: "我們生來就是自由的", author: "艾倫", id: 1 },
    { title: "這個世界是很殘酷的，但是也非常美麗", author: "米卡莎", id: 2 },
    { title: "什麼都無法捨棄的人，什麼都改變不了", author: "阿爾敏", id: 3 }
  ]);

  return (
    <div className="App">
      <h1>我的部落格</h1>
      <BlogList blogs={blogs} />
    </div>
  )
}

export default App
