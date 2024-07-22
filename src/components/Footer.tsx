import React from "react";
import { CgCopyright } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-10 py-4 text-[#6b7280]">
      <div className="container mx-auto text-center flex flex-col items-center justify-center md:justify-between">
        <div className="flex items-center text-sm md:text-base">
          <CgCopyright className="mr-2" />
          <span>2024 Hirwa Jovin - All Rights Reserved</span>
        </div>
        <div className="mt-2 md:mt-0 text-sm md:text-base">
          <span>Designed with love by Hirwa Jovin</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
