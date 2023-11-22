import React from "react";

import Link from "next/link";

// import { Fredoka } from "@next/font/google";

// const fredoka = Fredoka({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
// });

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Projects3 = () => {
  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",

    height: "250px",
  };
  const slideImages = ["/dettol1.png", "/dettol2.png", "/dettol3.png"];

  const properties = {
    duration: 2000, // Adjust this value to change the slide speed (in milliseconds)
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
  };

  const projects = [
    {
      name: "Be 100% Fan",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      technologies: [
        "React Js",
        "Next Js",
        "Redux",
        "Node Js",
        "AWS",
        "Tailwind",
      ],
      slideImages: ["/dettol1.png", "/dettol2.png", "/dettol3.png"],
      liveUrl: "https://be100percentfan.com/",
    },
    {
      name: "Singularity Limited",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      technologies: ["Vue Js", "Nuxt Js", "Vuex", "Firebase", "Tailwind"],
      slideImages: ["/dettol1.png", "/dettol2.png", "/dettol3.png"],
      liveUrl: "https://singularitybd.com/",
    },
    {
      name: "BHN Reservations",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      technologies: ["Vue Js", "Nuxt Js", "Vuex", "Firebase", "Tailwind"],
      slideImages: ["/dettol1.png", "/dettol2.png", "/dettol3.png"],
      liveUrl: "https://reservation.buyherenow.com.bd/",
    },
    {
      name: "Battle of Minds",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      technologies: ["Vanila Js", "Jquery", "Larrable"],
      slideImages: ["/dettol1.png", "/dettol2.png", "/dettol3.png"],
      liveUrl: "https://battleofminds.org/",
    },
  ];

  return (
    <div id="projects" className="bg-[#f9f9f9] py-20 min-h-screen">
      <div className="container">
        <h1 data-aos="zoom-in" className={`text-center text-4xl font-semibold`}>
          Projects
        </h1>
        <p className=" text-center pt-2">⭐</p>
        <h1
          data-aos="zoom-out"
          className={` font-semibold text-[#2d2e32] text-center`}
        >
          (Each project is a unique piece of development)
        </h1>

        {/* ======= projects start ======== */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10 pt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative shadow-lg shadow-gray-500/20 hover:shadow-gray-700/30 rounded-2xl bg-white overflow-hidden hover:-translate-y-4  duration-200"
            >
              <div className="slide-container">
                <Slide {...properties}>
                  {project.slideImages.map((slideImage, index) => (
                    <div key={index}>
                      <div
                        style={{
                          ...divStyle,
                          backgroundImage: `url(${slideImage})`,
                        }}
                      ></div>
                    </div>
                  ))}
                </Slide>
              </div>

              <div className=" order-1">
                <div className="px-3 pb-14">
                  <div className="grid grid-cols-3  py-3 items-center">
                    <h1 className="col-span-2 font-bold lilita-font text-[#2d2e32] ">
                      {project.name}
                    </h1>
                    <div className="flex justify-end">
                      <Link href={`/project-details?id=1`}>
                        <button className="col-span-1 text-sm lilita-font text-[#2d2e32] border px-1.5  py-1 rounded hover:bg-emerald-500 hover:text-white">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>

                  <h1 className="text-sm text-[#757575]">
                    {project.description}
                  </h1>

                  <div className="my-4 flex items-center flex-wrap ">
                    {project.technologies.map((tech, index) => (
                      <button
                        key={index}
                        className="bg-sky-400 px-3 py-1 rounded-full text-white text-sm shadow-lg m-1"
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>

                <Link href={`${project.liveUrl}`} target="_blank">
                  <div className="group flex items-center justify-center space-x-2 bg-gray-100 absolute left-0 bottom-0 w-full py-2.5 duration-150">
                    <p className="text-gray-600 font-bold"> Live</p>{" "}
                    <img
                      src="/rocket.svg"
                      alt=""
                      className="w-5 group-hover:rotate-45 group-hover:translate-x-5 duration-200"
                    />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* ======= projects end ======== */}
      </div>
    </div>
  );
};

export default Projects3;
