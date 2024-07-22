import { BsBootstrap } from "react-icons/bs";
import {
  DiCss3,
  DiHtml5,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiPhp,
  DiReact,
} from "react-icons/di";
import { SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function About() {
  const backend = [
    { lang: "Nodejs", level: "90%", logo: <DiNodejs /> },
    { lang: "Expressjs", level: "85%", logo: <SiExpress /> },
    { lang: "MongoDB", level: "88%", logo: <DiMongodb /> },
    { lang: "MySQL", level: "90%", logo: <DiMysql /> },
    { lang: "PHP", level: "70%", logo: <DiPhp /> },
  ];
  const frontend = [
    { lang: "React", level: "90%", logo: <DiReact /> },
    { lang: "Nextjs", level: "90%", logo: <SiNextdotjs /> },
    { lang: "HTML", level: "90%", logo: <DiHtml5 /> },
    { lang: "CSS3", level: "90%", logo: <DiCss3 /> },
    { lang: "Tailwindcss", level: "90%", logo: <SiTailwindcss /> },
    { lang: "Bootstrap", level: "90%", logo: <BsBootstrap /> },
  ];
  const getColorClass = (percentage:any) => {
    if (percentage >= 75) return 'bg-green-500';
    if (percentage >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  return (
    <div>
      <div className="flex justify-center font-bold text-3xl my-5">
        <h1>About me</h1>
      </div>
      <div className="my-5 px-0 md:px-10 mx-0 md:mx-10 space-y-5">
        <div className="flex flex-col lg:flex-row justify-center lg:space-x-10 px-0 sm:px-6">
          <div className="flex justify-center lg:justify-start mb-5 lg:mb-0">
            <img
              src="/user.png"
              alt="me"
              className="rounded-md w-48 h-48 lg:w-60 lg:h-60"
            />
          </div>
          <div className="space-y-5 flex flex-col lg:items-start">
            <h1 className="w-full lg:max-w-[741px] text-xl text-[18px] text-gray-700 font-[400] bg-transparent px-2 md:px-0 text-start lg:text-left">
              I'm a full-stack web developer with a passion for building
              beautiful, functional, and scalable web applications. I'm
              currently a student at Rwanda Coding Academy learning software
              development & Embedded Systems. I'm also a self-taught developer
              with a keen interest in learning new technologies and frameworks.
              I'm familiar with different languages & Frameworks and I'm looking
              forward to learning more about them and other technologies.
            </h1>
            <div className="flex justify-center my-5 lg:justify-start">
              <button className="p-2 px-4 text-white bg-blue-600 rounded-md">
                Resume
              </button>
            </div>
            <div className="rounded-lg bg-transparent space-y-4 text-start px-6 lg:px-0 lg:text-left">
              <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
              <p className="text-lg text-gray-700">Name: Abayo Hirwa Jovin</p>
              <p className="text-lg text-gray-700">Age: 16</p>
              <p className="text-lg text-gray-700">Location: Rwanda</p>
              <p className="text-lg text-gray-700">
                Email: abayohirwajovin@gmail.com
              </p>
            </div>
            <div className="space-y-4 text-start px-6 lg:px-0 lg:text-left">
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <div className="skills-container flex flex-col md:flex-row flex-wrap justify-center">
    <div className="skill-card bg-gray-800 shadow-lg p-8 m-4 rounded-lg text-white">
      <h1 className="font-bold text-2xl mb-4">Frontend Development</h1>
      {frontend.map((skill, index) => (
        <div key={index} className="flex items-center text-lg space-x-4 mb-4">
          <div className="text-3xl">{skill.logo}</div>
          <h1 className="w-24">{skill.lang}</h1>
          <div className="skill-level w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <div
              className={`${getColorClass(skill.level)} h-full`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
          <h1 className="w-12 text-right">{skill.level}</h1>
        </div>
      ))}
    </div>
    <div className="skill-card bg-gray-800 shadow-lg p-8 m-4 rounded-lg text-white">
      <h1 className="font-bold text-2xl mb-4">Backend Development</h1>
      {backend.map((skill, index) => (
        <div key={index} className="flex items-center text-lg space-x-4 mb-4">
          <div className="text-3xl">{skill.logo}</div>
          <h1 className="w-24">{skill.lang}</h1>
          <div className="skill-level w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <div
              className={`${getColorClass(skill.level)} h-full`}
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
          <h1 className="w-12 text-right">{skill.level}</h1>
        </div>
      ))}
    </div>
  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
