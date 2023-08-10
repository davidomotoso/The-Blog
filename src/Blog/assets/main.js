import Home from "../pages/Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Newblog from "../pages/Newblog";
import BlogContent from "../pages/blogContent";
import EditBlog from "../pages/editPage";

const Main = () => {
  return (
    <Router>
      <main className="xl:mx-auto sm:px-8 mobile:px-4 xl:w-[70em] h-auto">
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/newblog" Component={Newblog}></Route>
          <Route exact path="/blog/:id" Component={BlogContent}></Route>
          <Route exact path="/editBlog/:id" Component={EditBlog}></Route>
        </Routes>
      </main>
    </Router>
  );
};

export default Main;
