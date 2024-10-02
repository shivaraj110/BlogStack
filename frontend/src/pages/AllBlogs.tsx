import { useEffect, useState } from "react";
import Blogs from "../components/Blogs";
import Appbar from "../components/Appbar";
import axios from "axios";
import { useBlogs } from "../hooks/useBlogs";

interface BlogData {
  title: string;
  content: string;
  publishDate: string;
  authorName: string;
}

function AllBlogs() {
  const { loading, blogs } = useBlogs();
  return (
    <div>
      <div className="">
        <Appbar />
      </div>
      <div className="flex flex-col">
        <Blogs
          authorName="shivaraj"
          title="this is the title for this blog asssda sdadada dadafsomfs"
          content=" this is content of this blog this is content of this blogthis is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog!"
          publishDate="2 aug,2024"
          context="docker"
        />
        <Blogs
          authorName="shivaraj"
          title="this is the title for this blog asssda sdadada dadafsomfs"
          content=" this is content of this blog this is content of this blogthis is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog!"
          publishDate="2 aug,2024"
          context="docker"
        />
        <Blogs
          authorName="shivaraj"
          title="this is the title for this blog asssda sdadada dadafsomfs"
          content=" this is content of this blog this is content of this blogthis is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog!"
          publishDate="2 aug,2024"
          context="docker"
        />
        <Blogs
          authorName="shivaraj"
          title="this is the title for this blog asssda sdadada dadafsomfs"
          content=" this is content of this blog this is content of this blogthis is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog this is content of this blog!"
          publishDate="2 aug,2024"
          context="docker"
        />
      </div>
    </div>
  );
}

export default AllBlogs;
