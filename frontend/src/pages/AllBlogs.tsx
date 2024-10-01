import { useEffect, useState } from "react";
import Blogs from "../components/Blogs";

interface BlogData {
  title: string;
  content: string;
  publishDate: string;
  authorName: string;
}

function AllBlogs() {
  const [blogs, setBlogs] = useState({});
  useEffect(() => {}, []);
  return (
    <div>
      <Blogs
        authorName="shivaraj"
        title="this is the title for this blog asssda sdadada dadafsomfs"
        content=" this is content of this blog this is content of this blogthis is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog!"
        publishDate="2 aug,2024"
        context="docker"
      />
    </div>
  );
}

export default AllBlogs;
