"use client";
import { useState } from "react";
import styles from "./Courses.module.css";

export default function Courses() {
  const [activeModule, setActiveModule] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });
  const [activeModuleNum, setActiveModuleNum] = useState(1);

  const curriculum = [
    {
      week: "Week 1",
      title: "Introduction to Web Development and HTML",
      points: [
        "Understanding the basics of web development",
        "Introducing HTML and its structure",
        "Creating a simple webpage and HTML",
        "Working with text, headings, and paragraph",
        "Adding links and anchors",
        "Inserting images and multimedia content",
      ],
    },
    {
      week: "Week 2",
      title: "CSS Fundamentals",
      points: [
        "Introduction to Cascading Style Sheets (CSS)",
        "Selectors and HTML elements",
        "Creating a simple webpage and HTML",
        "Managing margins, paddings and borders",
        "Understanding the box model",
        "Creating layouts with CSS positioning and floating",
      ],
    },
    {
      week: "Week 3-4",
      title: "Responsive Web design",
      points: [
        "The importance of responsive design",
        "Media queries for different devices",
        "Fluid layouts and flexible grids",
        "Using CSS frameworks for responsive developments",
        "Making images and media responsive",
        "Testing and debugging responsive websites",
      ],
    },
    {
      week: "Week 5-6",
      title: "JavaScript Basics",
      points: [
        "Introduction to JavaScript and its role in web development",
        "Working with variables, data types and operators",
        "Control structures, if statements, loops and functions",
        "Manipulating the DOM (Document Object Model)",
        "Event handling and interactive web elements",
        "Introduction to AJAX and working with APIs",
      ],
    },
    {
      week: "Week 7-8",
      title: "Front-end Tools and Libraries",
      points: [
        "Introduction to front-end build tools (e.g., npm, Web-pack)",
        "Managing packages with npm and using package.json",
        "Version control with Git and GitHub",
        "Introduction to front-end libraries (e.g., jQuery, Bootstrap)",
        "Using third-party APIs and libraries in projects",
        "Web performance optimization techniques",
      ],
    },
  ];
  const handleActiveModule = (num) => {
    const newActiveModule = {};

    Object.keys(activeModule).forEach((key) => {
      newActiveModule[key] = false;
    });

    newActiveModule[num] = true;
    setActiveModule(newActiveModule);
    setActiveModuleNum(num);
  };
  return (
    <div id="Course" style={{ backgroundColor: "#dbf2fc", height: "100vh" }}>
      <p className=" flex-1  font-semibold text-2xl text-center pt-4 pb-6 ">
        Courses that we Offer
      </p>
      <div className="flex  justify-around">
        <div className=" flex-shrink-0  w-96 shadow-2xl rounded-[10px] overflow-hidden">
          <img src="/courses_images/courseheading.png" alt="Course-heading" />

          <div className=" bg-white p-4 ">
            <p className="  font-semibold py-2  ">Course Outcome</p>
            <p className="pb-2" style={{ color: "#838383" }}>
              Full-stack Front-end Developer
            </p>
            <h3 className="  font-semibold py-1  ">What You Will Learn</h3>
            <p className=" tracking-tighter pb-2" style={{ color: "#838383" }}>
              HTML,CSS,JavaScript,responsive design,user interface (UI)
              design,web accessibility,version control(Git),browser
              compatibility,front-end frameworks(e.g.,React,Angular,Vue.js).CSS
              preprocessors(e.g.,Sass,Less),DOM manipulation,web performance
              optimization,cross-browser testing,progressive web
              apps(PWAs),JavaScript libraries(e.g.,JQuery),front-end build tools
              etc.
            </p>
            <p
              className=" cursor-pointer text-xl pt-8 pb-2  font-semibold text-center"
              style={{ color: "#ff8541" }}
            >
              Enroll Now
            </p>
          </div>
        </div>
        <div className="w-4/6  rounded-[10px] shadow-2xl bg-white">
          <p className=" p-4 text-[#AEAEAE] text-xl">Duration : 8 weeks</p>
          <div className="flex justify-around">
            <div className=" cursor-pointer text-sm flex flex-col gap-y-[1px] box-border  w-[35%]">
              {" "}
              {/* left div */}
              <div
                onClick={() => {
                  handleActiveModule(1);
                }}
                className={` p-2 h-[106px] 5ounded-[10px]   ${
                  activeModule["1"] === true ? styles.active : ""
                }`}
              >
                Module 1
                <div className="flex justify-between items-center w-[100%]">
                  <p className="  font-semibold   ">
                    Introduction to <br /> Web Development <br /> and HTML
                  </p>
                  <p> 1 week</p>
                </div>
              </div>
              <div
                onClick={() => {
                  handleActiveModule(2);
                }}
                className={` p-2 h-[105px] rounded-[10px] ${
                  activeModule["2"] === true ? styles.active : ""
                }`}
              >
                Module 2
                <div className="flex justify-between items-center w-[100%]">
                  <p className="  font-semibold   ">CSS Fundamentals</p>
                  <p> 1 week</p>
                </div>
              </div>
              <div
                onClick={() => {
                  handleActiveModule(3);
                }}
                className={`  p-2 h-[105px] rounded-[10px] ${
                  activeModule["3"] === true ? styles.active : ""
                }`}
              >
                Module 3
                <div className="flex justify-between items-center w-[100%]">
                  <p className="  font-semibold   ">
                    Responsive Web <br /> Design
                  </p>
                  <p> 1 week</p>
                </div>
              </div>
              <div
                onClick={() => {
                  handleActiveModule(4);
                }}
                className={` p-2 h-[105px] rounded-[10px] ${
                  activeModule["4"] === true ? styles.active : ""
                }`}
              >
                Module 4
                <div className="flex justify-between items-center w-[100%]">
                  <p className="  font-semibold   ">JavaScript Basics</p>
                  <p> 2 week</p>
                </div>
              </div>
              <div
                onClick={() => {
                  handleActiveModule(5);
                }}
                className={` p-2 h-[105px] rounded-[10px] ${
                  activeModule["5"] === true ? styles.active : ""
                }`}
              >
                Module 5
                <div className="flex justify-between items-center w-[100%]">
                  <p className="  font-semibold   ">
                    Front-end Tools <br /> and Libraries
                  </p>
                  <p> 2 week</p>
                </div>
              </div>
            </div>
            <div className=" box-border w-[60%]">
              <p className="py-2">{curriculum[activeModuleNum - 1].week}</p>
              <hr className=" mb-8 bg-gradient-to-r from-[#F87B34] to-[#CB5C1C] h-1" />

              <ul className="list-disc">
                <li className=" ml-10 font-semibold">
                  {curriculum[activeModuleNum - 1].title}
                  <ul className="list-disc font-normal ml-10 flex  mt-6 flex-col gap-y-6">
                    {curriculum[activeModuleNum - 1].points.map(
                      (point, idx) => (
                        <li key={idx}>{point}</li>
                      )
                    )}
                  </ul>
                </li>
              </ul>
              <hr className=" mt-8 bg-gradient-to-r from-[#F87B34] to-[#CB5C1C] h-1" />
              <p className=" ml-[30%] cursor-pointer my-8 text-[#F87B34] font-bold text-lg inline-block ">
                Download Curriculam
              </p>
            </div>{" "}
            {/* right div */}
          </div>
        </div>
      </div>
    </div>
  );
}
