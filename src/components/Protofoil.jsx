import React from "react";
import nikelading from "../assets/nikelading.png";
import Weather from '../assets/Weather.webp'
import logecommerce from "../assets/logecommercec.png";
import Conatcapi from "../assets/Conatcapi.jpeg";
import Ecommerce from '../assets/Ecommerce.jpg';

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: Weather,project:"Weather-Forcasting",
    Description:"It's Weather Forcasting Web app to show Teampterue,wind speed,loc,lat etc... with representative Location using OpeanWeatherApi using axios for featching Real time data.",
    link:"https://github.com/sh1vaReddy/Weather-forecasting"  
  },
    { id: 2, src: Conatcapi,project:"Conactct-API",Description:"It's backend application using NodeJs,ExpressJS and Mongodb for stroing data it's used create,update,delete,get the contact from Mongodb database.",
    link:"https://github.com/sh1vaReddy/Conatct-API"
  },
    { id: 3, src: logecommerce,project:"E-Commerce",Description:"The project is MERN stack E-Commerce project where we can but and sell peoject and login,logout with jwt for state mangement using redux toolkit.",
    link:"https://github.com/sh1vaReddy/mernProjectEcommerce"
  },
    { id: 4, src: nikelading,project:"Nike-Landing-Page",Description:"It's responsive and attaractive nike-landing-page develop using Reactjs with tailwind css.",
    link:"https://github.com/sh1vaReddy/Nike-landing-page"
  },
    { id: 5, src: Ecommerce,project:"E-Commerce Project",Description:"It's backend application from E-Commerce using NodeJs and ExpressJs for data storing data we use mongodb and for authentication we use JWT token.",
    link:"https://github.com/sh1vaReddy/backend"
  },
  ];

  return (
    <div
    name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-2xl">Check Out Some Of My Work Right Here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,project,Description,link}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={`Project ${id}`}
                className="rounded-md duration-200 hover:scale-110"
              />
              <div className="flex items-center justify-center font-bold text-xl">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">Demo</button>
                </a>
                <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">Code</button>
                </a>
              </div>
              <div className="w-full flex items-center flex-wrap gap-8 mt-4 hover:scale-100">
                
              </div>
              <div className="flex items-start justify-center text-2xl font-bold">
                <p>{project}</p>
              </div>
              <div className="flex items-center  text-gray-400 font-bold py-6 px-6">
  {Description}
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
