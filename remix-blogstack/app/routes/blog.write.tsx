import { Link } from "@remix-run/react";

export default function (){
    return <div className="p-5 flex gap-3">
        <Link to={"/blog/solo"} className="underline" >wirte a blog</Link>
        <Link to={"/blog/collab"} className="underline" >Collab with authors</Link>
    </div>
}