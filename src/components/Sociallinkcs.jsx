import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { BsFilePersonFill } from "react-icons/bs";

const Sociallinkcs = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/kangadda-shiva-reddy-5b8031169/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/sh1vaReddy",
    },
    {
      id: 3,
      child: (
        <>
          E-Mail <IoMdMailOpen size={30} />
        </>
      ),
      href: "mailto:kanagaddashivareddy@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFilePersonFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-tr-md",
      download: true,
    },
  ];
  return (
    <div className="hidden  lg:flex flex-col top-[35%] left-0 fixed">
        <ul></ul>
       {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      
    </div>
  );
};

export default Sociallinkcs;
