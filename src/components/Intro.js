"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CatImg from "../public/assets/cat.png";

const Intro = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 5000);
  });

  return (
    <div
      //   className={`z-20 intro fixed left-0 h-screen w-screen top-0`}
      className={`z-20 intro fixed left-0 h-screen w-screen overflow-hidden  ${
        isLoaded ? "top-0" : "top-[-100vh]"
      }`}
    >
      <div class="container2">
        <div class="box">
          <img
            src={CatImg.src}
            alt="md shakil chowdhury"
            className="h-48 w-48"
          />
          <div class="title">
            <span class="block"></span>
            <h1>
              Hello World!<span></span>
            </h1>
          </div>

          <div class="role">
            <div class="block"></div>
            <p>A very warm welcome to you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
