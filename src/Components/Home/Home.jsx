import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AlimeImage from "../../Images/alime.png";
import CV from "../../CV/CV.pdf";
import Skills from "./../Skills/Skills";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Certificates from "../Certificates/Certificates";

export default function Home() {
  return (
    <>
    <div className="top-0 absolute" id="home-section"></div>
      <div className=" container-strap-fluid bg-[#d8d9e2] dark:bg-[#010019] ">
        <div style={{ paddingTop: "4.375rem" }}></div>

        <div className=" container-strap ">
          <div  className="row scroll-m-24">
            <div className="col-12  col-md-6  justify-content-center justify-content-md-start text-center md:text-start">
              <h3 className="text-black dark:text-white text-xl mb-1">
                Hello, i am
              </h3>
              <div className="d-flex justify-content-center justify-content-md-start text-center md:text-start">
                <h1 className="text-3xl dark:text-[#fed29b] min-h-10 text-black font-font w-max ">
                  <Typewriter
                    words={["Sayed Ragheb", "Front End Developer"]}
                    loop={0}
                    cursor={false}
                    typeSpeed={90}
                    deleteSpeed={70}
                    delaySpeed={1000}
                  />
                </h1>
              </div>

              <p className="dark:text-white">
                I design exceptional and innovative websites.
              </p>
              <div className=" d-flex gap-5 justify-content-center justify-content-md-start text-center md:text-start">
                <a
                  href="https://www.facebook.com/profile.php?id=100015705041095"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className=" mt-6 text-2xl px-4 py-2 rounded-md bg-neutral-50 hover:text-white hover:scale-105 text-[#092147] hover:bg-[#092147] dark:hover:bg-[#092147] dark:bg-[#336da1] dark:text-white transition-all duration-500"
                    icon={faFacebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/elkadii92/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className=" mt-6 text-2xl px-4 py-2 rounded-md bg-custom-gradient filter-custom-gradient-filter hover:scale-105 transition-all duration-500 dark:text-white hover:text-white dark:hover:text-black"
                    icon={faInstagram}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/el-kadi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className=" mt-6 text-2xl px-4 py-2 rounded-md  hover:text-[#006994] hover:scale-105 text-[#5294ff] hover:bg-white bg-[#000000] dark:hover:bg-[#006994] dark:bg-[#d4ad7ce8] dark:text-white transition-all duration-500"
                    icon={faLinkedin}
                  />
                </a>
                <a
                  href="https://github.com/EL-KADI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className=" mt-6 text-2xl px-4 py-2 rounded-md  dark:hover:text-red-700 dark:bg-white dark:hover:bg-white hover:scale-105 text-red-700 hover:text-white hover:bg-red-600 bg-white dark:text-black  transition-all duration-500"
                    icon={faGithub}
                  />
                </a>
              </div>

              <a href={CV} target="_blank" rel="noopener noreferrer">
                <div className=" mt-5 relative z-20">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white  focus:outline-none dark:bg-gradient-to-br dark:from-[#FED29B] dark:to-blue-500 dark:group-hover:from-[#FED29B] dark:group-hover:to-[#FED29B]">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 dark:group-hover:text-[#0C0B1F]">
                      Download CV
                      <FontAwesomeIcon
                        className="ms-2 text-[0.95rem]"
                        icon={faDownload}
                      />
                    </span>
                  </button>
                </div>
              </a>
            </div>
            <div className="col-12  col-md-6  ">
              <div className="d-flex justify-content-center justify-content-md-end text-center md:text-end mt-28 md:mt-10">
                <div className=" flex justify-center items-center w-[80%] aspect-square h-[80%] rounded-full   -translate-y-10 dark:bg-gradient-to-r dark:from-customDark dark:to-customLight bg-gradient-to-r from-red-100 to-pink-100">
                  <div className=" d-flex justify-content-center align-items-center align-content-center mx-auto">
                    <img
                      className=" h-[120%] w-[100%] xl:-translate-y-20 lg:-translate-y-16 sm:-translate-y-16 md:-translate-y-14 xl:translate-x-2 translate-x-1  -translate-y-16"
                      src={AlimeImage}
                      alt="My Photo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Skills />
          <Projects />
          <Certificates/>
          <Contact />
         
        </div>
      </div>
    </>
  );
}
