import { SignOutButton, UserButton, useUser } from "@clerk/remix";
import { Link, Outlet } from "@remix-run/react";
import {
  Plus,
  AlignJustify,
  X,
  Pen,
  Users,
} from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [isMobile,setIsMObile] = useState(false)
  const { user } = useUser();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="pt-5 px-5">
      <AlignJustify className={`md:hidden flex cursor-pointer text-slate-900`} onClick={()=>{
        setIsMObile(!isMobile)
      }}/>
      </div>
        <div className={`bg-gray-900/20 backdrop-brightness-95 text-slate-900 border mx-5 transi md:flex hidden overflow-hidden sm:mx-10 p-5 mt-5 rounded-3xl backdrop-blur-md shadow-2xl`}>
          {/* Sidebar */}
       
          {/* Main Content */}
          <main className="flex-1 ">
            <header className="flex justify-between items-center">
              <div className="flex sm:flex-row flex-col space-x-20">
                <Link to={"/dashboard"} className="text-2xl font-light">Dashboard</Link>
                <Link to={"blogs"} className="text-2xl font-light">Blogs</Link>
                <Link to={"bookmarks"} className="text-2xl font-light">Bookmarks</Link>
                <Link to={"/blog/write"}><Plus className="size-10 -translate-y-1 cursor-pointer"/></Link>
              </div>
              <div className="flex items-center gap-3">
                <span className="-translate-y-1">Hello {user?.username}</span>
                <div>
                <UserButton/>{" "}
                </div>
              </div>
            </header>
          </main>
      </div>

      <div className={`bg-white/30 text-slate-900 backdrop-brightness-200 backdrop-blur-md transi ${isMobile ? "h-full w-full " : "h-0 w-0"} -translate-y-10 flex-col  overflow-hidden rounded-3xl shadow-xl`}>
   <div className="pt-5 px-5">
    <X className="flex ml-auto cursor-pointer"onClick={()=>{
      setIsMObile(!isMobile)
    }}/>
          <ul className=" self-center p-12 h-dvh space-y-6">
                <li><Link to={"/dashboard"} className="text-xl ">Dashboard</Link></li>
                <li> <Link to={"blogs"} className="text-xl ">Blogs</Link></li>
                <li><Link to={"bookmarks"} className="text-xl ">Bookmarks</Link></li>
                <li> <Link to={"/blog/write"} className="text-xl">write</Link></li>
                <li className="text-xl"><SignOutButton/></li>
          </ul>
   </div>
      </div>
      <div className="mx-auto">
      <Outlet/>
      </div>
    </div>

  );
}
export default Home