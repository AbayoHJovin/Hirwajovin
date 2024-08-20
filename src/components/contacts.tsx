// import Image from "next/image";
// import React from "react";
// import { CgMail } from "react-icons/cg";
// import {
//   FaFacebook,
//   FaGithub,
//   FaInstagram,
//   FaLinkedin,
//   FaWhatsapp,
// } from "react-icons/fa";

// const Contacts = () => {
//   const contactMe = [
//     { icon: <FaGithub />, link: "https://github.com/AbayoHJovin" },
//     { icon: <FaInstagram />, link: "https://www.instagram.com/_hirwajovin/" },
//     { icon: <CgMail />, link: "mailto:abayohirwajovin@gmail.com" },
//     { icon: <FaWhatsapp />, link: "https://wa.me/+250798509561" },
//     {
//       icon: <FaLinkedin />,
//       link: "https://www.linkedin.com/in/hirwa-jovin-1b8a872a7",
//     },
//     { icon: <FaFacebook />, link: "https://facebook.com" },
//   ];

//   return (
//     <div className="my-5 px-4" id="contacts">
//       <div className="text-center my-5 text-black dark:text-white">
//         <h1 className="font-bold text-3xl">Contact Me</h1>
//         <p className="text-sm md:text-base text-[#6b7280] mt-2">
//           Let's talk about something interesting
//         </p>
//       </div>
//       <div className="flex flex-col md:flex-row items-center justify-center my-5">
//         <div className="md:w-1/2 mb-5 md:mb-0 flex justify-center">
//           <Image
//             src="/talk-light.png"
//             alt="let's talk"
//             width={500}
//             height={500}
//             className="object-cover"
//           />
//         </div>
//         <div className="md:w-1/2 p-4">
//           <h1 className="font-semibold text-2xl md:text-3xl">Get In Touch</h1>
//           <p className="text-[#6b7280] text-lg md:text-xl max-w-[586px] font-[550] mt-2">
//             I am available on different social media platforms, and you can
//             reach out to me to create something amazing.
//           </p>
//           <p className="text-[#6b7280] text-lg md:text-xl font-[550] mt-2">
//             You can find me on:
//           </p>
//           <div className="flex flex-wrap items-center text-4xl my-5 space-x-5">
//             {contactMe.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.link}
//                 className="bg-blue-600 text-white cursor-pointer p-3 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {item.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contacts;












import Image from "next/image";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CgMail } from "react-icons/cg";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Contacts = () => {
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="my-5 px-4" id="contacts">
      <div className="text-center my-5 text-black dark:text-white">
        {loading ? (
          <Skeleton width={200} height={40} />
        ) : (
          <h1 className="font-bold text-3xl">Contact Me</h1>
        )}
        {loading ? (
          <Skeleton width={300} height={20} className="mt-2" />
        ) : (
          <p className="text-sm md:text-base text-[#6b7280] mt-2">
            Let's talk about something interesting
          </p>
        )}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center my-5">
        <div className="md:w-1/2 mb-5 md:mb-0 flex justify-center">
          {loading ? (
            <Skeleton width={500} height={500} />
          ) : (
            <Image
              src="/talk-light.png"
              alt="let's talk"
              width={500}
              height={500}
              className="object-cover"
            />
          )}
        </div>
        <div className="md:w-1/2 p-4">
          {loading ? (
            <Skeleton width={250} height={30} />
          ) : (
            <h1 className="font-semibold text-2xl md:text-3xl">Get In Touch</h1>
          )}
          {loading ? (
            <Skeleton width={400} height={20} className="mt-2" count={2} />
          ) : (
            <>
              <p className="text-[#6b7280] text-lg md:text-xl max-w-[586px] font-[550] mt-2">
                I am available on different social media platforms, and you can
                reach out to me to create something amazing.
              </p>
              <p className="text-[#6b7280] text-lg md:text-xl font-[550] mt-2">
                You can find me on:
              </p>
            </>
          )}
          <div className="flex flex-wrap items-center text-4xl my-5 space-x-5">
            {loading
              ? Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton
                      key={index}
                      circle={true}
                      width={50}
                      height={50}
                    />
                  ))
              : contactMe.map((item, index) => (
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
