import { BlogData } from "../components/Blogs";

export function Blog(data: BlogData) {
  return (
    <div className="grid px-10 grid-cols-5">
      <div className=" mt-28 flex flex-col md:col-span-3 col-span-5">
        <div className="poppins-bold text-4xl ">{data.title}</div>
        <div className="text-xl text-gray-600 self- mt-4 poppins-light">
          Published on {data.publishDate}
        </div>
        <div className="text-lg mt-6 mb-6">{data.content}</div>
      </div>
      <div className="md:col-span-1 mt-28 flex flex-row justify-start ml-36 col-span-2 poppins-regular">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
          <div>Author</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-auto ml-2 cursor-pointer hover:text-blue-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg>

          </div>
          <div className="mt-10 rounded-full w-8 h-8 bg-gray-300"></div>
          <div className="flex flex-row translate-x-12 poppins-semibold text-lg -translate-y-14">
            {data.authorName}
          </div>
          <div className="flex flex-row max-w-[400px] translate-x-12 mr-8 poppins-semibold text-sm text-gray-500  -translate-y-10">
            agfldgdfg ifudhgusuhsuisdasdsas dgjgiodphdob;ksfngsng
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
