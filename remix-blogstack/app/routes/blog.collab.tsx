import { LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { prisma } from "~/.server/db"

export const loader : LoaderFunction = async(args) => {
try{
    const users = await prisma.user.findMany({
        where : {
            openToCollab : true
        }
    })
    return {
        status : "success",
        body : users
    }
}
catch(e){
    console.error(e)
}
return ""
}
const Collab = () => {

    interface User{
            id: number;
            identifier: string;
            email: string;
            name: string | null;
            password: string | null;
            pfpUrl: string | null;
            fname: string | null;
            lname: string | null;
            openToCollab: boolean
    }
    const {body} = useLoaderData<typeof loader>()
    const Users: User[] = body
    return <div className="p-10">
        <div>
            {"Available Collaborators "}
        </div>
        {
            Users.map( user => <div>{user.fname}</div>)
        }
    </div>
}
export default Collab