import { LoaderFunction } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import { prisma } from "~/.server/db"

export const loader:LoaderFunction = async() => {
  try{
    const blogs = await prisma.post.findMany({
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
      }
    })
    return {
      status : "success",
      body : blogs
    }
  }
  catch (e){
    console.error(e);
    return {
      status : "fail",
    }
  }
} 



export default function(){
//   pushBlogs({
//     title : "asdasd",
//     content :"asd",
//     likes : 69,
//     publishDate : "12th dec 2024",
//     authorId : 1,
//     imgUrl : "asdasd"
// })
interface BlogData{
  title : string 
  content : string
  authorId : number
  publishDate : string
  likes : number
  imgUrl : string,
  authorImgUrl : string,
  tags : string[]
}

  const {body}= useLoaderData<typeof loader>()
  const blogs:BlogData[] = body

if( !body[0] ){
  return <div className="p-5 flex">
    No blogs added yet. Be the first one to <Link to={"/blog/write"} className="underline px-1 cursor-pointer">add blogs</Link>!
  </div>
}

  return (
  <div>
    {
      blogs.map(  blog => 
        <div className="flex gap-2 justify-center">
          <div>
          {blog.authorId}
          </div>
<div> {blog.title}
</div>
<div className="text-green-300">{blog.tags}</div>
<img src={blog.authorImgUrl} alt="" className="size-12 cursor-pointer rounded-full" />
        </div>
      )
    }
  </div>
  )
}
