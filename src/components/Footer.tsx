

"use client";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CgCopyright } from "react-icons/cg";

const Footer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-gray-100 dark:bg-[#000308] px-10 py-4 text-[#6b7280]">
      <div className="container mx-auto text-center flex flex-col items-center justify-center md:justify-between">
        <div className="flex items-center text-sm md:text-base">
          {loading ? (
            <Skeleton width={200} height={20} />
          ) : (
            <>
              <CgCopyright className="mr-2" />
              <span>2024 Hirwa Jovin - All Rights Reserved</span>
            </>
          )}
        </div>
        <div className="mt-2 md:mt-0 text-sm md:text-base">
          {loading ? (
            <Skeleton width={250} height={20} />
          ) : (
            <span>Designed with love by Hirwa Jovin</span>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
