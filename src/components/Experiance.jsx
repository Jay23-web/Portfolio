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
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 " 
    >
      <div>
        <h1 className="tracking-wider text-3xl font-bold mb-5 text-blue-500 ">Experiance</h1>
        <p className="  ">
          I've more than 1 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px]  md:w-[200px] md:h-[200px]  shadow-md p-1 cursor-pointer hover:scale-110 duration-300 rounded-b-3xl "
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