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
import FoodDex from "../../Images/FoodDex.png";
import GamePlex from "../../Images/GamePlex.png";
import Yonna from "../../Images/Yonna.png";

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

  const projects = [
    {
      title: "Yonna (Social App)",
      description:
        "This project is a fully responsive social media platform built with Next.js and MUI. It features user authentication, a dynamic Home Feed, and interactive user profiles. Content is fetched in real-time from APIs, allowing users to post updates, like, and comment. The platform offers a clean design and smooth navigation, providing a modern and engaging user experience.",
      image: Yonna,
      url: "https://yonna.vercel.app/signin",
    },
    {
      title: "FreshCart (E-Commerce App)",
      description:
        "This project is a fully integrated e-commerce website with a Login Page and Home Page. It dynamically fetches content from APIs, offering a wide range of products, deals, and discounts. Users can browse items seamlessly, enjoying a clean design and interactive interface.",
      image: FreshCart,
      url: "https://fresh-cart-virid-beta.vercel.app/",
      id: "project-section-row",
      scrollClass: "md:scroll-m-[12rem] scroll-m-[41rem]",
    },
    {
      title: "Material Kit 2",
      description:
        "This project is a web application featuring a Login Page and Home Page. It dynamically fetches content from APIs, showcasing popular games, news updates, inspirational quotes, and jokes. The app delivers a seamless user experience with a clean design.",
      image: MaterialKit2,
      url: "https://el-kadi.github.io/Material-Kit-2/#/register",
    },
    {
      title: "GamePlex",
      description:
        "This project is a web page showcasing a collection of games with a 3D-designed interface. It includes a login and registration system, allowing users to create accounts and access personalized content. The immersive 3D design enhances the user experience.",
      image: GamePlex,
      url: "https://gameplex-theta.vercel.app/",
    },
    {
      title: "FoodDex",
      description:
        "This project is a web page showcasing various dishes with their recipes and calorie counts. Built using SASS, it offers a visually appealing interface. Users can explore meals, learn preparation methods, and track nutritional value effortlessly.",
      image: FoodDex,
      url: "https://fooddex.vercel.app/",
    },
    {
      title: "Daniels",
      description:
        "This project is a single-page website providing a comprehensive overview. It includes sections for personal details, services, previous work, client feedback, team information, and communication, all structured to enhance user engagement.",
      image: Daniels,
      url: "https://daniels-tau-fawn.vercel.app/",
    },
    {
      title: "DevFolio",
      description:
        "This web page serves as a training project, featuring a Portfolio Section, Blog Section, Get in Touch Section, and About Section. The design is clean and user-friendly, ensuring a smooth browsing experience for showcasing work and sharing updates.",
      image: DevFolio,
      url: "https://devfolio-five-xi.vercel.app/",
    },
    {
      title: "Weather",
      description:
        "This project is a web application providing real-time weather updates based on your location. It also allows users to search for weather information for any country or city worldwide, offering a seamless and interactive experience.",
      image: Weather,
      url: "https://weather-beta-flame.vercel.app/",
    },
    {
      title: "Games",
      description:
        "This project is a web application offering a variety of games sourced from a dedicated API. Users can explore and enjoy different games in an easy-to-navigate interface, providing a fun and engaging experience for game enthusiasts.",
      image: Games,
      url: "https://gameson-theta.vercel.app/",
    },
    {
      title: "Start Framework",
      description:
        "This project is a simple web page showcasing a Portfolio, About section, and Contact form. The layout is clean and minimalistic, focusing on presenting essential information in a straightforward and user-friendly manner.",
      image: StartFramework,
      url: "https://el-kadi.github.io/Start-Framework/",
    },
    {
      title: "Random Quote Generator",
      description:
        "This project is a web page displaying a random quote, advice, or saying when the user clicks a button. The interface is simple and user-friendly, ensuring an enjoyable experience with every click for daily inspiration.",
      image: RandomQuoteGenerator,
      url: "https://quote-generator-ten-alpha.vercel.app/",
    },
    {
      title: "Bookmark",
      description:
        "This project is a web page allowing users to add the name and link of any page they wish to save. It offers options to visit or delete saved links, with a simple and user-friendly interface for easy bookmark management.",
      image: Bookmark,
      url: "https://bookmark-khaki-one.vercel.app/",
    },
    {
      title: "Smart Login System",
      description:
        "This project is a simple web page for user registration and login. It includes a Sign Up form for new users and a Login form for existing users, designed to be clean and functional for a straightforward authentication experience.",
      image: SmartLoginSystem,
      url: "https://smart-login-gamma.vercel.app/",
    },
  ];

  return (
    <>
      <div className="mt-28">
        <div className="text-center pointer-events-none">
          <h2
            ref={h2Ref}
            className="dark:text-[#FED29B] text-3xl font-font dark:bg-[#0d121d] rounded-2xl bg-pink-100 text-sky-500 border-sky-300 dark:border-[#FED29B] border w-max mx-auto px-9 py-5 mb-10"
          >
            Projects
          </h2>
        </div>
      </div>

      <div
        ref={divRef}
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all ease-in-out ${
          isVisible
            ? "translate-x-0 opacity-100 duration-[2000ms]"
            : "-translate-x-96 opacity-0 duration-[100ms]"
        }`}
      >
        {projects.map((project, index) => (
          <div key={index} className="h-full">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              id={project.id}
              className={project.scrollClass}
            >
              <div className="h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all duration-700 dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-t-lg h-52 w-full object-cover"
                  src={project.image}
                  alt={`${project.title} Project`}
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                  </h5>
                  <p className="mb-4 flex-grow text-xs text-gray-700 dark:text-gray-400">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-max items-center px-3 py-2 text-sm font-medium text-center bg-[#1a243a] dark:group-hover:bg-[#1a243a] text-[#FED29B] dark:bg-[#0D121D] group-hover:bg-[#0D121D] rounded-lg transition-all duration-300 mt-auto"
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
        ))}
      </div>
    </>
  );
}
