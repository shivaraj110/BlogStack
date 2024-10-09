import { Link } from "react-router-dom";
import { useUsername } from "../hooks/useUsername";
import { LogOut } from "lucide-react";
function Appbar() {
  const username = useUsername();
  return (
    <div className="fixed z-40 selection w-full ">
      <header className="flex z-20 justify-between p-4 mt-3 items-center bg-blue-50 shadow-md rounded-3xl box-border mx-12 transi md:mx-32">
        <div className="text-blue-500 self-center cursor-pointer text-xl poppins-light">
          <Link to={"/blogs"}>BlogStack</Link>
        </div>
        <div className="flex flex-row">
          <div className=" flex mr-4 items-center hover:text-blue-500 hover:cursor-pointer">
            <Link to={"/WriteBlog"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-[25px]">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </Link>
          </div>
          <div className=" flex mr-4 items-center hover:text-blue-500 hover:cursor-pointer">
            <Link to={"/bookmarks"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                />
              </svg>
            </Link>
          </div>
          <div
            className="flex mr-4 items-center hover:text-blue-500 hover:cursor-pointer"
            onClick={() => {
              localStorage.clear();
            }}>
            <Link to={"/login"}>
              <LogOut />
            </Link>
          </div>
          <div className=" bg-blue-500 text-white text-lg flex flex-col cursor-pointer poppins-regular self-center justify-center h-[30px] rounded-full w-[30px] text-center font-extralight">
            {username[0].toUpperCase()}
          </div>
        </div>
      </header>
    </div>
  );
}
export default Appbar;
