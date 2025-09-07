import { assets } from "@/assets/assets";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container__width mt-12 sm:mt-20">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 py-8">
        <div className="w-full sm:w-[60%] flex flex-col gap-4 items-center sm:items-start">
          <Link to="/">
            <img src={assets.logo} className="w-32" alt="" />
          </Link>
          <p className="text-gray-400 text-sm text-center sm:text-start w-[80%] sm:w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            doloribus non, quia neque ratione est esse maxime porro voluptates
            veritatis repellat repudiandae libero iste similique atque ipsum.
            Accusamus, aliquid maxime.
          </p>
        </div>
        <div className="w-full sm:w-[20%] flex flex-col gap-4">
          <p className="uppercase font-semibold hidden sm:block">company</p>
          <ul className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-2 text-gray-400 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="#">Delivery</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-[20%] flex flex-col gap-4">
          <p className="uppercase font-semibold hidden sm:block">
            get in touch
          </p>
          <ul className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-2 text-gray-400 text-sm">
            <li>
              <a href="tel:+123456789"> +123456789</a>
            </li>
            <li>
              <a href="mailto:V4Y9p@example.com">V4Y9p@example.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-sm py-3 border-t border-gray-200 text-gray-400 text-center">
        Copyright 2025 @ All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
