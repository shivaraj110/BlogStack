import Appbar from "../components/Appbar";
import { useBlog } from "../hooks/useBlogs";
import ResponsiveBlogLoadingSkeleton from "../components/ResponsiveBlogLoadingSkeleton";
import { useParams } from "react-router-dom";
import Blog from "./Blog";

function FullBlog() {
  const { id } = useParams();

  const { loading, blog } = useBlog(Number(id));
  if (loading) {
    return (
      <div className="">
        <Appbar />
        <div className="flex flex-col">
          <ResponsiveBlogLoadingSkeleton />;
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="">
          <Appbar />
        </div>
        <div className="flex flex-col">
          <div className="mt-10">
            <Blog
              authorName={`${blog?.author.name || "Anonymous"}`}
              context={`${"Docker"}`}
              id={Number(id)}
              title={`${blog?.title}`}
              content={`${blog?.content}`}
              publishDate={"may 23, 2069"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FullBlog;
