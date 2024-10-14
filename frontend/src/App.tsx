import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import AllBlogs from "./pages/AllBlogs";
import FullBlog from "./pages/FullBlog";
import { WriteBlog } from "./pages/WriteBlog";
import Bookmarks from "./pages/Bookmarks";
import ProtectRoutes from "./util/ProtectedRoutes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectRoutes />}>
            <Route path="/blog/:id" element={<FullBlog />} />
            <Route path="/blogs" element={<AllBlogs />} />
            <Route path="/WriteBlog" element={<WriteBlog />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
