import axios from "axios";
import { useEffect, useState } from "react";
import { backnedUrl } from "../config/url";
interface BlogData {
  title: string;
  content: string;
  publishDate?: string;
  id:number
  tags : string[]
  author: {
    name: string;
  };
}
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  useEffect(() => {
    axios
      .get(`${backnedUrl}/api/v1/blog/bulk`, {
        headers: {
          Authorization:`${"Bearer "+ localStorage.getItem("token")}`
        },
      })
      .then((res) => {
        setBlogs(res.data.blogs);
        setLoading(false);
      });
  },[null]);
  return {
    loading,
    blogs
  }
};


export const useBlog = (id : number) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogData>();
  useEffect(() => {
    axios
      .get(`${backnedUrl}/api/v1/blog/${id}`, {
        headers: {
          Authorization:`${"Bearer "+ localStorage.getItem("token")}`
        },
      })
      .then((res) => {
        setBlog(res.data.blog);
        setLoading(false);
      });
  },[id]);
  return {
    loading,
    blog
  }
};


interface bookmarkedBlogData{
  post : {
    title: string;
    content: string;
    publishDate?: string;
    id:number
    tags : string[]
    author: {
      name: string;
    };
  }
}

export const useBookmarks = () =>{
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<bookmarkedBlogData[]>([]);
  useEffect(()=>{
    axios.get(backnedUrl+"/api/v1/user/bookmarks",{
      headers : {
        Authorization : "Bearer " + localStorage.getItem("token"),
        "Content-Type" : "application/json"
      }
    }).then(res =>{
      setBlogs(res.data.posts)
      setLoading(false)
    })
  },[null])
  return {
    loading,
    blogs
  }
}