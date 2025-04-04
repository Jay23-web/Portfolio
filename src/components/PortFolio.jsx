  import React from "react";
  import thriftkart from "../../public/thriftkart.png";
  import simon from "../../public/simon.png";
  import tictactoe from "../../public/tictactoe.png";
  import restaurant from "../../public/restaurant.png";
  function PortFolio() {
    const cardItem = [
      {
        id: 1,
        logo: thriftkart,
        name: "ThriftKart",
        link : "https://thriftkart-frontend.vercel.app/"
      },
    ,
      {
        id: 2,
        logo: simon,
        name: "Simon Says Game",
        link : ""

      },
      {
        id: 3,
        logo: tictactoe,
        name: "Tic-Tac-Toe Game",
        link : "https://tictactoegamejay.netlify.app/"

      },
      {
        id: 4,
        logo: restaurant,
        name: "Restaurant",
        link : "https://restaurant-website-jay.netlify.app/"

      }
      
    ];

    return (
      <div
        name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:px-12 lg:px-16 xl:px-20 mt-10"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5 text-blue-500 tracking-wider">PortFolio</h1>
          <span className="underline text-lg ">Featured Projects</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-6">
            {cardItem.map(({ id, logo, name ,link }) => (
              <div
                className="bg-slate-800 hover:scale-105 hover:bg-blue-800 text-white font-bold flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transition duration-300 ease-in-out"
                key={id}
              >
                < a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={logo}  
                  className="w-[200px] h-[200px] sm:w-[210px] sm:h-[150px] md:w-[250px] md:h-[180px] lg:w-[250px] lg:h-[200px] p-1 rounded-lg border-[2px]"
                  alt={logo}
                /> 
                <div className="text-center">
                  <div className="font-bold text-xl mb-2">{name}</div>
                </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  export default PortFolio;