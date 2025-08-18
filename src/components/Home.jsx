import jay_image from "../../public/jay_image.jpg";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Hello, I'm a JAY PRAJAPATI,</span>


            <div className="flex space-x-1 text-2xl md:text-4xl">

              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-neonTeal font-bold"
                strings={[" Developer", " Programmer", " Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-lg md:text-md text-justify">
              As a motivated Computer Engineering student, I seek an
              opportunity to apply theoretical knowledge in practical
              settings, contribute to innovative projects, and gain hands-on
              experience in this field. Skilled in programming languages and
              software development, I am eager to make a meaningful
              contribution to technological advancement.
            </p>
            <br />

            
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">

              
            
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5" >
                  <SiMongodb className=" py-0.5 text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer  border-neonTeal hover:text-neonTeal" />
                  <SiExpress className="  py-1  text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full   border-neonTeal border-[2px] cursor-pointer hover:text-neonTeal" />
                  <FaReact className=" py-0.5 text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]  border-neonTeal cursor-pointer hover:text-neonTeal" />
                  <FaNodeJs className=" py-1 text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]  border-neonTeal cursor-pointer hover:text-neonTeal" />
                </div>
              </div>

            <div className="flex gap-4 mt-6 m-6">
  {/* CTA #1 - Hire Me → Contact Section */}
  <a href="https://wa.me/9510565311" target="_blank"  className="bg-neonTeal h text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-70 ">
    Hire Me
  </a>

  {/* CTA #2 - Download CV → direct CV file */}
  <a 
    href="/jay_resume.pdf"   // 👈 place your resume in /public/jay_resume.pdf
    download="Jay_Prajapati_Resume.pdf"
    className="border border-neonTeal text-neonTeal font-semibold px-6 py-3 rounded-lg hover:bg-neonTeal hover:text-black"
  >
    Download CV
  </a>
</div>


            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:ml-auto md:mr-6 mt-8 md:mt-20 order-1">
            <img
              src={jay_image }
              // className=" bg-[#fff] md:w-[300px] md:h-[350px] w-[250px] h-[250px] object-cover"
              className=" bg-[#fff] md:w-[250px] md:h-[300px] w-[200px] h-[250px] object-cover border-2 border-neonTeal"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;