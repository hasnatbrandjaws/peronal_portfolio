import React, { useContext } from "react";
import { CursorContext } from "./_app";

export default function Index() {
  const { textEnter, textLeave } = useContext(CursorContext);

  return (
    <>
      <section className="w-full h-screen bg-[#def31c] flex items-center">
        <h2
          className="w-full font-bold hover:text-red-500 "
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Hello World
        </h2>
      </section>
      <div className="w-full h-screen bg-gray-600"></div>
      <div className="w-full h-screen bg-gray-500"></div>
    </>
  );
}
