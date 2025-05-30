import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import profile from "../../../assets/profile.png"
export const Banner = () => {
  return (
    <div class="bg-white">
      <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl ">
            My name is Vaishnavi
          </h1>

          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            Passionate front-end developer with a knack for creating responsive,
            user-friendly web applications !
          </p>

          <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="https://github.com/Vaishanvi20"
              class="inline-flex gap-2 items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  "
            >
              <FaGithub size={20} />
               GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vaishnavi-katkar-0a923b254/"
              class="inline-flex gap-2 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 "
            >
              <FaLinkedin size={20} />
              Linkdein
            </a>
          </div>
        </div>

        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={profile}
            alt="hero image"
         
          />
        </div>
      </div>
    </div>
  );
};
