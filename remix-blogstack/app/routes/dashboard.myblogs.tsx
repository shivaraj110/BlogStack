import { getAuth } from "@clerk/remix/ssr.server"
import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { prisma } from "~/.server/db"

export const loader:LoaderFunction = async(args : LoaderFunctionArgs) => {
    const {userId} = await getAuth(args)
    const res = await prisma.post.findMany({
        where : {
            authorId : userId ?? ""
        }
    })
return {
    status : "success",
    body : res
}
}



const MyBlogs = () => {
    interface BlogType{
        id: number;
        title: string;
        content: string;
        published: boolean;
        authorId: string;
        authorImgUrl: string;
        publishDate: string;
        tags: string[];
        likes: number;
        imgUrl: string;
    }
    const {body}   = useLoaderData<typeof loader>()
     return <div className="">
        {
            body.map((blog:BlogType)=> <div>
                {blog.title}
            </div>)
        }
     </div>
}
export default MyBlogs   