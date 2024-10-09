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
          <div>Author</div>
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
