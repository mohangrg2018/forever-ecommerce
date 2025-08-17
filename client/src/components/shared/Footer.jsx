import { assets } from "@/assets/assets";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 sm:mt-32">
      <div className="container__width flex flex-col sm:flex-row gap-10">
        <div className="sm:w-[60%] flex flex-col gap-2 items-center sm:items-start">
          <Link to="/">
            <img src={assets.logo} className="w-24 sm:w-32" alt="" />
          </Link>
          <p className="w-full sm:w-[80%] text-sm text-gray-400 text-center sm:text-start">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quas
            repudiandae, aliquid excepturi provident corporis, mollitia maiores
            soluta aperiam eos harum libero asperiores distinctio voluptates
            esse ratione maxime? Beatae, minima?
          </p>
        </div>
        <div className="sm:w-[20%] flex flex-col gap-2">
          <p className="font-semibold uppercase hidden sm:block">company</p>
          <ul className="flex sm:flex-col gap-6 sm:gap-2 justify-center text-gray-400">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/collection">Collection</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="sm:w-[20%] flex flex-col gap-2">
          <p className="font-semibold uppercase hidden sm:block">
            get in touch
          </p>
          <ul className="flex sm:flex-col gap-6 sm:gap-2 justify-center text-gray-400">
            <li>
              <a href="tel:+123456789">+123456789</a>
            </li>
            <li>
              <a href="mailto:uMl0D@example.com">uMl0D@example.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container__width py-4 border-t border-gray-200 mt-6">
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
