"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

import { Fredoka, Bungee_Inline, Baloo_2, Mulish } from "@next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import localFont from "@next/font/local";
const doubleBubble = localFont({ src: "../../fonts/Double_Bubble.otf" });

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const clickLink = (link) => {
    Router.push(link);
    setIsMobileMenuOpen(false);
  };

  const router = useRouter();

  useEffect(() => {
    console.log("router", router.pathname);
    console.log(isHomePage);
    router.pathname === "/project-details"
      ? setIsHomePage(false)
      : setIsHomePage(true);

    console.log(isHomePage);
  }, [router.pathname]);

  return (
    <div
      className={`z-10 fixed left-0 right-0 w-full bg-white  ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="h-20 flex items-center justify-between">
          <div style={doubleBubble.style}>
            <Link
              href="/#home"
              scroll={false}
              className={`text-[50px] select-none`}
            >
              Shakil
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/#home"
              scroll={false}
              className={`${fredoka.className} text-lg font-semibold hover:text-sky-600 duration-200`}
            >
              Home
            </Link>
            <Link
              href="/#about"
              scroll={false}
              className={`${fredoka.className} text-lg font-semibold hover:text-sky-600 duration-200`}
            >
              About
            </Link>
            <Link
              href="/#tech-stack"
              scroll={false}
              className={`${fredoka.className} text-lg font-semibold hover:text-sky-600 duration-200`}
            >
              Tech Stack
            </Link>
            <Link
              href="/#projects"
              scroll={false}
              className={`${fredoka.className} text-lg font-semibold hover:text-sky-600 duration-200`}
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              scroll={false}
              className={`${fredoka.className} text-lg font-semibold hover:text-sky-600 duration-200`}
            >
              Contact
            </Link>
          </div>
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center rounded-xl">
            <button
              className="hover:bg-sky-200 duration-300 rounded-xl p-2"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden mobile-menu-container duration-300 overflow-hidden ${
            isMobileMenuOpen ? "h-[350px]" : "h-[0px]"
          }`}
        >
          <div
            className={`flex flex-col gap-4 py-4 duration-300 ${
              isMobileMenuOpen ? "opacity-1" : "opacity-0"
            }`}
          >
            <p
              style={fredoka.style}
              onClick={() => clickLink("/#home")}
              className="cursor-pointer text-lg font-semibold border-l-4  duration-200 hover:border-sky-500 border-transparent hover:bg-sky-100 p-2 rounded"
            >
              Home
            </p>
            <p
              style={fredoka.style}
              onClick={() => clickLink("/#about")}
              className="cursor-pointer text-lg font-semibold  border-l-4  duration-200 hover:border-sky-500 border-transparent hover:bg-sky-100 p-2 rounded"
            >
              About
            </p>

            <p
              style={fredoka.style}
              onClick={() => clickLink("/#tech-stack")}
              className="cursor-pointer text-lg font-semibold  border-l-4  duration-200 hover:border-sky-500 border-transparent hover:bg-sky-100 p-2 rounded"
            >
              Tech Stack
            </p>
            <p
              style={fredoka.style}
              onClick={() => clickLink("/#projects")}
              className="cursor-pointer text-lg font-semibold border-l-4  duration-200 hover:border-sky-500 border-transparent hover:bg-sky-100 p-2 rounded"
            >
              Projects
            </p>
            <p
              style={fredoka.style}
              onClick={() => clickLink("/#contact")}
              className="cursor-pointer text-lg font-semibold border-l-4  duration-200 hover:border-sky-500 border-transparent hover:bg-sky-100 p-2 rounded"
            >
              Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
