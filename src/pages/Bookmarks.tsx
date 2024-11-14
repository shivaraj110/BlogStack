import { useBookmarks } from "../hooks/useBlogs";
import ResponsiveBlogLoadingSkeleton from "../components/ResponsiveBlogLoadingSkeleton";
import BookmarkBlog from "../components/BookmarkBlogs";

function Bookmarks() {
  const { loading, blogs } = useBookmarks();
  if (loading) {
    return (
      <div className="">
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
        <div className="flex flex-col">
          <div className="mt-24">
            {blogs.map((b) => (
              <BookmarkBlog
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
