import Blogs from "../components/Blogs";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks/useBlogs";
import ResponsiveBlogLoadingSkeleton from "../components/ResponsiveBlogLoadingSkeleton";

function AllBlogs() {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div className="">
        <Appbar />
        <div className="flex flex-col">
          <div className="">
            <ResponsiveBlogLoadingSkeleton />;
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" p-1">
        <Appbar />
        <div className="flex flex-col">
          <div className="mt-24">
            {blogs.map((b) => (
              <Blogs
                authorName={b.author.name || "Anonymous"}
                title={b.title}
                content={b.content}
                context="Docker"
                publishDate="2nd May,  2032"
                id={b.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AllBlogs;
