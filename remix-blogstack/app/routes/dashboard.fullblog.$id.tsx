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
const blog : BlogData = body
    return <div className="p-8">
<div className="bg-gray-900/35 p-10 backdrop-brightness-95 border backdrop-blur-sm shadow-2xl">
<div>
    
</div>
        {JSON.stringify(blog)}
</div>
    </div>
}
export default FullBlog