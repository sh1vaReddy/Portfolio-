import React from "react";
import Css from "../assets/Css.png";
import ExpressJS from "../assets/ExpressJS.png";
import Github from "../assets/Github.png";
import HTML from "../assets/HTML-5.png";
import JS from "../assets/JS.png";
import Nodejs from "../assets/Nodejs.jpg";
import ReactJs from "../assets/ReactJs.png";
import taliwind from "../assets/tailwind.jpeg";
import Mongodb from '../assets/Mongodb.jpeg'

const Experience = () => {
  const skills = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
        id: 3,
        src: JS,
        title: "JavaScript",
        style: "shadow-yellow-500",
      },
    {
      id: 4,
      src: ReactJs,
      title: "React",
      style: "shadow-blue-900",
    },
    {
      id: 5,
      src: Nodejs,
      title: "Nodejs",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: ExpressJS,
      title: "ExpressJS",
      style: "shadow-yellow-500",
    },
    {
        id: 7,
        src: Mongodb,
        title: "Mongodb",
        style: "shadow-green-500",
      },
      {
        id: 8,
        src: taliwind,
        title: "taliwind CSS",
        style: "shadow-yellow-500",
      },
    
    {
      id: 9,
      src: Github,
      title: "Github",
      style: "shadow-gray-500",
    },
  ];
  
  return (
    <div
    name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4  border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6 text-2xl">This are the technologies I've worked with</p>
        </div>
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8  text-center py-8 px-12 sm:px-0
        "
        >
          {skills.map(({ id, src, title, style }) => (
            <div key={id}
             className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg" ${style}`} >
              <img src={src} alt="Html" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
