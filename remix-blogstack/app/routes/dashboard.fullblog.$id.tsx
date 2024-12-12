import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { prisma } from "~/.server/db"
import { BlogData } from "~/components/Blog"

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
const blog :{id : true,
          tags : true,
          title : true,
          content : true,
          likes : true,
          authorId : true,
          imgUrl:true,
          publishDate : true,
          authorImgUrl:true,
          author : {
              name : true
          }
        }
 = body
    return <div className="p-8 mx-auto flex">
<div className="bg-gray-900/35 rounded-lg p-10 backdrop-brightness-95 overflow-scroll border w-full h-[700px] backdrop-blur-sm shadow-2xl">
<div className="flex gap-5">
    	<div className="flex flex-col gap-4">

					<div className="font-semibold text-xl">
							{blog.title}
						</div>	
					<div className="py-10 w-[650px] font-light"> 
						{blog.content}
					</div>
								</div>
				<div>
				<div className="flex flex-col justify-start pt-20">
				<div className="border rounded-lg">
					<img src={blog.imgUrl} alt="blog image object-scale-down"/>
				</div>
					</div>
						<div className="flex pt-6 text-black items-center">
							<img src={blog.authorImgUrl} alt="authorImage" className="rounded-full size-10 border" />
						<div className="mx-2">
						-{blog.author.name ?? "Anonymous"}
						</div>
					</div>
					</div>
</div>
</div>
    </div>
}
export default FullBlog
