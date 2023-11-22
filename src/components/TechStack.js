import React, { useState } from "react";
import bootstrap from "../../public/assets/bootstrap.png";
import css from "../../public/assets/css.png";
import html from "../../public/assets/html-5.png";
import jquery from "../../public/assets/jquery.png";
import js from "../../public/assets/js.png";
import mongo from "../../public/assets/mongo.png";
import mui from "../../public/assets/mui.png";
import next from "../../public/assets/next.jpg";
import node from "../../public/assets/node.png";
import nuxtIcon from "../../public/assets/nuxtIcon.png";
import react from "../../public/assets/react.png";
import mobile from "../../public/assets/mobile.png";
import tailwind from "../../public/assets/tailwind.jpg";
import vuexIcon from "../../public/assets/vuex.png";
import redux from "../../public/assets/redux.png";
import pinia from "../../public/assets/pinia.jpg";
import vue from "../../public/assets/vue.png";

import { Fredoka } from "@next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const TechStack = () => {
  const [techs, setTechs] = useState([
    { name: "HTML", image: html, time: 50 },
    { name: "CSS", image: css, time: 150 },
    { name: "Jquery", image: jquery, time: 250 },
    { name: "Javascript", image: js, time: 350 },
    { name: "React Js", image: react, time: 450 },
    { name: "Next Js", image: next, time: 550 },
    { name: "Redux", image: redux, time: 650 },
    { name: "Vue Js", image: vue, time: 750 },
    { name: "Nuxt Js", image: nuxtIcon, time: 850 },
    { name: "Vuex", image: vuexIcon, time: 950 },
    { name: "Pinia", image: pinia, time: 1050 },
    { name: "Mongo", image: mongo, time: 1150 },
    { name: "Node", image: node, time: 1250 },
    { name: "Material UI", image: mui, time: 1350 },
    { name: "Tailwind", image: tailwind, time: 1450 },
    { name: "Bootstrap", image: bootstrap, time: 1550 },
    { name: "Responsive", image: mobile, time: 1650 },
  ]);
  return (
    <div
      id="tech-stack"
      className="bg-white py-20 min-h-screen flex items-center justify-center"
    >
      <div className="container">
        <h1
          data-aos="zoom-in"
          className={`${fredoka.className} text-center text-4xl font-semibold`}
        >
          Tech Stack
        </h1>
        <p className="text-center pt-2">⭐</p>
        <p
          data-aos="zoom-out"
          className={`${fredoka.className} text-center pt-10`}
        >
          As a skilled frontend developer, my technology stack encompasses a
          powerful set of tools and frameworks tailored to crafting captivating
          user experiences and responsive interfaces. My proficiency lies in a
          combination of fundamental web technologies and modern libraries that
          enable me to bring designs to life seamlessly.
        </p>
        <div className="flex flex-wrap items-center justify-center pt-10 ">
          {techs.map((tech, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={tech.time}
              className="flex flex-col items-center justify center p-1"
            >
              <img
                title={tech.name}
                className="w-20 h-20 m-2 shadow hover:shadow-xl p-1 duration-200 rounded-lg"
                src={tech.image.src}
              />
              <p className={fredoka.className}>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
