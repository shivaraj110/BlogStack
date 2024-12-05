import { Link } from "@remix-run/react";
import { Search } from "lucide-react";

export function AccountsSection() {
  return (
    <div className="bg-white/60 backdrop-brightness-110 backdrop-blur-sm rounded-xl shadow-md">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-xl font-semibold pr-3">Blogs</h2>
        <div className="flex gap-2">
          <div className="relative underline cursor-pointer">
     View all Blogs
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <AccountItem title="My Blogs" number="69" status="Published" />
        <AccountItem title="Bookmarks" number="9" status="Bookmarked" />
      </div>
    </div>
  );
}

function AccountItem({
  title,
  number,
  status,
}: {
  title: string;
  number: string;
  status: "Published" | "Bookmarked";
}) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{number}</p>
      </div>
      <Link to={ status === "Published" ? "blogs":"bookmarks"}>
      <button
        className={`px-3 py-1 text-sm rounded-md ${"bg-green-100 text-green-700 hover:bg-green-200"} transition-colors`}>
        {status === "Published" ? "View My Blogs" : "View Bookmarks"}
      </button>
      </Link>
    </div>
  );
}