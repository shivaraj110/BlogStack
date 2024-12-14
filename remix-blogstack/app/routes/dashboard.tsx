import { SignOutButton, UserButton, useUser } from "@clerk/remix";
import { Link, Outlet } from "@remix-run/react";
import {
  AlignJustify,
  X,
  BookMarked,
  LayoutDashboard,
  TextQuote,
  NotebookPen,
  MessageSquareText,
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
        <div className={`bg-gray-900/35 backdrop-brightness-95 text-slate-900 border mx-5 transi md:flex hidden overflow-hidden sm:mx-10 p-5 mt-5 rounded-3xl backdrop-blur-sm shadow-2xl`}>
          {/* Sidebar */}
       
          {/* Main Content */}
          <main className="flex-1 ">
            <header className="flex justify-between items-center">
              <div className="flex sm:flex-row flex-col items-center space-x-20">
                <Link to={"/dashboard"} className={`text-2xl overflow-x-auto  flex items-center overflow-hidden text-gray-700  font-light`}>
                <div>
                  <LayoutDashboard className=""/>
                  </div>
                  <div className="pl-5 w-0 hover:w-full overflow-hidden -translate-x-4 transi text-[17px] text-gray-800">
                    {"Dashboard"}
                  </div>
                  </Link>
                  <Link to={"/dashboard/blogs"} className={`text-2xl overflow-x-auto flex items-center overflow-hidden text-gray-700  font-light`}>
                <div>
                  <TextQuote className=""/>
                  </div>
                  <div className="pl-5 w-0 hover:w-full overflow-hidden -translate-x-4 transi text-[17px] text-gray-800">
                    {"Blogs"}
                  </div>
                  </Link>
                  <Link to={"/dashboard/bookmarks"} className={`text-2xl overflow-x-auto flex items-center overflow-hidden text-gray-700  font-light`}>
                <div>
                  <BookMarked className=""/>
                  </div>
                  <div className="pl-5 w-0 hover:w-full overflow-hidden -translate-x-4 transi text-[17px] text-gray-800">
                    {"Bookmarks"}
                  </div>
                  </Link>
                  <Link to={"/dashboard/blog/solo"} className={`text-2xl overflow-x-auto flex items-center overflow-hidden text-gray-700  font-light`}>
                <div>
                  <NotebookPen className=""/>
                  </div>
                  <div className="pl-5 w-0 hover:w-full overflow-hidden -translate-x-4 transi text-[17px] text-gray-800">
                    {"Write"}
                  </div>
                  </Link>
              </div>
              <div className="flex items-center gap-3">
              <Link to={"/dashboard/chatbox"} className={`text-2xl text-gray-700 font-thin overflow-x-auto flex items-center overflow-hidden `}>
                  <MessageSquareText className=""/>
                  </Link>
                <span className="-translate-y-1 items-center">Hello {user?.username}</span>
                <div className="items-center">
                <UserButton/>
                </div>
              </div>
            </header>
          </main>
      </div>

      <div className={`bg-gray-900/35 text-slate-900 backdrop-brightness-200 backdrop-blur-sm transi ${isMobile ? "h-full w-full " : "h-0 w-0"} -translate-y-10 flex-col  overflow-hidden rounded-3xl shadow-xl`}>
   <div className="pt-5 px-5">
    <X className="flex ml-auto cursor-pointer"onClick={()=>{
      setIsMObile(!isMobile)
    }}/>
          <ul className=" self-center p-12 h-dvh space-y-6">
                <li><Link to={"/dashboard"} className="text-xl ">Dashboard</Link></li>
                <li> <Link to={"blogs"} className="text-xl ">Blogs</Link></li>
                <li><Link to={"bookmarks"} className="text-xl ">Bookmarks</Link></li>
                <li> <Link to={"blog/solo"} className="text-xl">write</Link></li>
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