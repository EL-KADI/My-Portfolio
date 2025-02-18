import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home-section");
  const navRef = useRef(null);

  const checkTimeAndSetMode = () => {
    const now = new Date();
    const hours = now.getHours();
    const isNight = hours >= 18 || hours < 6;
    setIsDarkMode(isNight);
    document.documentElement.classList.toggle("dark", isNight);
  };

  useEffect(() => {
    checkTimeAndSetMode();
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const sections = [
      "home-section",
      "skills-section-h4",
      "project-section-row",
      "certificates-section",
      "contact-section-row",
    ];

    const observers = sections.map((id) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { threshold: 0.2 }
        );
        observer.observe(sectionElement);
        return observer;
      }
      return null;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const getNavLinkClass = (sectionId) => {
    return activeSection === sectionId
      ? "text-[#0EA5E9] dark:text-[#fed29b] "
      : "text-gray-900 dark:text-white hover:text-[#0EA5E9] dark:hover:text-[#fed29b]  ";
  };

  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <>
      <nav
        className="bg-[#F4F5FC] border-gray-200  dark:bg-gray-900 fixed w-full z-50 shadow-gray-400 shadow-sm-light dark:shadow-gray-950"
        ref={navRef}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <p
              href="#home-section"
              className="self-center text-[1.688rem]  font-bold whitespace-nowrap dark:text-[#fed29b] uppercase text-black font-font"
            >
              Sayed Ragheb
            </p>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-200 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } w-full lg:block lg:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium lg:items-center flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-[#e6e6e696] lg:flex-row lg:space-x-2 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-[#F4F5FC] dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              {[
                { id: "home-section", label: "Home" },
                { id: "skills-section-h4", label: "Skills" },
                { id: "project-section-row", label: "Projects" },
                { id: "certificates-section", label: "Certificates" },
                { id: "contact-section-row", label: "Contact" },
              ].map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => handleNavLinkClick(e, section.id)}
                    className={`block py-2 px-3 transition-all duration-[250ms] rounded ${getNavLinkClass(
                      section.id
                    )}`}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
              <li className="w-max">
                <button
                  className={`block py-2 px-3 lg:ms-7 lg:mx-7 mt-2 lg:mt-0 ms-4 text-gray-900 rounded text-xl transition-all duration-[250ms] ${
                    isDarkMode
                      ? "dark:text-[#F4E99B] dark:hover:text-[#FAE033]"
                      : "text-[#365050] lg:hover:text-[#010029]"
                  }`}
                  onClick={toggleDarkMode}
                >
                  {isDarkMode ? (
                    <FontAwesomeIcon icon={faSun} />
                  ) : (
                    <FontAwesomeIcon icon={faMoon} />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
