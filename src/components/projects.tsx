"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  const myProjects = [
    {
      name: "Jovix",
      madeWith: "Reactjs, Vite, Tailwindcss",
      github: "https://github.com/AbayoHJovin/Jovix.git",
      website: "https://jovix.vercel.app",
      demoImg: "/jovix.png",
    },
    {
      name: "Artify",
      madeWith: "Reactjs, Vite, Tailwindcss,nodejs",
      github: "https://github.com/AbayoHJovin/Artify.git",
      website: "https://artify-jov.vercel.app",
      demoImg: "/art.png",
    },
    {
      name: "HomeDel",
      madeWith: "Reactjs, Vite, Tailwindcss,nodejs",
      github: "https://github.com/AbayoHJovin/fashionix",
      website: "https://shopin-xi.vercel.app/",
      demoImg: "/homeDel.png",
    },
  ];

  const projectsToShow = showAll ? myProjects : myProjects.slice(0, 6);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div
      className="space-y-5 px-4 md:px-10 mx-0 md:mx-10 my-10 py-5"
      id="projects"
    >
      <div className="flex justify-center font-bold text-3xl my-5 text-black dark:text-white">
        {loading ? <Skeleton width={50} height={20} /> : <h1>Projects</h1>}
      </div>
      <div className="flex justify-center">
        <div
          className={`grid gap-3 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3`}
        >
          {projectsToShow.map((project, index) => (
           loading? (<Skeleton width={250} height={250}/>):(
            <div
            key={index}
            className="relative w-[90%] max-w-[320px] p-3 bg-gray-100 dark:bg-[#18141c] group rounded-md transition-transform duration-300 transform hover:scale-105"
          >
            <Image
              src={project.demoImg}
              alt={project.name}
              className="w-full h-auto object-cover rounded-lg"
              layout="responsive"
              width={600}
              height={375}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 m-2 rounded-full"
              >
                <FaExternalLinkAlt className="text-xl" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 m-2 rounded-full"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
            <div className="p-4 rounded-b-lg">
              <h2 className="text-xl font-semibold text-black dark:text-white">
                {project.name}
              </h2>
              <p className="text-[#6b7280]">Tech Stack: {project.madeWith}</p>
            </div>
          </div>
           )
    
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6">
        {
          loading? (
            <Skeleton width={40} height={20}/>
          ):(

            <button
              onClick={handleToggle}
              className="bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700"
            >
              {showAll ? "Show Less" : "View More"}
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Projects;
