import React, { useContext } from "react";
import { CursorContext } from "./_app";

const Projects = () => {
  const { textEnter, textLeave } = useContext(CursorContext);

  return (
    <>
      <section className="w-full h-screen bg-[#def31c] flex justify-center items-center">
        <h2
          className="font-bold"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
      </section>
      <div className="w-full h-screen bg-gray-600"></div>
      <div className="w-full h-screen bg-gray-500"></div>
    </>
  );
};

export default Projects;
