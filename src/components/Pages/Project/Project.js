import React from "react";
import calculaterImg from "../../../assets/calculater.png";
import dashboardImg from "../../../assets/dashboard.png"
import desiciontree from "../../../assets/decison tree.png"
import BookingImg from "../../../assets/boooking.png"
export const Project = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <div className="relative">
            <a href="https://dashboard-frontend-git-main-vaishnavis-projects-3553f5c5.vercel.app/">
              <img
                className="w-full h-auto max-h-60 object-contain"
                src={dashboardImg}
                alt="Calculator"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto">
            <a
              href="https://dashboard-frontend-git-main-vaishnavis-projects-3553f5c5.vercel.app/"
              className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              Dashboard
            </a>
            <p className="text-gray-500 text-sm">
              A simple and elegant dashboard designed using React Js , tailwind Css. Which showing the metrics based on vehical datas
            </p>
          </div>
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100"></div>
        </div>

        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <div className="relative">
            <a href="https://decisontrees-acixixo4i-vaishnavis-projects-3553f5c5.vercel.app/">
              <img
                className="w-full h-auto max-h-72 object-contain"
                src={desiciontree}
                alt="Calculator"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto">
            <a
              href="https://decisontrees-acixixo4i-vaishnavis-projects-3553f5c5.vercel.app/"
              className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              Decison Tree
            </a>
            <p className="text-gray-500 text-sm">
              A simple app where u can create tree . We use React Js for building the UI
            </p>
          </div>
          <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100"></div>
        </div>
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


        <div className="rounded overflow-hidden shadow-lg flex flex-col">
          <div className="relative">
            <a href="https://frontend-yatra-oa8otnu07-vaishnavis-projects-3553f5c5.vercel.app">
              <img
                className="w-full h-auto max-h-60 object-contain"
                src={BookingImg}
                alt="Calculator"
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            </a>
          </div>
          <div className="px-6 py-4 mb-auto">
            <a
              href="https://frontend-yatra-oa8otnu07-vaishnavis-projects-3553f5c5.vercel.app"
              className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
            >
              Booking 
            </a>
            <p className="text-gray-500 text-sm">
              A here we doing simple flow for booking the seat, with webcam in ReactJs, tailwndcss, JS
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
