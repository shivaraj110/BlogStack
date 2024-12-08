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
      <AlignJustify className={`md:hidden flex cursor-pointer`} onClick={()=>{
        setIsMObile(!isMobile)
      }}/>
      </div>
        <div className={`bg-white/50 mx-5 transi md:flex hidden overflow-hidden sm:mx-10 p-5 mt-5 rounded-3xl backdrop-blur-sm shadow-xl`}>
          {/* Sidebar */}
       
          {/* Main Content */}
          <main className="flex-1 ">
            <header className="flex justify-between items-center">
              <div className="flex sm:flex-row flex-col space-x-20 text-gray-700">
                <Link to={"/dashboard"} className="text-2xl font-medium">Dashboard</Link>
                <Link to={"/dashboard"} className="text-2xl font-medium">Blogs</Link>
                <Link to={"/dashboard"} className="text-2xl font-medium">Bookmarks</Link>
                <Plus className="size-10 -translate-y-1 cursor-pointer"/>
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
      <div className={`bg-white transi ${isMobile ? "w-full h-full" : "h-0 w-0"} -translate-y-10 flex-col  overflow-hidden h-screen rounded-3xl shadow-xl`}>
   <div className="pt-5 px-5">
    <X className="flex ml-auto cursor-pointer"onClick={()=>{
      setIsMObile(!isMobile)
    }}/>
   </div>
          <ul className="flex flex-col justify-center p-10 space-y-6">
                <li><Link to={"/dashboard"} className="text-xl ">Dashboard</Link></li>
                <li> <Link to={"/dashboard"} className="text-xl ">Blogs</Link></li>
                <li><Link to={"/dashboard"} className="text-xl ">Bookmarks</Link></li>
                <li className="text-xl"><SignOutButton/></li>
          </ul>
      </div>
      <Outlet/>
    </div>

  );
}

function NavItem({
  icon,
  children,
  href,
  active,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  href: string;
  active?: boolean;
}) {
  return (
    <Link
      to={href}
      className={`flex items-center gap-3 px-2 py-2 rounded-lg bg-gradient-to-r backdrop-blur-sm transition-colors
        ${
          active
            ? " from-blue-300/40 to-cyan-300/40"
            : "text-gray-600 hover:bg-gray-100"
        }`}>
      {icon}
      <span>{children}</span>
    </Link>
  );
}
export default Home