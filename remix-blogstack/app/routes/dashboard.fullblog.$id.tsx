import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import { Heart, MessageCircle, MessageCirclePlus, Send, SendHorizontal } from "lucide-react"
import { comment } from "postcss"
import { useState } from "react"
import { prisma } from "~/.server/db"

export const loader:LoaderFunction = async({params}:LoaderFunctionArgs) => {
const id = Number(params["id"])
try{
    const blog = await prisma.post.findFirst({
        where : {
            id
        },
        select : {
	id : true,
          tags : true,
          title : true,
          content : true,
          likes : true,
          authorId : true,
          imgUrl:true,
          publishDate : true,
          authorImgUrl:true,
          author : {
            select : {
              name : true
            }
          }
        }
              })
    return {
        status : "success",
        body : blog
    }
}
catch(e){
    return{
        status : "failure"
    }
}
}
const FullBlog = () => {
const {body} = useLoaderData<typeof loader>()
const blog :{id: number;
    title: string;
    content: string;
    authorId: string;
    authorImgUrl: string;
    publishDate: string;
    tags: string[];
    likes: number;
    imgUrl: string;
    author: {
        name: string | null;
    };
        }
 = body
 const [isLiked,setIsLiked] = useState(false)
 const [comment,setComment] = useState("")
    return <div className="p-8 mx-auto flex">
<div className="bg-gray-900/35 rounded-lg p-10 backdrop-brightness-95 border w-full h-[800px] backdrop-blur-sm shadow-2xl">
<div className="flex gap-5">
    	<div className="flex flex-col gap-4">

					<div className="font-semibold text-xl">
							{blog.title}
						</div>	
					<div className="py-10 w-[650px] h-[400px] max-h-[325px] overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-thumb]:bg-gray-200
  dark:[&::-webkit-scrollbar-track]:hidden
  dark:[&::-webkit-scrollbar-thumb]:rounded-xl
  dark:[&::-webkit-scrollbar-thumb]:h-[15px]
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-400 font-light"> 
						{blog.content}
					</div>
                    <div className="flex space-x-4">
                        {blog.tags.map(tag=>
                        <Link to={`/dashboard/blog/${tag}`} className="p-[5px] text-blue-700 hover:bg-blue-300/60 rounded-sm">
                            #{tag}
                            </Link>)}
                    </div>
                    <div className="flex flex-col">
                    <button
                className={`flex items-center space-x-2 ${
                  isLiked ? "text-red-500" : "hover:text-red-500"
                } transition-colors duration-200`}
                onClick={() => setIsLiked(!isLiked)}>
                <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                <span>{blog.likes} Likes</span>
              </button>
              <div className="flex">
              <input type="text" 
              onChange={(e)=>{
                setComment(e.target.value)
              }}
              className="outline-none mt-2 bg-transparent border-b p-1 w-[400px] placeholder:text-gray-800" placeholder="Add a comment" />
              <SendHorizontal className={` ${comment !== "" ? "flex" : "hidden"} text-gray-800 -translate-x-6 translate-y-2 pt-1 cursor-pointer`} />
              </div>
                    </div>
								</div>
				<div className=" flex flex-col mx-auto justify-between">
				<div className="border rounded-lg my-20 w-[460px] h-[305px] object-scale-down">
					<img src={blog.imgUrl} alt="blog image" className="size-full"/>
				</div>
						<div className="flex border justify-between  rounded-lg cursor-pointer bg-white/30 p-5 space-y-2 text-black items-center">

						<div className="mx-2">
                            <div className="">
						{" - "}{ blog.author.name ?? "Anonymous"}
                            </div>
                    <div className="text-gray-800 mx-2 ">
                        {"CEO" + " | BlogStack"}
                    </div><div className="text-gray-800 mx-2 ">
                        {"Joined on Jan 6 2023"}
                    </div>
						</div>
                        <div className="">
                        <img src={blog.authorImgUrl} alt="authorImage" className="rounded-md size-16 border" />
                        </div>
					</div>
					</div>

</div>
</div>
    </div>
}
export default FullBlog

//370*245