import { UserButton, useUser } from "@clerk/remix";
import { Link } from "@remix-run/react";
import {
  LayoutDashboard,
  Smartphone,
  CreditCard,
  AlertCircle,
  HeadphonesIcon,
  Users2,
} from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  return (
    <div className=" flex bg-[url('https://utfs.io/f/fVvo0hHNtQOLKvFnGkAktoYbLERVl8iTe2GWyCS4aBmqwrc7')]  h-screen bg-no-repeat bg-cover md:h-full 2xl:h-screen  ">
      <div className="container mx-auto p-5">
        <div className="bg-white/50  rounded-3xl backdrop-blur-sm shadow-xl flex">
          {/* Sidebar */}
          <aside className="w-64 p-5">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r  from-blue-400 to-cyan-200 rounded-lg" />
              <span className="font-semibold">BlogStack</span>
            </div>

            <nav className="space-y-2">
              <NavItem
                icon={<LayoutDashboard className="w-4 h-4" />}
                href="/dashboard"
                active>
                dashboard
              </NavItem>
              <NavItem icon={<Users2 className="w-4 h-4" />} href="/accounts">
                Connections
              </NavItem>
              <NavItem icon={<Smartphone className="w-4 h-4" />} href="/mobile">
                Mobile
              </NavItem>
              <NavItem
                icon={<CreditCard className="w-4 h-4" />}
                href="/payments">
                Payments
              </NavItem>
              <NavItem
                icon={<AlertCircle className="w-4 h-4" />}
                href="/complaints">
                Complaints
              </NavItem>
              <NavItem
                icon={<HeadphonesIcon className="w-4 h-4" />}
                href="/support">
                Support
              </NavItem>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6">
            <header className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <p className="text-gray-600">Welcome to BlogStack</p>
              </div>
              <div className="flex items-center gap-3">
                <span>Hello {user?.username}</span>
                <UserButton />{" "}
              </div>
            </header>
            {children}
          </main>
        </div>
      </div>
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
