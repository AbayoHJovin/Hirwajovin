import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <div className="my-5 px-4">
      <div className="text-center my-5">
        <h1 className="font-bold text-3xl">My Education</h1>
        <p className="text-sm md:text-base mt-2">
          Education Is Not The Learning Of Facts, But The Training Of The Mind
          To Think.
        </p>
      </div>
      <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden mx-auto md:w-4/5 lg:w-2/5">
        <div className="md:flex">
          <div className="relative w-full h-48 md:w-1/2 md:h-auto">
            <Image
              src="/rca.png"
              alt="Rwanda Coding Academy"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4 md:p-6 md:w-1/2">
            <h2 className="font-bold text-xl md:text-2xl">
              Bachelor Of Computer Science (BCS)
            </h2>
            <p className="text-sm md:text-base mt-2">
              Rwanda Coding Academy Of Software Development | RCA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
