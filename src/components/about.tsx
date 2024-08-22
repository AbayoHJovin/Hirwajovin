import { useEffect, useState } from "react";
import { BsBootstrap } from "react-icons/bs";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "./ui/tabs";
import {
  DiCss3,
  DiHtml5,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiPhp,
  DiReact,
} from "react-icons/di";
import {
  SiExpress,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function About() {
  const [loading, setLoading] = useState(true);

  const backend = [
    { lang: "Nodejs", logo: <DiNodejs />, color: "#1fb04d" },
    { lang: "Expressjs", logo: <SiExpress />, color: "#404040" },
    { lang: "PHP", logo: <DiPhp />, color: "#777BB4" },
  ];

  const frontend = [
    { lang: "React", logo: <DiReact />, color: "#61DAFB" },
    {
      lang: "Nextjs",
      logo: <SiNextdotjs />,
      color: "#FFFF",
      bg: "gray",
    },
    { lang: "HTML", logo: <DiHtml5 />, color: "#E34F26" },
    { lang: "CSS3", logo: <DiCss3 />, color: "#1572B6" },
    { lang: "Tailwindcss", logo: <SiTailwindcss />, color: "#06B6D4" },
    { lang: "Bootstrap", logo: <BsBootstrap />, color: "#7952B3" },
  ];

  const Databases = [
    { lang: "MongoDB", logo: <DiMongodb />, color: "#47A248" },
    { lang: "MySQL", logo: <DiMysql />, color: "#00758F" },
  ];

  const Others = [{ lang: "Python", logo: <SiPython /> }];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="about"
      className="bg-white dark:bg-black text-black dark:text-white"
    >
      <div className="flex justify-center font-bold text-3xl my-5">
        {loading ? <Skeleton height={40} width={200} /> : <h1>About me</h1>}
      </div>
      <div className="my-5 px-0 md:px-10 mx-0 md:mx-10 space-y-5">
        <div className="flex flex-col lg:flex-row justify-center lg:space-x-10 px-0 sm:px-6">
          <div className="flex justify-center lg:justify-start mb-5 lg:mb-0">
            {loading ? (
              <Skeleton
                className="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60"
                circle={true}
              />
            ) : (
              <img
                src="/heroImage.png"
                alt="me"
                className="rounded-md w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60"
              />
            )}
          </div>
          <div className="space-y-5 flex flex-col lg:items-start">
            {loading ? (
              <Skeleton width="100%" height={200} />
            ) : (
              <h1 className="w-full lg:max-w-[741px] text-xl text-[18px] text-[#6b7280] font-[400] bg-transparent px-2 md:px-0 text-start lg:text-left">
                I'm a full-stack web developer who loves creating web
                applications that are both beautiful and functional. I'm
                currently studying software development and embedded systems at
                Rwanda Coding Academy. I've also learnt a lot about coding and
                enjoy learning new technologies and frameworks. I'm familiar
                with various programming languages and frameworks, and I'm eager
                to keep learning more.
              </h1>
            )}
            <div className="flex justify-center my-5 lg:justify-start">
              {loading ? (
                <Skeleton width={200} height={50} />
              ) : (
                <button className="p-2 px-4 text-white bg-blue-600 rounded-md">
                  Resume
                </button>
              )}
            </div>
            <div className="rounded-lg bg-transparent space-y-4 text-start px-6 lg:px-0 lg:text-left">
              {loading ? (
                <Skeleton width={200} height={50} />
              ) : (
                <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
              )}
              {loading ? (
                <Skeleton count={4} height={30} />
              ) : (
                <>
                  <p className="text-lg text-[#6b7280]">
                    Name: Abayo Hirwa Jovin
                  </p>
                  <p className="text-lg text-[#6b7280]">Age: 16</p>
                  <p className="text-lg text-[#6b7280]">Location: Rwanda</p>
                  <p className="text-lg text-[#6b7280]">
                    Email: abayohirwajovin@gmail.com
                  </p>
                </>
              )}
            </div>
            <div className="space-y-4 text-start px-6 lg:px-0 lg:text-left">
              <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
              <Tabs defaultValue="frontend" className="w-full">
                <TabsList className="flex overflow-x-auto whitespace-nowrap w-full space-x-2">
                  {loading ? (
                    <Skeleton width={100} height={20} count={4} />
                  ) : (
                    <>
                      <TabsTrigger value="frontend" className="flex-shrink-0">
                        Frontend
                      </TabsTrigger>
                      <TabsTrigger value="backend" className="flex-shrink-0">
                        Backend
                      </TabsTrigger>
                      <TabsTrigger value="databases" className="flex-shrink-0">
                        Databases
                      </TabsTrigger>
                      <TabsTrigger value="others" className="flex-shrink-0">
                        Others
                      </TabsTrigger>
                    </>
                  )}
                </TabsList>

                <TabsContent value="frontend">
                  {loading ? (
                    <Skeleton count={2} height={50} />
                  ) : (
                    <div className="grid grid-cols-1 sssm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center">
                      {frontend.map((skill, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center space-y-2 mb-4"
                        >
                          <div
                            className="p-2 rounded-full text-6xl"
                            style={{
                              color: skill.color,
                              backgroundColor: skill.bg,
                            }}
                          >
                            {skill.logo}
                          </div>
                          <h1 className="text-black dark:text-white">
                            {skill.lang}
                          </h1>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="backend">
                  {loading ? (
                    <Skeleton count={2} height={50} />
                  ) : (
                    <div className="grid grid-cols-1 sssm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center">
                      {backend.map((skill, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center space-y-2 mb-4"
                        >
                          <div
                            className="text-6xl"
                            style={{ color: skill.color }}
                          >
                            {skill.logo}
                          </div>
                          <h1 className="text-black dark:text-white">
                            {skill.lang}
                          </h1>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="databases">
                  {loading ? (
                    <Skeleton count={2} height={50} />
                  ) : (
                    <div className="grid grid-cols-1 sssm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center">
                      {Databases.map((skill, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center space-y-2 mb-4"
                        >
                          <div
                            className="text-6xl"
                            style={{ color: skill.color }}
                          >
                            {skill.logo}
                          </div>
                          <h1 className="text-black dark:text-white">
                            {skill.lang}
                          </h1>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="others">
                  {loading ? (
                    <Skeleton count={2} height={50} />
                  ) : (
                    <div className="grid grid-cols-1 sssm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center">
                      {Others.map((skill, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center space-y-2 mb-4"
                        >
                          <div className="text-6xl">{skill.logo}</div>
                          <h1 className="text-black dark:text-white">
                            {skill.lang}
                          </h1>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
