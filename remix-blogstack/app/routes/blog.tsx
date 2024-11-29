import { Outlet } from "@remix-run/react";
import Appbar from "../components/Appbar";

const Blog = () => {
  return (
    <div>
      <Appbar />
      <Outlet />;
    </div>
  );
};
export default Blog;
