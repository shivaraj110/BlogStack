import { createClerkClient } from "@clerk/remix/api.server"
import { getAuth } from "@clerk/remix/ssr.server"
import { ActionFunction, ActionFunctionArgs } from "@remix-run/node"
import { Form, redirect } from "@remix-run/react"
import { pushBlogs } from "~/.server/pushBlogs"

export const action : ActionFunction = async (args:ActionFunctionArgs) =>{
    const formData = await args.request.formData()
    const title =  formData.get("title")?.toString() ?? ""
    const content =  formData.get("content")?.toString() ?? ""
    const tags =  formData.get("tags")?.toString().split(",") ?? [""]
    const imgUrl =  formData.get("imgUrl")?.toString() ?? ""
    const publishDate = new Date().toDateString()
  
    try{
    const {userId} = await getAuth(args)
    if (!userId) {
        return redirect('/')
    }
    const user = await createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY }).users.getUser(
        userId,
      )
    const authorImgUrl = user.imageUrl
    const authorId = userId
        await pushBlogs({title,content,tags,imgUrl,authorId,publishDate,authorImgUrl})
        return {
            status : "success"
        }
    }
    catch(e){
        console.error(e);
        return {
            status : "failed"
        }
    }
}


const Solo = () =>{

        return <div className="p-10">
            <Form method="POST" className="flex flex-col  gap-2">
<input type="text" name="title" placeholder="Title" className="border w-[350px] border-gray-300 p-1 rounded-lg "/>
<textarea name="content" className="border border-gray-300 p-5 w-[350px] rounded-lg" placeholder="Content"></textarea>
<input type="text" name="tags" placeholder="Tags (seperated by comma)" className="border border-gray-300 w-[350px] p-1 rounded-lg "/>
<input type="text" name="imgUrl" placeholder="insert an image here" className="border p-5" />
<input type="submit" className="self-start p-1 border border-gray-300 bg-gray-100 rounded-lg"/>
            </Form>
        </div>
   
}
export default Solo