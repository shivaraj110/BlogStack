import Blogs from "../components/Blogs";
import Appbar from "../components/Appbar";
import { useBookmarks } from "../hooks/useBlogs";
import ResponsiveBlogLoadingSkeleton from "../components/ResponsiveBlogLoadingSkeleton";

function Bookmarks() {
  const { loading, blogs } = useBookmarks();
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
                authorName={b.post.author.name || "Anonymous"}
                title={b.post.title}
                content={b.post.content}
                tags={!b.post.tags ? ["notags"] : b.post.tags}
                publishDate={
                  b.post.publishDate ? b.post.publishDate : "no trace"
                }
                id={b.post.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Bookmarks;
