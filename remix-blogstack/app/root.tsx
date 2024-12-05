import type { MetaFunction, LoaderFunction } from "@remix-rur/node";
import "./tailwind.css";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
// Import ClerkApp
import { ClerkApp, useUser } from "@clerk/remix";
import { clerkEnv } from "./env.server";

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
  },
];

// Your imports

export const loader: LoaderFunction = (args) => {
  return rootAuthLoader(args, clerkEnv);
};

// Your additional app code
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body> 
<div className="flex flex-col">
<div className="w-[50px] h-screen sm:hidden flex">
sidebar
</div>
{children}
</div>
    
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>

  );
}

function App() {
  return <Outlet />;
}

export default ClerkApp(App);
