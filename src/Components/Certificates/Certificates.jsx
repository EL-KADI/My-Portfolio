import { useState, useEffect, useRef } from "react";
import MetaCertificate from "../../Images/Meta Certificate.jpg";
import MetaDiplom from "../../CV/Diploma.pdf";

export default function Certificates() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("project-section");
      const projectsSectionTop =
        projectsSection?.getBoundingClientRect().top || 0;
      const projectsSectionBottom =
        projectsSection?.getBoundingClientRect().bottom || 0;

      if (
        window.scrollY === 0 ||
        (projectsSectionTop < window.innerHeight && projectsSectionBottom > 0)
      ) {
        setIsVisible(false);
      } else {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="row mt-28">
        <div className="col-12 justify-content-center text-center pointer-events-none ">
          <h2 className="dark:text-[#FED29B] text-3xl font-font dark:bg-[#0d121d] rounded-2xl bg-pink-100 text-sky-500 border-sky-300 dark:border-[#FED29B] border w-max mx-auto px-9 py-5 h-max mt-10 mb-10">
            Certificates
          </h2>
        </div>
      </div>

      <div
        ref={sectionRef}
        className={`row transition-all ease-in-out  ${
          isVisible
            ? "translate-x-0 opacity-100 duration-[2000ms]"
            : "-translate-x-96 opacity-0 duration-[0ms]"
        }`}
      >
        <div className="scroll-m-48" id="certificates-section"></div>
        <div className="col-12 col-lg-6 col-sm-10 col-md-8 justify-content-center mx-auto mb-10">
          <a href={MetaDiplom} target="_blank" rel="noopener noreferrer">
            <img
              src={MetaCertificate}
              alt="Meta Certificate"
              className="rounded-xl hover:scale-105 transition-all duration-500"
            />
          </a>
        </div>
        <div className="col-12 col-lg-6 col-sm-10 col-md-8 justify-content-center mx-auto mb-10">
          <a href={MetaDiplom} target="_blank" rel="noopener noreferrer">
            <img
              src={MetaCertificate}
              alt="Meta Certificate"
              className="rounded-xl hover:scale-105 transition-all duration-500"
            />
          </a>
        </div>
      </div>
    </>
  );
}
