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
import MovieNest from "../../Images/MovieNest.png";
import NoteApp from "../../Images/NoteApp.png";
import Yonna from "../../Images/Yonna.png";
import nasaehgedety from "../../Images/nasaehgedety.png";
import abdullahclinicsystem from "../../Images/Abdullah Clinic System.png";
import auddtuneimage from "../../Images/auddtuneimage.png";
import DigitalCardCreator from "../../Images/Digital Card Creator.png";
import VideoQuest from "../../Images/VideoQuest.png";
import PodcastFinder from "../../Images/Podcast Finder.png";

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
      code: "https://github.com/EL-KADI/Yonna",
    },
    {
      title: "FreshCart (E-Commerce App)",
      description:
        "This project is a fully integrated e-commerce website with a Login Page and Home Page. It dynamically fetches content from APIs, offering a wide range of products, deals, and discounts. Users can browse items seamlessly, enjoying a clean design and interactive interface.",
      image: FreshCart,
      url: "https://fresh-cart-virid-beta.vercel.app/",
      code: "https://github.com/EL-KADI/FreshCart-E-commerce-App",
      id: "project-section-row",
      scrollClass: "md:scroll-m-[12rem] scroll-m-[41rem]",
    },
    {
      title: "Nasaeh Gedety",
      description:
        "Nasaeh Gedety is an Arab heritage platform built with Next.js and Tailwind CSS. It dynamically offers traditional tips and folk recipes across 49 categories, like cooking, sewing, and childcare. Users can submit their own tips, blending grandmothers’ wisdom with a seamless, interactive design, celebrating Egyptian, Gulf, and Levantine traditions. The platform also features an intelligent chatbot that provides instant answers to users' questions, guiding them through categories, offering personalized advice, and making their experience more engaging and interactive.",
      image: nasaehgedety,
      url: "https://nasaehgedety.vercel.app/",
      code: "https://github.com/EL-KADI/Nasaeh-Gedety",
    },
    {
      title: "Digital Card Creator",
      description:
        "Digital Card Creator is a flexible platform built with Next.js and Tailwind CSS, allowing users to create custom digital cards such as greeting cards, invitations, and business cards. Users can start designing from scratch, adding text, images, and freely customizing colors and fonts. The platform provides instant preview of the designs and supports downloading the final cards in PNG or PDF format using jsPDF. It leverages Fabric.js for powerful and dynamic graphic editing, ensuring a smooth and flexible design experience suitable for both personal and professional use.",
      image: DigitalCardCreator,
      url: "https://digital-card-creator-nine.vercel.app",
      code: "https://github.com/EL-KADI/Digital-Card-Creator",
    },
    {
      title: "VideoQuest",
      description:
        "VideoQuest is an interactive front-end application built with Next.js and Tailwind CSS, allowing users to explore, search, and follow educational and entertainment videos from open sources. The application features a modern user interface with dark mode support, an advanced dashboard displaying interaction statistics through dynamic charts, a favorites list for saving videos, an option to download videos for offline viewing, and direct video playback within the app. VideoQuest ensures a smooth and interactive user experience, with easy customization and feature development.",
      image: VideoQuest,
      url: "https://video-quest.vercel.app/",
      code: "https://github.com/EL-KADI/VideoQuest",
    },
    {
      title: "Podcast Finder",
      description:
        "Podcast Finder is an interactive front-end application built with Next.js and Tailwind CSS, designed to enable users to easily search and explore a wide variety of podcast information sourced from open platforms. The site features a dedicated section for Featured Podcasts to help users follow the best carefully selected episodes and shows. The application boasts a modern and smooth user interface, ensuring an engaging and seamless experience for users of all levels.",
      image: PodcastFinder,
      url: "https://podcast-finder-seven.vercel.app/",
      code: "https://github.com/EL-KADI/Podcast-Finder",
    },
    {
      title: "AuddTune",
      description:
        "AuddTune is a song recognition platform built with React and Tailwind CSS. It allows users to identify songs by recording audio or uploading an audio file. The platform utilizes the <a href='https://audd.io' target='_blank' rel='noopener noreferrer'>audd.io</a> API for accurate song analysis. It provides an easy-to-use interface to display song information such as the artist's name, song title, and album.",
      image: auddtuneimage,
      url: "https://auddtune.vercel.app/",
      code: "https://github.com/EL-KADI/AuddTune",
    },
    {
      title: "DR. Abdullah Clinic System",
      description:
        "Dr. Abdullah's Clinic is a patient management dashboard built with React and Tailwind CSS. It offers secure local storage-based authentication without APIs, providing login, registration, and patient management. Users can add treatment plans, appointments, and surgical cases. The dashboard displays patient details, medical history, and upcoming appointments, ensuring efficient clinic management.",
      image: abdullahclinicsystem,
      url: "https://abdullah-clinic-system.vercel.app/#/",
      code: "https://github.com/EL-KADI/Abdullah-Clinic-System",
    },
    {
      title: "MovieNest",
      description:
        "This project is a fully responsive movie rating website built with React and Tailwind CSS. It showcases top-rated and lowest-rated films using real-time data from APIs. Users can explore trending movies, read brief reviews, and view ratings visually. The interface is clean and intuitive, ensuring fast performance and seamless browsing. It offers a fun and informative way to discover and compare films.",
      image: MovieNest,
      url: "https://movie-nest-ten.vercel.app/",
      code: "https://github.com/EL-KADI/MovieNest",
    },
    {
      title: "GamePlex",
      description:
        "This project is a web page showcasing a collection of games with a 3D-designed interface. It includes a login and registration system, allowing users to create accounts and access personalized content. The immersive 3D design enhances the user experience.",
      image: GamePlex,
      url: "https://gameplex-theta.vercel.app/",
      code: "https://github.com/EL-KADI/GamePlex",
    },
    {
      title: "NoteApp",
      description:
        "This project is a fully responsive note-taking app built with React and Tailwind CSS. It features user authentication with login and registration, and allows users to create, edit, and delete notes. Notes are stored using both local storage and external APIs to ensure data persistence and accessibility. The app offers a clean, intuitive design and smooth performance, making it ideal for organizing tasks and ideas efficiently.",
      image: NoteApp,
      url: "https://note-app-el-kadis-projects.vercel.app/",
      code: "https://github.com/EL-KADI/NoteApp/",
    },
    {
      title: "FoodDex",
      description:
        "This project is a web page showcasing various dishes with their recipes and calorie counts. Built using SASS, it offers a visually appealing interface. Users can explore meals, learn preparation methods, and track nutritional value effortlessly.",
      image: FoodDex,
      url: "https://fooddex.vercel.app/",
      code: "https://github.com/EL-KADI/FoodDex",
    },
    {
      title: "Material Kit 2",
      description:
        "This project is a web application featuring a Login Page and Home Page. It dynamically fetches content from APIs, showcasing popular games, news updates, inspirational quotes, and jokes. The app delivers a seamless user experience with a clean design.",
      image: MaterialKit2,
      url: "https://el-kadi.github.io/Material-Kit-2/#/register",
      code: "https://github.com/EL-KADI/Material-Kit-2",
    },
    {
      title: "Weather",
      description:
        "This project is a web application providing real-time weather updates based on your location. It also allows users to search for weather information for any country or city worldwide, offering a seamless and interactive experience.",
      image: Weather,
      url: "https://weather-beta-flame.vercel.app/",
      code: "https://github.com/EL-KADI/Weather",
    },
    {
      title: "Games",
      description:
        "This project is a web application offering a variety of games sourced from a dedicated API. Users can explore and enjoy different games in an easy-to-navigate interface, providing a fun and engaging experience for game enthusiasts.",
      image: Games,
      url: "https://gameson-theta.vercel.app/",
      code: "https://github.com/EL-KADI/Games",
    },
    {
      title: "Daniels",
      description:
        "This project is a single-page website providing a comprehensive overview. It includes sections for personal details, services, previous work, client feedback, team information, and communication, all structured to enhance user engagement.",
      image: Daniels,
      url: "https://daniels-tau-fawn.vercel.app/",
      code: "https://github.com/EL-KADI/master-tow",
    },
    {
      title: "DevFolio",
      description:
        "This web page serves as a training project, featuring a Portfolio Section, Blog Section, Get in Touch Section, and About Section. The design is clean and user-friendly, ensuring a smooth browsing experience for showcasing work and sharing updates.",
      image: DevFolio,
      url: "https://devfolio-five-xi.vercel.app/",
      code: "https://github.com/EL-KADI/DevFolio",
    },
    {
      title: "Start Framework",
      description:
        "This project is a simple web page showcasing a Portfolio, About section, and Contact form. The layout is clean and minimalistic, focusing on presenting essential information in a straightforward and user-friendly manner.",
      image: StartFramework,
      url: "https://el-kadi.github.io/Start-Framework/",
      code: "https://github.com/EL-KADI/Start-Framework",
    },
    {
      title: "Random Quote Generator",
      description:
        "This project is a web page displaying a random quote, advice, or saying when the user clicks a button. The interface is simple and user-friendly, ensuring an enjoyable experience with every click for daily inspiration.",
      image: RandomQuoteGenerator,
      url: "https://quote-generator-ten-alpha.vercel.app/",
      code: "https://github.com/EL-KADI/-Random-Quote-Generator.",
    },
    {
      title: "Bookmark",
      description:
        "This project is a web page allowing users to add the name and link of any page they wish to save. It offers options to visit or delete saved links, with a simple and user-friendly interface for easy bookmark management.",
      image: Bookmark,
      url: "https://bookmark-khaki-one.vercel.app/",
      code: "https://github.com/EL-KADI/Bookmark-Name",
    },
    {
      title: "Smart Login System",
      description:
        "This project is a simple web page for user registration and login. It includes a Sign Up form for new users and a Login form for existing users, designed to be clean and functional for a straightforward authentication experience.",
      image: SmartLoginSystem,
      url: "https://smart-login-gamma.vercel.app/",
      code: "https://github.com/EL-KADI/Smart-Login",
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
                    {project.title === "AuddTune" ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: project.description,
                        }}
                        className="auddtune-description"
                      />
                    ) : (
                      project.description
                    )}
                  </p>
                  <div className="flex justify-between">
                    {" "}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-max items-center px-3 py-2 text-sm font-medium text-center btn-hover-style rounded-lg mt-auto"
                    >
                      Experience It
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
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-max items-center px-3 py-2 text-sm btn-hover-style font-medium text-center rounded-lg mt-auto"
                    >
                      View Code
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
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
