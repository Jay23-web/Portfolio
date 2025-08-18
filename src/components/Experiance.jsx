import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import reactjs from "../../public/reactjs.png";
import javascript from "../../public/javascript.png";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    }, 
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    }, 
    
    {
      id: 4,
      logo: reactjs,
      name: "React Js",
    },
    
    {
      id: 5,
      logo: java,
      name: "Java",
    },
    
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-12 lg:px-16 xl:px-20 mt-10" 
    >
      <div>
        <h1 className="tracking-wider text-3xl font-bold mb-5  text-neonTeal  ">Experiance</h1>
        <p className="text-lg font-mono mb-5">
          I've more than 1 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" bg-slate-800 hover:scale-105 hover:bg-darkNavy border border-transparent hover:border-neonTeal text-white font-bold flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transition duration-300 ease-in-out"
              key={id}
            >
              <img src={logo} className="w-[100px]  h-[150px]rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;