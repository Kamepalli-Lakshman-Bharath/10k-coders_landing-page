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
    <div
      id="Course"
      className="bg-white xl:h-[100vh]"
      style={{ backgroundColor: "#dbf2fc" }}
    >
      <h1 className={`${styles.heading} flex-1 pb-6 pt-4 text-center text-2xl font-semibold `}>
        Courses that we Offer
      </h1>
      <div className={` ${styles.flex} flex sm:flex-col  xl:flex-row`}>
        <div
          className={`w-96 ${styles.card1} overflow-hidden rounded-[10px] shadow-2xl sm:mx-auto sm:mb-10`}
        >
          <img src="/courses_images/courseheading.png" alt="Course-heading" />
          <div className=" bg-white p-4 ">
            <p className="  py-2 font-semibold  ">Course Outcome</p>
            <h3 className="pb-2" style={{ color: "#838383" }}>
              Full-stack Front-end Developer
            </h3>
            <h3 className="  py-1 font-semibold  ">What You Will Learn</h3>
            <p1 className="pb-2 tracking-tighter" style={{ color: "#838383" }}>
              HTML, CSS, JavaScript, responsive design, user interface (UI)
              design, web accessibility, version control (Git), browser
              compatibility, front-end frameworks (e.g., React, Angular, Vue.js).
              CSS preprocessors (e.g., Sass, Less), DOM manipulation, web
              performance optimization, cross-browser testing, progressive web
              apps (PWAs), JavaScript libraries (e.g.,JQuery), front-end build
              tools etc.
            </p1>
            <p
              className={` ${styles.cardSpecialText} cursor-pointer pb-4 pt-8 text-center  text-xl font-semibold`}
              style={{ color: "#ff8541"} } 
            >
              Enroll Now
            </p>
          </div>
        </div>
        <div className={` ${styles.card2} rounded-[10px] bg-white shadow-2xl sm:mx-auto sm:mb-10  sm:w-[89%] sm:p-3 xl:w-4/6 xl:p-0`}>
          <p className=" p-3 text-xl text-[#AEAEAE]">Duration : 8 weeks</p>
          <div className="flex p-2 justify-between">
            <div className=" box-border flex w-[30%] cursor-pointer flex-col gap-y-[1px]  text-sm">
              {" "}
              {/* left div */}
              <div
                onClick={() => {
                  handleActiveModule(1);
                }}
                className={` cursor-pointer h-[105px] rounded-[10px] p-2   ${
                  activeModule["1"] === true ? styles.active : ""
                }`}
              >
                Module 1
                <div className="flex w-[100%] items-center justify-between">
                  <p className={`${styles.leftHeading} mt-[2%] font-semibold`}>
                    Introduction to <br /> Web Development <br /> and HTML
                  </p>
                  <p className={`${styles.leftHeading}`}> 1 week</p>
                </div>
              </div>
              <div
                onClick={() => {
                  handleActiveModule(2);
                }}
                className={` cursor-pointer h-[105px] rounded-[10px] p-2 ${
                  activeModule["2"] === true ? styles.active : ""
                }`}
              >
                Module 2
                <div className="mt-[5%] flex w-[100%] justify-between">
                  <p className={`${styles.leftHeading}  font-semibold`}>
                    CSS Fundamentals
                  </p>
                  <p className={`${styles.leftHeading}`}> 1 week</p>
                </div>
              </div>
              <div
                onClick={() => {
                  handleActiveModule(3);
                }}
                className={` box-border  cursor-pointer h-[105px] rounded-[10px] p-2 ${
                  activeModule["3"] === true ? styles.active : ""
                }`}
              >
                Module 3
                <div className="box-border  flex h-[80%] w-[100%] items-center justify-between">
                  <p className={`${styles.leftHeading} font-semibold`}>
                    Responsive Web <br /> Design
                  </p>
                  <p className={`${styles.leftHeading}`}> 1 week</p>
                </div>
              </div>
              <div
                onClick={() => {
                  handleActiveModule(4);
                }}
                className={`cursor-pointer h-[105px] rounded-[10px] p-2 ${
                  activeModule["4"] === true ? styles.active : ""
                }`}
              >
                Module 4
                <div className="mt-[5%] flex  w-[100%] items-center justify-between">
                  <p className={` ${styles.leftHeading} font-semibold`}>JavaScript Basics</p>
                  <p className={`${styles.leftHeading}`}> 2 week</p>
                </div>
              </div>
              <div
                onClick={() => {
                  handleActiveModule(5);
                }}
                className={` cursor-pointer h-[105px] rounded-[10px] p-2 ${
                  activeModule["5"] === true ? styles.active : ""
                }`}
              >
                Module 5
                <div className="flex w-[100%] items-center justify-between">
                  <p className={`${styles.leftHeading} mt-[5%] font-semibold`}>
                    Front-end Tools <br /> and Libraries
                  </p>
                  <p className={`${styles.leftHeading}`}> 2 week</p>
                </div>
              </div>
            </div>
            <div className=" box-border w-[60%]">
              <p className="py-2">{curriculum[activeModuleNum - 1].week}</p>
              <hr className=" mb-8 h-1 bg-gradient-to-r from-[#F87B34] to-[#CB5C1C]" />

              <ul className="list-disc">
                <li className=" ml-10 font-semibold">
                  {curriculum[activeModuleNum - 1].title}
                  <ul className={`ml-10 ${styles.car2Text} mt-6 flex list-disc  flex-col gap-y-6 font-normal`}>
                    {curriculum[activeModuleNum - 1].points.map(
                      (point, idx) => (
                        <li key={idx}>{point}</li>
                      ),
                    )}
                  </ul>
                </li>
              </ul>
              <hr className=" mt-8 h-1 bg-gradient-to-r from-[#F87B34] to-[#CB5C1C]" />
              <p className={` ${styles.cardSpecialText} my-8 ml-[30%] inline-block cursor-pointer text-lg font-bold text-[#F87B34] `}>
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
