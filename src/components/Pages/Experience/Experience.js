import React, { useState } from "react";
import experience from "../../../assets/experece.png"

export const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if clicked again
    } else {
      setOpenIndex(index);
    }
  };


  const faqs = [
    {
      question:
        "Nov 2023 - Present - Frontend Developer at Rytsense Technologies | Remote",
      answer: `
        Designed and implemented dynamic user interfaces using React.js, improving user 
        experience and reducing page load times. Collaborated with backend teams to integrate 
        RESTful APIs, ensuring seamless data flow and robust application functionality.
        Projects:
        1. Blue Field:
           - A platform for managing tasks, creating workflows, and user privilege allocation.
           - Integrated frontend development with APIs for dynamic functionalities.
           - Focused on user-centric design for an efficient task management experience.
        2. Do Option:
           - Built a responsive, user-friendly trading platform with seamless API integration.
           - Ensured cross-device compatibility and an intuitive trading interface.
        3. Flexian Custom Dashboard:
           - Designed a customizable dashboard allowing users to upload data and visualize it using interactive charts.
           - Implemented features to connect with databases and process data in real time.
      `,
    },
  {
    question:
        "Frontend Developer Intern | Duration (Sept 2023 – Oct 2023) at Ricecity | Remote",
    answer:
        "Collaborate with our front-end development team to create visually appealing and user- friendly web interfaces Learn and apply React, HTML, CSS, and JavaScript to develop and maintain interactive web pages. Debug and troubleshoot front-end issues to improve website functionalit",
  },
  ];

return (
  <section className="">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
        <div className="w-full lg:w-1/2">
          <img
            src={experience}
            alt="experience"
            className="w-full rounded-xl object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-xl">
            <div className="mb-6 lg:mb-16">
              <h6 className="text-lg text-center font-medium text-indigo-600 mb-2 lg:text-left">
                Experience
              </h6>
            </div>

            {/* Accordion Group */}
            <div>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`accordion py-8 border-b border-gray-200 ${openIndex === index ? "active" : ""
                    }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-${index}`}
                  >
                    <h5 className="text-sm">{faq.question}</h5>
                    <svg
                      className={`transition duration-500 ${openIndex === index
                          ? "rotate-180 text-indigo-600"
                          : ""
                        }`}
                      width="22"
                      height="22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id={`faq-${index}`}
                    className={`accordion-content w-full px-0 overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-64" : "max-h-0"
                      }`}
                  >
                    <p className="font-normal text-gray-600 mt-2 text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};
