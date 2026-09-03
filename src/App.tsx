import { type FC } from "react";
import "./App.css";
import BlogList from "./BlogList";
import About from "./About";
import Navbar from "./Navbar";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <Routers>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Routers>
  );
};

export default App;
