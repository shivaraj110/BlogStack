import { SignOutButton, UserButton, useUser } from "@clerk/remix";
import { Link, Outlet } from "@remix-run/react";
import {
  LayoutDashboard,
  CreditCard,
  AlertCircle,
  HeadphonesIcon,
  Users2,
  LineChart,
  Plus,
  AlignJustify,
  X,
} from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [isMobile,setIsMObile] = useState(false)
  const { user } = useUser();
  return (
    <div>
      <div className="pt-5 px-5">
      <AlignJustify className={`md:hidden flex cursor-pointer text-gray-600`} onClick={()=>{
        setIsMObile(!isMobile)
      }}/>
      </div>
        <div className={`bg-white/50 mx-5 transi md:flex hidden overflow-hidden sm:mx-10 p-5 mt-5 rounded-3xl backdrop-blur-sm shadow-xl`}>
          {/* Sidebar */}
       
          {/* Main Content */}
          <main className="flex-1 ">
            <header className="flex justify-between items-center">
              <div className="flex sm:flex-row flex-col space-x-20 text-gray-700">
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
      <div className={`bg-white transi ${isMobile ? "h-full w-full " : "h-0 w-0"} -translate-y-10 flex-col  overflow-hidden rounded-3xl shadow-xl`}>
   <div className="pt-5 px-5">
    <X className="flex ml-auto text-gray-700 cursor-pointer"onClick={()=>{
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
      <Outlet/>
    </div>

  );
}


export default Home