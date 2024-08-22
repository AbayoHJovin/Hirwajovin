import Image from "next/image";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Education = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="my-5 px-4" id="edu">
      <div className="text-center my-5">
        {loading ? (
          <>
            <Skeleton width={200} height={30} />
            <Skeleton width={300} height={15} className="mt-2" />
          </>
        ) : (
          <>
            <h1 className="font-bold text-3xl text-black dark:text-white">
              My Education
            </h1>
            <p className="text-sm md:text-base mt-2 text-[#6b7280]">
              Education Is Not The Learning Of Facts, But The Training Of The
              Mind To Think.
            </p>
          </>
        )}
      </div>
      <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden mx-auto md:w-4/5 lg:w-2/5">
        <div className="md:flex">
          <div className="relative w-full h-48 md:w-1/2 md:h-auto">
            {loading ? (
              <Skeleton width="100%" height="100%" />
            ) : (
              <Image
                src="/rca.png"
                alt="Rwanda Coding Academy"
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
          <div className="p-4 md:p-6 md:w-1/2">
            {loading ? (
              <>
                <Skeleton width={200} height={25} />
                <Skeleton width={300} height={20} className="mt-2" />
              </>
            ) : (
              <>
                <h2 className="font-bold text-xl md:text-2xl text-black dark:text-black">
                  Bachelor Of Computer Science (BCS)
                </h2>
                <p className="text-sm font-[500] text-[#6b7280] md:text-base mt-2">
                  Rwanda Coding Academy Of Software Development | RCA
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
