import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-neonTeal tracking-wider  " >ABOUT</h1>
        <p>
          Hello, I'm Jay, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-neonTeal font-semibold text-xl">
          Education & Training
        </h1>
        <span>
           Bachelor's in Computer Engineering [L.D. College Of Engineering] 2020 - 2025 Percentage: 64.60.  <br />
           Higher Secondary Education [Pramukh Swami Vidhyalaya] 2019 - 2020 Percentage: 57.80. <br />
           Matriculation [Navyug Vidhyalaya] 2017- 2018 Percentage: 74.17.
        </span>
        <br />

        <br />
        <br />
        <h1 className="  text-neonTeal font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          3 months of experience in [Digi Aerotech] as a [Wordpress Devloper] <br />
          Currently working in [Elsner Technologies] as a [MERN Stack Devloper Intern]
        </span>


      </div>

    </div>

  );
}

export default About;