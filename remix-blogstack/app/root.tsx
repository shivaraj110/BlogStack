import type { MetaFunction, LoaderFunction ,LoaderFunctionArgs} from "@remix-run/node";
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
import { ClerkApp } from "@clerk/remix";
import { clerkEnv } from "./env.server";
import React from "react";

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
  },
];
// Your imports

export const loader: LoaderFunction = (args : LoaderFunctionArgs) => {
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
<body className="bg-[url('/bg.jpg')] bg-cover bg-no-repeat"> 
{children}
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
