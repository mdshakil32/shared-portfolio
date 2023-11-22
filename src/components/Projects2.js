import React from "react";
import singularity from "../public/assets/singularity.png";
import bhn from "../public/assets/bhn.png";
import bom from "../public/assets/BOM.png";
import tralive from "../public/assets/tralive.png";
import orion from "../public/assets/orion.png";
import kyro from "../public/assets/kyro.png";
import dettol from "../public/assets/dettol2.png";
import Link from "next/link";

import { Fredoka } from "@next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Projects2 = () => {
  return (
    <div id="projects" className="bg-[#f9f9f9] py-20 min-h-screen">
      <div className="container">
        <h1
          data-aos="zoom-in"
          className={`${fredoka.className} text-center text-4xl font-semibold`}
        >
          Projects
        </h1>
        <p className=" text-center pt-2">⭐</p>
        <h1
          data-aos="zoom-out"
          className={`${fredoka.className} font-semibold text-[#2d2e32] text-center`}
        >
          (Each project is a unique piece of development)
        </h1>

        {/* ====== projects ====== */}
        <div className="">
          {/* ========  1 single item  */}
          <div
            data-aos="fade-left"
            className="mt-20 lg:grid grid-cols-2 items-center shadow-xl p-6 rounded-2xl bg-white"
          >
            <div class="shadow-xl rounded-lg order-2">
              <div class="screen">
                <img src={dettol.src} className="bottom-[-1500px]" />
              </div>
            </div>

            <div className="p-3 text-center order-1">
              <h1 className="text-lg font-bold lilita-font text-[#2d2e32] ">
                Be 100% Fan
              </h1>

              <div className="my-4 flex items-center flex-wrap justify-center ">
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  React Js
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Next Js
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Redux
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Node Js
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  AWS
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Tailwind
                </button>
              </div>
              <Link
                href="https://be100percentfan.com/"
                target="_blank"
                className="font-bold text-lg hover:underline"
              >
                🌐Live
              </Link>
            </div>
          </div>

          {/* ========  2 single item  */}
          <div
            data-aos="fade-right"
            className="mt-20 lg:grid grid-cols-2 items-center shadow-xl p-6 rounded-2xl bg-white"
          >
            <div class="shadow-xl rounded-lg">
              <div class="screen">
                <img src={singularity.src} className="bottom-[-1500px]" />
              </div>
            </div>

            <div className="p-3 text-center">
              <h1 className="text-lg font-bold lilita-font text-[#2d2e32]">
                Singularity Limited
              </h1>

              <div className="my-4 flex items-center flex-wrap justify-center">
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Vue 2
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Nuxt Js
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Vuex
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Firebase
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Tailwind
                </button>
              </div>
              <Link
                href="https://singularitybd.com/"
                target="_blank"
                className="font-bold text-lg hover:underline"
              >
                🌐Live
              </Link>
            </div>
          </div>

          {/* ======== 3 single item  */}
          <div
            data-aos="fade-left"
            className="mt-10 lg:grid grid-cols-2 items-center shadow-xl p-6 rounded-2xl bg-white"
          >
            <div class="shadow-xl rounded-lg order-2">
              <div class="screen">
                <img
                  src={bhn.src}
                  className="lg:bottom-[-400px] bottom-[-250px]"
                />
              </div>
            </div>

            <div className="p-3 text-center order-1">
              <h1 className="text-lg font-bold lilita-font text-[#2d2e32]">
                BHN Reservations
              </h1>

              <div className="my-4 flex items-center flex-wrap justify-center">
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Vue Js
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Nuxt Js
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Vuex
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Node Js
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Tailwind
                </button>
              </div>
              <Link
                href="https://reservation.buyherenow.com.bd/"
                target="_blank"
                className="font-bold text-lg hover:underline"
              >
                🌐Live
              </Link>
            </div>
          </div>

          {/* ======== 4 single item  */}
          <div
            data-aos="fade-right"
            className="mt-10 lg:grid grid-cols-2 items-center shadow-xl p-6 rounded-2xl bg-white"
          >
            <div class="shadow-xl rounded-lg ">
              <div class="screen">
                <img
                  src={bom.src}
                  className="lg:bottom-[-680px] bottom-[-450px]"
                />
              </div>
            </div>

            <div className="p-3 text-center ">
              <h1 className="text-lg font-bold lilita-font text-[#2d2e32]">
                Battle of Minds
              </h1>

              <div className="my-4 flex items-center flex-wrap justify-center">
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Vanila Js
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Jquery
                </button>

                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Larrable
                </button>
              </div>
              <Link
                href="https://battleofminds.org/"
                target="_blank"
                className="font-bold text-lg hover:underline"
              >
                🌐Live
              </Link>
            </div>
          </div>

          {/* ======== 5 kyro single item  */}
          <div
            data-aos="fade-left"
            className="mt-10 lg:grid grid-cols-2 items-center shadow-xl p-6 rounded-2xl bg-white"
          >
            <div class="shadow-xl rounded-lg order-2">
              <div class="screen">
                <img
                  src={kyro.src}
                  className="lg:bottom-[-680px] bottom-[-450px]"
                />
              </div>
            </div>

            <div className="p-3 text-center order-1">
              <h1 className="text-lg font-bold lilita-font text-[#2d2e32]">
                Kyro
              </h1>

              <div className="my-4 flex items-center flex-wrap justify-center">
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Nuxt Js
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Vue Js
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Tailwind
                </button>
              </div>
              <Link
                href="https://sg-kyro.netlify.app/"
                target="_blank"
                className="font-bold text-lg hover:underline"
              >
                🌐Live
              </Link>
            </div>
          </div>

          {/* ======== 6 single item  */}
          <div
            data-aos="fade-right"
            className="mt-10 lg:grid grid-cols-2 items-center shadow-xl p-6 rounded-2xl bg-white"
          >
            <div class="shadow-xl rounded-lg ">
              <div class="screen">
                <img
                  src={tralive.src}
                  className="lg:bottom-[-950px] bottom-[-750px]"
                />
              </div>
            </div>

            <div className="p-3 text-center">
              <h1 className="text-lg font-bold lilita-font text-[#2d2e32]">
                Tralive
              </h1>

              <div className="my-4 flex items-center flex-wrap justify-center">
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  React
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Bootstrap
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Node Js
                </button>
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  Firebase Authentication
                </button>
              </div>
              <Link
                href="https://tralive-5a85c.web.app/"
                target="_blank"
                className="font-bold text-lg hover:underline"
              >
                🌐Live
              </Link>
            </div>
          </div>

          {/* ======== 7 single item  */}
          <div
            data-aos="fade-left"
            className="mt-10 lg:grid grid-cols-2 items-center shadow-xl p-6 rounded-2xl bg-white"
          >
            <div class="shadow-xl rounded-lg order-2">
              <div class="screen">
                <img src={orion.src} className="bottom-[-800px]" />
              </div>
            </div>

            <div className="p-3 text-center order-1">
              <h1 className="text-lg font-bold lilita-font text-[#2d2e32]">
                Orion Safety
              </h1>

              <div className="my-4 flex items-center flex-wrap justify-center">
                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  React Js
                </button>

                <button className="bg-sky-400 px-3 py-1 rounded-lg text-white shadow-lg m-1">
                  javascript
                </button>
              </div>
              <Link
                href="https://shakil-instalogic.netlify.app/"
                target="_blank"
                className="font-bold text-lg hover:underline"
              >
                🌐Live
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects2;
