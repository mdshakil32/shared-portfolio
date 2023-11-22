import Link from "next/link";
import React from "react";
import LinkedinSVG from "./SVG/LinkedinSVG";
import GithubSVG from "./SVG/GithubSVG";

const Footer = () => {
  return (
    <div className="bg-gray-800 py-3">
      <div className="container flex items-center justify-center">
        <h1 className=" font-bold lilita-font text-gray-300">
          Copyright © 2022. All rights are reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
