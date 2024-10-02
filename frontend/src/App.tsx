import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import Landing from "./pages/Landing";
import AllBlogs from "./pages/AllBlogs";
import FullBlog from "./pages/FullBlog";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="blog/:id" element={<FullBlog />} />
          <Route path="blogs" element={<AllBlogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
