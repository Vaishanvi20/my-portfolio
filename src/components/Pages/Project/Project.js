import React from "react";
import calculaterImg from "../../../assets/calculater.png";
export const Project = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Gym Management System */}
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <div className="relative">
            <a href="https://github.com/Vaishanvi20/Gym-Management-System">
              <img
                className="w-full"
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Gym Management System"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto">
            <a
              href="https://github.com/Vaishanvi20/Gym-Management-System"
              className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              Gym Management System
            </a>
            <p className="text-gray-500 text-sm">
              A comprehensive Gym Management System built using HTML, CSS,
              JavaScript, and PHP. Manage memberships, track attendance, and
              monitor workouts seamlessly.
            </p>
          </div>
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100"></div>
        </div>

        {/* Company Site Dummy */}
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <div className="relative">
            <a href="https://github.com/Vaishanvi20/Graphic-Design-Compnay-website">
              <img
                className="w-full"
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Company Site Dummy"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto">
            <a
              href="https://github.com/Vaishanvi20/Graphic-Design-Compnay-website"
              className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              Company Site
            </a>
            <p className="text-gray-500 text-sm">
              A mockup for a company website using HTML, CSS.
              Features include a modern layout, interactive elements, and
              responsive design.
            </p>
          </div>
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100"></div>
        </div>

        {/* Calculator */}
        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <div className="relative">
            <a href="https://codesandbox.io/p/github/Vaishanvi20/Calculater-ReactJs/main">
              <img
                className="w-full h-auto max-h-60 object-contain"
                src={calculaterImg}
                alt="Calculator"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto">
            <a
              href="https://codesandbox.io/p/github/Vaishanvi20/Calculater-ReactJs/main"
              className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              Calculator
            </a>
            <p className="text-gray-500 text-sm">
              A simple and elegant calculator designed using React Js. Perform
              basic mathematical operations with ease.
            </p>
          </div>
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
};
