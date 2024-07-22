import Image from "next/image";
import React from "react";
import { CgMail } from "react-icons/cg";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Contacts = () => {
  const contactMe = [
    { icon: <FaGithub />, link: "https://github.com/AbayoHJovin" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/_hirwajovin/" },
    { icon: <CgMail />, link: "mailto:abayohirwajovin@gmail.com" },
    { icon: <FaWhatsapp />, link: "https://wa.me/+250798509561" },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/hirwa-jovin-1b8a872a7",
    },
    { icon: <FaFacebook />, link: "https://facebook.com" },
  ];

  return (
    <div className="my-5 px-4">
      <div className="text-center my-5">
        <h1 className="font-bold text-3xl">Contact Me</h1>
        <p className="text-sm md:text-base mt-2">
          Let's talk about something interesting
        </p>
      </div>
      <div className="md:flex items-center justify-center my-5">
        <div className="hidden md:block w-full md:w-1/2">
          <Image
            src="/contact.png"
            alt="let's talk"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h1 className="font-semibold text-2xl md:text-3xl">Get In Touch</h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-[586px] font-[550] mt-2">
            I am available on different social media platforms, and you can
            reach out to me to create something amazing.
          </p>
          <p className="text-gray-700 text-lg md:text-xl font-[550] mt-2">
            You can find me on:
          </p>
          <div className="flex flex-wrap text-4xl my-5 space-x-5">
            {contactMe.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-blue-600 text-white cursor-pointer p-3 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
