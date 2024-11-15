import { Link } from "react-router-dom";
import { useUsername } from "../hooks/useUsername";
import { LogOut } from "lucide-react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Appbar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}

function Appbar() {
  const username = useUsername();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm border border-slate-150">
      <div className="w-full px-2 my-2 md:my-2 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-blue-500 self-center cursor-pointer text-xl font-bold">
          <Link to={"/blogs"}>BlogStack</Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            to={"/WriteBlog"}
            className="text-blue-500 hover:text-blue-700 flex items-center space-x-2 tooltip-container"
          >
            <span className="tooltip">Add</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Link>
          <Link
            to={"/bookmarks"}
            className="text-blue-500 hover:text-blue-700 flex items-center space-x-2 tooltip-container"
          >
            <span className="tooltip">Bookmarks</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
              />
            </svg>
          </Link>
          <div
            className="text-blue-500 hover:text-blue-700 flex items-center space-x-2 cursor-pointer tooltip-container"
            onClick={() => {
              localStorage.clear();
            }}
          >
            <span className="tooltip">Logout</span>
            <LogOut className="w-6 h-6" />
          </div>
          <div className="tooltip-container">
            <span className="tooltip">Profile</span>
            <div className="bg-blue-500 text-white hover:text-white text-lg flex items-center justify-center h-8 w-8 rounded-full poppins-regular">
              {username[0].toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
