import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    }
  ];
  return (
    <div
      name="Portfolio"
      className=" max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-blue-500 tracking-wider" >PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
  {cardItem.map(({ id, logo, name }) => (
    <div
      className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300 flex flex-col items-center justify-between"
      key={id}
    >
      <img
        src={logo}
        className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
        alt=""
      />
      <div className="text-center">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
      <div className="flex justify-center gap-3">
        <button className="bg-slate-900 hover:scale-105 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded">
          View
        </button>
        <button className="bg-slate-900 hover:scale-105 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded">
          Source code
        </button>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

export default PortFolio;