import { useState, useEffect, useRef } from "react";
import Design from "../../Images/design.png";
import { faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { RiNextjsFill } from "react-icons/ri";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss } from "react-icons/si";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SiTypescript } from "react-icons/si";
import { faNpm } from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsVisible(false);
      } else {
        const rect = divRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="row md:mt-64 lg:mt-40  xl:mt-24 2xl:mt-7 mt-14 "
        id="skills-section"
      >
        <div className="col-12 justify-content-center text-center pointer-events-none">
          <h2 className="dark:text-[#FED29B] text-3xl font-font dark:bg-[#0d121d] rounded-2xl bg-pink-100 text-sky-500 border-sky-300 dark:border-[#FED29B] border w-max mx-auto px-9 py-5 h-max mt-10 mb-10">
            Skills
          </h2>
        </div>
      </div>

      <div
        ref={divRef}
        className={`row group transition-all ease-in-out items-center ${
          isVisible
            ? "translate-x-0 opacity-100 duration-[2000ms]"
            : "-translate-x-96 opacity-0 duration-[100ms]"
        }`}
      >
        <div className="col-12 col-md-6 justify-content-center  ">
          <img
            className="w-[80%] md:w-[100%] lg:w-[80%] ms-5  lg:me-auto xl:mx-auto md:-ms-10 lg:ms-0"
            src={Design}
            alt="Design"
          />
        </div>
        <div className="col-4 col-md-2 mt-16">
          <div className="text-center">
            <FontAwesomeIcon
              className="dark:text-white text-black text-5xl md:scroll-m-64 xl:scroll-m-[17.4rem] sm:scroll-m-[41rem] scroll-m-[38rem]"
              id="skills-section-h4"
              icon={faHtml5}
            />
            <h4 className="dark:text-white text-black">HTML</h4>
            <FontAwesomeIcon
              className="dark:text-white text-black text-5xl mt-10"
              icon={faReact}
            />
            <h4 className="dark:text-white text-black mb-10">React</h4>
            <RiNextjsFill className=" text-5xl   mx-auto dark:text-white text-black" />

            <h4 className="dark:text-white text-black mb-10 ">Next.js</h4>
            <SiTypescript className=" text-4xl   mx-auto dark:text-white text-black" />

            <h4 className="dark:text-white text-black mt-1">TypeScript</h4>
          </div>
        </div>
        <div className="col-4 col-md-2 mt-16">
          <div className="text-center">
            <FontAwesomeIcon
              className="dark:text-white text-black text-5xl"
              icon={faCss3Alt}
            />
            <h4 className="dark:text-white text-black">CSS</h4>
            <SiTailwindcss className="dark:text-white text-black text-5xl mt-10 mx-auto" />
            <h4 className="dark:text-white text-black mb-10">Tailwind</h4>
            <FontAwesomeIcon
              className="dark:text-white text-black text-5xl"
              icon={faSass}
            />
            <h4 className="dark:text-white text-black mb-10">Sass</h4>
            <FontAwesomeIcon
              className="dark:text-white text-black text-5xl"
              icon={faNpm}
            />
            <h4 className="dark:text-white text-black -mt-1">Npm</h4>
          </div>
        </div>
        <div className="col-4 col-md-2 mt-16">
          <div className="text-center">
            <FontAwesomeIcon
              className="dark:text-white text-black text-5xl"
              icon={faJs}
            />
            <h4 className="dark:text-white text-black">Java Script</h4>
            <FontAwesomeIcon
              className="dark:text-white text-black text-5xl mt-10 md:mt-10 "
              icon={faBootstrap}
            />
            <h4 className="dark:text-white text-black mb-10">Bootstrap</h4>
            <svg
              className="  dark:text-white text-black mx-auto w-12 h-12"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15.907 11.998 10.332 9.23a.9.9 0 0 1-.16-.037l-.018-.007v6.554c0 .017.008.034.01.051l2.388-2.974 3.355-.82Z" />
              <path d="m11.463 4.054 5.579 3.323A4.02 4.02 0 0 1 18.525 9c.332.668.47 1.414.398 2.155a3.07 3.07 0 0 1-.745 1.65 3.108 3.108 0 0 1-1.55.951c-.022.007-.045.005-.07.01-.062.03-.126.057-.191.08l-2.72.667-1.992 2.48c-.18.227-.41.409-.67.534.047.034.085.077.137.107a2.05 2.05 0 0 0 1.995.035c.592-.33 2.15-1.201 4.636-2.892l.28-.19c1.328-.895 3.616-2.442 3.967-4.215a9.94 9.94 0 0 0-1.713-4.154 10.027 10.027 0 0 0-3.375-2.989 10.107 10.107 0 0 0-8.802-.418c1.162.287 2.287.704 3.354 1.243Z" />
              <path d="M5.382 17.082v-6.457a3.7 3.7 0 0 1 .45-1.761 3.733 3.733 0 0 1 1.238-1.34 3.915 3.915 0 0 1 3.433-.245c.176.03.347.084.508.161l5.753 2.856c.082.05.161.105.236.165a2.128 2.128 0 0 0-.953-1.455l-5.51-3.284c-1.74-.857-3.906-1.523-5.244-1.097a9.96 9.96 0 0 0-2.5 3.496 9.895 9.895 0 0 0 .283 8.368 9.973 9.973 0 0 0 2.73 3.322 17.161 17.161 0 0 1-.424-2.729Z" />
              <path d="m19.102 16.163-.272.183c-2.557 1.74-4.169 2.64-4.698 2.935a4.083 4.083 0 0 1-2 .53 3.946 3.946 0 0 1-1.983-.535 3.788 3.788 0 0 1-1.36-1.361 3.752 3.752 0 0 1-.51-1.85 1.812 1.812 0 0 1-.043-.26V9.143c0-.024.009-.046.01-.07-.056.02-.11.043-.162.07a1.796 1.796 0 0 0-.787 1.516v6.377a10.67 10.67 0 0 0 1.113 4.27 10.11 10.11 0 0 0 8.505-.53 10.022 10.022 0 0 0 3.282-2.858 9.936 9.936 0 0 0 1.75-3.97 19.615 19.615 0 0 1-2.845 2.216Z" />
            </svg>

            <h4 className="dark:text-white text-black">Flowbite</h4>
            <FontAwesomeIcon
              className=" text-5xl mt-10  mx-auto dark:text-white text-black"
              icon={faGithub}
            />

            <h4 className="dark:text-white text-black ">GitHub</h4>
          </div>
        </div>
      </div>
    </>
  );
}
