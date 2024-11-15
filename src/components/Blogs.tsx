import { useState } from "react";
import axios from "axios";
import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";
import { backnedUrl } from "../config/url";

export interface BlogData {
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
  tags: string[];
  id: number;
}

function BlogPost({
  authorName,
  title,
  content,
  publishDate,
  tags,
  id,
}: BlogData) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = async () => {
    setIsBookmarked(!isBookmarked);
    try {
      const res = await axios.post(
        `${backnedUrl}/api/v1/user/bookmark`,
        { postId: id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert(res.data.msg);
    } catch (error) {
      console.error("Error bookmarking post:", error);
      alert("Failed to bookmark post");
    }
  };

  const handleBookmarkRemove = async () => {
    setIsBookmarked(!isBookmarked);
    try {
      const res = await axios.delete(`${backnedUrl}/api/v1/user/bookmark`, {
        data: { id },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      alert(res.data.msg);
    } catch (error) {
      console.error("Error removing bookmark:", error);
      alert("Failed to remove bookmark");
    }
  };

  return (
    <div className=" bg-white rounded-md border border-gray-200 overflow-hidden mt-2">
      <div className="p-5">
        <div className="flex items-center mb-4">
          <img
            className="h-9 w-9 rounded-full border-2 border-blue-500 mr-2"
            src="https://randomuser.me/api/portraits/women/90.jpg"
            alt={authorName}
          />
          <div>
            <h2 className="text-base font-medium text-gray-600 ">
              {authorName}
            </h2>
            <p className="text-xs text-gray-500">{publishDate}</p>
          </div>
        </div>
        <div className="md:pl-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600  transition-colors duration-200">
            {title}
          </h1>
          <div className="text-sm text-gray-600 mb-4">
            {content.slice(0, 400) + (content.length < 400 ? "" : "...")}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-blue-100 text-blue-800 rounded px-2 py-1 mb-2 hover:bg-blue-200  transition-colors duration-200">
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex sm:flex-row flex-col items-center justify-between text-sm text-gray-600 ">
            <div className="flex items-center space-x-4">
              <button
                className={`flex items-center space-x-2 ${
                  isLiked ? "text-red-500" : "hover:text-red-500"
                } transition-colors duration-200`}
                onClick={() => setIsLiked(!isLiked)}>
                <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                <span>10 Reactions</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors duration-200">
                <MessageCircle className="h-5 w-5" />
                <span>10 Comments</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xs bg-gray-200  rounded-full px-2 py-1">
                10 hours
              </span>
              <button
                className={`${
                  isBookmarked ? "text-yellow-500" : "hover:text-yellow-500"
                } transition-colors duration-200`}
                onClick={isBookmarked ? handleBookmarkRemove : handleBookmark}>
                <Bookmark
                  className={`h-5 w-5 ${isBookmarked ? "fill-current" : ""}`}
                />
              </button>
              <button className="hover:text-green-500 transition-colors duration-200">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
