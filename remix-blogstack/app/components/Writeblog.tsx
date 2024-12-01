import React from "react";

function Writeblog() {
  return (
    <div className="bg-white/60 backdrop-brightness-110 backdrop-blur-sm rounded-xl shadow-md mb-6 h-fit">
      <div className="p-5 font-semibold text-gray-800">
        got something in mind ?{" "}
      </div>
      <div className="grid grid-cols-3">
        <div className="p-5">
          a fastest way for your words from your head to the internet is
          actually
          <button className="font-semibold underline">Start writing </button>.
        </div>
        <div className="p-5">
          know someone who could help you with more ideas ? then you should
          <button className=" font-semibold underline">Collaborate </button>.
        </div>{" "}
        <div className="p-5">
          it's not cool to abandon an idea halfway you know. Care to
          <br />
          <button className=" font-semibold underline">finish a draft</button>?
        </div>{" "}
      </div>
    </div>
  );
}

export default Writeblog;
