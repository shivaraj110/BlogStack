import { useState } from "react";
import { Link } from "react-router-dom";

export interface BlogData {
  authorName: string;
  title: string;
  content: string;
  publishDate: string;
  context: string;
  id: number;
}
function Blogs(data: BlogData) {
  const [bookmarked, setBookMarked] = useState(false);
  return (
    <div>
      <div className="flex mt-6 flex-row justify-start md:ml-32 transi ml-12 min-w-[550px] pt-2">
        <div className=" bg-blue-500 text-white text-xl flex flex-col poppins-regular justify-center h-8 rounded-full w-8 text-center font-extralight">
          {data.authorName[0].toUpperCase()}
        </div>
        <div className="pl-2 poppins-light translate-y-1 ">{data.authorName}</div>
        <div className="pl-2 poppins-light translate-y-1  text-gray-500">
          {data.publishDate}
        </div>
      </div>
      <div className="text-2xl flex justify-start mt-1  poppins-semibold md:ml-32 ml-12 md:mr-32 transi mr-12 ">
        <Link to={`/blog/${data.id}`}>{data.title}</Link>
      </div>
      <div className="text-lg flex justify-start mt-1  md:ml-32 ml-12 md:mr-32 transi mr-12 poppins-light ">
        {data.content.slice(0, 200) + "..."}
      </div>
      <div className="flex flex-row">
        <div className="rounded-3xl w-fit p-1 flex justify-start mt-10  md:ml-32 ml-12 transi bg-gray-200 text-gray-800 poppins-extralight">
          {data.context}
        </div>
        <div className="mt-11 ml-4 text-gray-500">
          {Math.ceil(data.content.length / 100)} {"min read"}
        </div>
        <div
          className="flex ml-auto text-gray-500 mr-6 pt-11 hover:cursor-pointer "
          onClick={() => {
            setBookMarked(!bookmarked);
          }}>
          {!bookmarked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
              />
            </svg>
          )}
        </div>
        <div className="flex mr-6 text-gray-500 pt-11 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <div className="flex mr-12 md:mr-36 text-gray-500 pt-11 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="h-[0.5px] mt-10  md:ml-32 ml-12 md:mr-32 transi mr-12 bg-gray-300"></div>
    </div>
  );
}

export default Blogs;
