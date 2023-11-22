import React from "react";
import { Fredoka } from "@next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const About = () => {
  return (
    <div id="about" className="bg-[#f9f9f9] py-20 overflow-hidden">
      <div className="container overflow-hidden">
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className={`${fredoka.className} text-center text-4xl font-semibold`}
        >
          About Me
        </h1>

        <p className="text-center pt-2">⭐</p>
        <p
          data-aos="zoom-out"
          className={`${fredoka.className} text-center pt-10`}
        >
          Experienced Frontend Engineer with a strong eye for design. Proficient
          in JavaScript, React and Vue and skilled in creating seamless user
          interfaces. Committed to delivering high-performance, visually
          appealing web experiences. Collaborative and creative problem-solver.
          Let's build something amazing together!
        </p>

        <div className="md:grid grid-cols-2 pt-10">
          {/* ===== Education ===== */}
          <div className=" ">
            <h1
              data-aos="fade-right"
              className={`${fredoka.className} text-2xl font-semibold pt-10`}
            >
              Education 📒
            </h1>

            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="mt-10 border-l-4 border-yellow-400 pl-2"
            >
              <h1 className="text-lg font-semibold mulish-font text-[#555] ">
                Bachelor's Degree
              </h1>
              <p className="mulish-font text-[#555]">Year: 2021</p>
              <p className="mulish-font text-[#555]">Department: CSE</p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="mt-10 border-l-4 border-yellow-400 pl-2"
            >
              <h1 className="text-lg font-semibold mulish-font text-[#555] ">
                Higher Secondary School Certificate
              </h1>
              <p className="mulish-font text-[#555]">Year: 2016</p>
              <p className="mulish-font text-[#555]">Section: Science</p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="mt-10 border-l-4 border-yellow-400 pl-2"
            >
              <h1 className="text-lg font-semibold mulish-font text-[#555] ">
                Secondary School Certificate
              </h1>
              <p className="mulish-font text-[#555]">Year: 2014</p>
              <p className="mulish-font text-[#555]">Section: Science</p>
            </div>
          </div>

          {/* ===== Experience ====== */}
          <div className=" ">
            <h1
              data-aos="fade-left"
              className={`${fredoka.className} text-2xl font-semibold pt-10`}
            >
              Experience 💻
            </h1>

            <div
              data-aos="zoom-out"
              data-aos-delay="100"
              className="mt-10 border-l-4 border-sky-400 pl-2"
            >
              <h1 className="text-lg font-semibold mulish-font text-[#555] ">
                Singularity Limited
              </h1>
              <p className="mulish-font text-[#555]">
                Position : Frontend Engineer
              </p>
              <p className="mulish-font text-[#555]">
                Duration : 03 April 2022 - present
              </p>
              <p className="mulish-font text-[#555]">
                Technology : React Js | Vue Js
              </p>
            </div>

            <div
              data-aos="zoom-out"
              data-aos-delay="200"
              className="mt-10 border-l-4 border-sky-400 pl-2"
            >
              <h1 className="text-lg font-semibold mulish-font text-[#555] ">
                Shodaimama
              </h1>
              <p className="mulish-font text-[#555]">
                Position : Frontend Developer Intern
              </p>
              <p className="mulish-font text-[#555]">
                Duration : 05 January 2022 - 31 March 2022
              </p>
              <p className="mulish-font text-[#555]">Technology : React Js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
