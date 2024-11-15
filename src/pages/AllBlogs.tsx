import Blogs from "../components/Blogs";
import { useBlogs } from "../hooks/useBlogs";
import ResponsiveBlogLoadingSkeleton from "../components/ResponsiveBlogLoadingSkeleton";

function AllBlogs() {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col">
          <div className="">
            <ResponsiveBlogLoadingSkeleton />;
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-1 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <div className="mt-20">
            {blogs.map((b) => (
              <Blogs
                authorName={b.author.name || "Anonymous"}
                title={b.title}
                content={b.content}
                tags={!b.tags ? ["notags"] : b.tags}
                publishDate={b.publishDate ? b.publishDate : "no trace"}
                id={b.id}
                likes={b.likes}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AllBlogs;
