"use client";
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Starfield from "./starField";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Hero: React.FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative w-full h-screen overflow-hidden mx-0" id="home">
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 50], fov: 75 }}
          className="w-full h-full"
        >
          <Starfield />
        </Canvas>
      </div>

      <div className="relative bg-transparent text-black dark:text-white z-30 flex flex-col lg:flex-row text-center lg:text-start justify-around space-x-6 items-center w-full h-full  rounded-lg shadow-lg">
        <div className="lg:hidden">
          {loading ? (
            <Skeleton width={300} height={300} circle={true} />
          ) : (
            <Image
              src="/heroImage.png"
              alt="Hero image"
              width={300}
              height={300}
              className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] mx-auto md:mx-5 lg:mx-10 rounded-full"
            />
          )}
        </div>
        <div className="flex justify-center lg:justify-start w-full lg:w-auto">
          <div className="space-y-3 flex flex-col justify-center mx-4 sm:mx-6 md:mx-10 lg:mx-8 p-4 sm:p-6 md:p-10">
            {loading ? (
              <Skeleton width={300} height={50} />
            ) : (
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center lg:text-left">
                I&apos;m Abayo Hirwa Jovin
              </h1>
            )}
            {loading ? (
              <Skeleton width={400} height={50} />
            ) : (
              <p className="font-[600] text-xl sm:text-2xl text-center lg:text-left">
                I am a software developer
              </p>
            )}
            {loading ? (
              <Skeleton width={200} height={50} />
            ) : (
              <p className="text-[#6b7280] text-lg max-w-[30rem] text-center lg:text-left">
                I am a fullstack web developer. Open source Enthusiast and
                competitive programmer
              </p>
            )}
            {loading ? (
              <Skeleton width={200} height={50} />
            ) : (
              <div className="flex justify-center lg:justify-start">
                <a
                  href="#contacts"
                  className="bg-blue-600 flex justify-center lg:justify-start p-2 text-center items-center space-x-3 w-[150px] px-6 rounded-md text-white"
                >
                  <button>Let&apos;s talk</button>
                  <FaArrowRight className="text-white" />
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:block">
          {loading ? (
            <Skeleton width={300} height={300} circle={true} />
          ) : (
            <Image
              src="/heroImage.png"
              alt="Hero image"
              width={300}
              height={300}
              className="md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] mx-auto md:mx-5 lg:mx-10 rounded-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
