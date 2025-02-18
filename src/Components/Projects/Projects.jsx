import { useState, useEffect, useRef } from "react";
import MaterialKit2 from "../../Images/Material Kit 2.png";
import Weather from "../../Images/Weather.png";
import DevFolio from "../../Images/DevFolio.png";
import Daniels from "../../Images/Daniels.png";
import Games from "../../Images/Games.png";
import StartFramework from "../../Images/Start Framework.png";
import SmartLoginSystem from "../../Images/Smart Login System.png";
import Bookmark from "../../Images/Bookmark.png";
import RandomQuoteGenerator from "../../Images/Random Quote Generator.png";
import FreshCart from "../../Images/FreshCart.png";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const h2Ref = useRef(null);
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills-section");

      if (skillsSection) {
        const skillsTop = skillsSection.getBoundingClientRect().top;
        const skillsBottom = skillsSection.getBoundingClientRect().bottom;

        if (window.scrollY === 0 || (skillsTop <= 0 && skillsBottom >= 0)) {
          setIsVisible(false);
        } else {
          const h2Rect = h2Ref.current.getBoundingClientRect();
          const divRect = divRef.current.getBoundingClientRect();

          if (
            (h2Rect.top < window.innerHeight && h2Rect.bottom >= 0) ||
            (divRect.top < window.innerHeight && divRect.bottom >= 0)
          ) {
            setIsVisible(true);
          }
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="row mt-28">
        <div className="col-12 justify-content-center text-center pointer-events-none ">
          <h2
            ref={h2Ref}
            className="dark:text-[#FED29B] text-3xl font-font dark:bg-[#0d121d] rounded-2xl bg-pink-100 text-sky-500 border-sky-300 dark:border-[#FED29B] border w-max mx-auto px-9 py-5 h-max mt-10 mb-10"
          >
            Projects
          </h2>
        </div>
      </div>

      <div
        ref={divRef}
        className={`row transition-all ease-in-out ${
          isVisible
            ? "translate-x-0 opacity-100 duration-[2000ms]"
            : "-translate-x-96 opacity-0 duration-[100ms]"
        }`}
      >
        <div className="col-12 col-md-6 col-lg-4 mb-5">
          <a
            href="https://el-kadi.github.io/FreshCart-E-commerce-App/"
            target="_blank"
          >
            <div className="max-w-sm hover:scale-105   transition-all mx-auto duration-700 group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg  h-52 w-full "
                src={FreshCart}
                alt="FreshCart (E-Commerce App) Project"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl   font-bold tracking-tight text-gray-900 dark:text-white">
                  FreshCart (E-Commerce App)
                </h5>

                <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                  This project is a fully integrated e-commerce website that
                  includes a Login Page and a Home Page, dynamically fetching
                  and displaying content from various APIs. The site offers a
                  wide range of products, showcases the latest deals and
                  discounts, and allows users to easily browse through items,
                  providing a seamless and engaging shopping experience with a
                  clean design and interactive user interface.{" "}
                </p>
                <a
                  href="https://el-kadi.github.io/FreshCart-E-commerce-App/"
                  target="_blank"
                  className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center bg-[#1a243a] dark:group-hover:bg-[#1a243a] text-[#FED29B] dark:bg-[#0D121D] group-hover:bg-[#0D121D] rounded-lg  transition-all duration-300"
                >
                  Go To Watch
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 ">
          <a
          id="project-section-row"
            href="https://el-kadi.github.io/Material-Kit-2/#/register"
            target="_blank" className="md:scroll-m-[12rem] scroll-m-[41rem]"
          >
            <div className="max-w-sm hover:scale-105    transition-all mx-auto duration-700 group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-52 w-full object-cover  object-center"
                src={MaterialKit2}
                alt="Material Kit 2 Project"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl   font-bold tracking-tight text-gray-900 dark:text-white">
                  Material Kit 2
                </h5>

                <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                  This project is a web application that includes a Login Page
                  and a Home Page, dynamically fetching and displaying content
                  from multiple APIs. The app showcases popular games, provides
                  the latest news updates, shares inspirational quotes, and adds
                  humor with entertaining jokes, all while delivering a seamless
                  and engaging user experience with a clean design and dynamic
                  functionality.
                </p>
                <a
                  href="https://el-kadi.github.io/Material-Kit-2/#/register"
                  target="_blank"
                  className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center bg-[#1a243a] dark:group-hover:bg-[#1a243a] text-[#FED29B] dark:bg-[#0D121D] group-hover:bg-[#0D121D] rounded-lg  transition-all duration-300"
                >
                  Go To Watch
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </a>
        </div>

        <div className="col-12 col-md-6 col-lg-4 ">
          <a href="https://el-kadi.github.io/master-tow/" target="_blank">
            <div className="max-w-sm hover:scale-105 mb-5 md:mb-0 mt-5 md:mt-0 transition-all mx-auto duration-700 group  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-52 w-full"
                src={Daniels}
                alt="Daniels Project"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                  Daniels
                </h5>

                <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                  This project is a single-page website designed to provide a
                  comprehensive overview in a seamless layout. It includes
                  sections for introducing personal details, showcasing
                  services, highlighting previous work, sharing client feedback,
                  presenting the team, and facilitating communication, all
                  structured to enhance user engagement and accessibility.
                </p>
                <a
                
                  href="https://el-kadi.github.io/master-tow/"
                  target="_blank"
                  className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center bg-[#1a243a] dark:group-hover:bg-[#1a243a] text-[#FED29B] dark:bg-[#0D121D] group-hover:bg-[#0D121D] rounded-lg  transition-all duration-300"
                >
                  Go To Watch
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4   ">
          <a href="https://el-kadi.github.io/DevFolio/" target="_blank">
            <div className="max-w-sm hover:scale-105 transition-all lg:mt-5  mx-auto duration-700 group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-52 w-full object-cover object-center"
                src={DevFolio}
                alt="DevFolio Project"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                  DevFolio
                </h5>

                <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                  This web page serves multiple purposes, acting as a training
                  project that includes a Portfolio Section to showcase work, a
                  Blog Section for sharing thoughts and updates, a Get in Touch
                  Section for easy communication, and an About Section to
                  provide personal or professional details. The design is clean
                  and user-friendly, ensuring a smooth browsing experience.
                </p>
                <a
                  
                  href="https://el-kadi.github.io/DevFolio/"
                  target="_blank"
                  className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center bg-[#1a243a] dark:group-hover:bg-[#1a243a] text-[#FED29B] dark:bg-[#0D121D] group-hover:bg-[#0D121D] rounded-lg  transition-all duration-300"
                >
                  Go To Watch
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4 ">
          <a href="https://el-kadi.github.io/Weather/" target="_blank">
            <div className="max-w-sm hover:scale-105 transition-all mt-5  mx-auto duration-700 group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-52 w-full"
                src={Weather}
                alt="Weather Project"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                  Weather
                </h5>

                <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                  This project is a web application that provides real-time
                  weather updates based on your current location. It also allows
                  users to search for and view weather information for any
                  country or city worldwide, offering a seamless and interactive
                  experience for tracking weather conditions.
                </p>
                <a
                  href="https://el-kadi.github.io/Weather/"
                  target="_blank"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-[#1a243a] dark:group-hover:bg-[#1a243a] text-[#FED29B] dark:bg-[#0D121D] group-hover:bg-[#0D121D]  rounded-lg  transition-all duration-300"
                >
                  Go To Watch
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4  " id="project-section">
          <a href="https://el-kadi.github.io/Games/" target="_blank">
            <div className="max-w-sm hover:scale-105 transition-all mt-5  mx-auto duration-700 group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-52 w-full"
                src={Games}
                alt="Games Project"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                  Games
                </h5>

                <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                  This project is a web application that offers a wide variety
                  of games, all sourced from a dedicated games API. It allows
                  users to explore and enjoy different types of games in an
                  easy-to-navigate interface, providing a fun and engaging
                  experience for game enthusiasts.
                </p>
                <a
                  href="https://el-kadi.github.io/Games/"
                  target="_blank"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-[#1a243a] dark:group-hover:bg-[#1a243a] text-[#FED29B] dark:bg-[#0D121D] group-hover:bg-[#0D121D] rounded-lg  transition-all duration-300"
                >
                  Go To Watch
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4  ">
          <a href="https://el-kadi.github.io/Start-Framework/" target="_blank">
            <div className="max-w-sm hover:scale-105 transition-all mt-5   mx-auto duration-700 group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-52 w-full object-center"
                src={StartFramework}
                alt="Start Framework Project"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                  Start Framework
                </h5>

                <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                  This project is a simple web page designed to showcase a
                  Portfolio, provide an About section, and include a Contact
                  form for easy communication. The layout is clean and
                  minimalistic, focusing on presenting essential information in
                  a straightforward and user-friendly manner.
                </p>
                <a
                  href="https://el-kadi.github.io/Start-Framework/"
                  target="_blank"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-[#1a243a] dark:group-hover:bg-[#1a243a] text-[#FED29B] dark:bg-[#0D121D] group-hover:bg-[#0D121D] rounded-lg  transition-all duration-300"
                >
                  Go To Watch
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4  ">
          <a
            href="https://el-kadi.github.io/-Random-Quote-Generator./"
            target="_blank"
          >
            <div className="max-w-sm hover:scale-105 transition-all mt-5 xl:pb-3  mx-auto duration-700 group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-52 w-full"
                src={RandomQuoteGenerator}
                alt="Random Quote Generator Project"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                  Random Quote Generator
                </h5>

                <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                  This project is a web page that allows users to add the name
                  and link of any page they wish to save. The page offers
                  options to visit the saved link or delete it. The interface is
                  simple and user-friendly, ensuring users can easily manage
                  their bookmarks.
                </p>
                <a
                  href="https://el-kadi.github.io/-Random-Quote-Generator./"
                  target="_blank"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-[#1a243a] dark:group-hover:bg-[#1a243a] text-[#FED29B] dark:bg-[#0D121D] group-hover:bg-[#0D121D] rounded-lg  transition-all duration-300"
                >
                  Go To Watch
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4  ">
          <a href="https://el-kadi.github.io/Bookmark-Name/" target="_blank">
            <div className="max-w-sm hover:scale-105 transition-all mt-5 lg:pb-5 xl:pb-0  mx-auto duration-700 group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-52 w-full object-center"
                src={Bookmark}
                alt="Bookmark Project"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                  Bookmark
                </h5>

                <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                  This project is a web page that allows users to add the name
                  and link of any page they wish to save. The page offers
                  options to visit the saved link or delete it. The interface is
                  simple and user-friendly, ensuring users can easily manage
                  their bookmarks.
                </p>
                <a
                  href="https://el-kadi.github.io/Bookmark-Name/"
                  target="_blank"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-[#1a243a] dark:group-hover:bg-[#1a243a] text-[#FED29B] dark:bg-[#0D121D] group-hover:bg-[#0D121D] rounded-lg  transition-all duration-300"
                >
                  Go To Watch
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </a>
        </div>

        <div className="col-12 col-md-6 col-lg-4  ">
          <a href="https://el-kadi.github.io/Smart-Login/" target="_blank">
            <div className="max-w-sm hover:scale-105 transition-all mt-5 lg:pb-8  md:pb-3 xl:pb-4 2xl:pb-0 mx-auto duration-700 group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg h-52 w-full object-center"
                src={SmartLoginSystem}
                alt="Smart Login System Project"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                  Smart Login System
                </h5>

                <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                  This project is a simple web page dedicated to user
                  registration and login. It includes a Sign Up form for new
                  users to create an account, and a Login form for existing
                  users to access their accounts. The page is designed to be
                  clean and functional, focusing on providing a straightforward
                  authentication experience.
                </p>
                <a
                  href="https://el-kadi.github.io/Smart-Login/"
                  target="_blank"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-[#1a243a] dark:group-hover:bg-[#1a243a] text-[#FED29B] dark:bg-[#0D121D] group-hover:bg-[#0D121D] rounded-lg  transition-all duration-300"
                >
                  Go To Watch
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>

      <br />
    </>
  );
}
