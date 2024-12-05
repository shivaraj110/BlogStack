import { getAuth } from "@clerk/remix/ssr.server"
import { LoaderFunction } from "@remix-run/node"
import { Outlet, redirect } from "@remix-run/react"
import { clerkEnv } from "~/env.server"


export const loader:LoaderFunction = async(args) =>{
    const {userId} = await getAuth(args,clerkEnv)
    if(userId){
        return <Outlet/>
    }
    else{
      return redirect("/")
    }
}

const Home = () =>{
    return <Outlet/>    
}
export default Home
