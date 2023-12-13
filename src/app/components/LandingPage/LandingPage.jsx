"use client";
import { useState } from "react";
import styles from "./LandingPage.module.css";
import TopBar from "../TopBar/TopBar";
export default function LandingPage() {
  const [activeItem, setActiveItem] = useState("Home");
  const getItem = (item) => {
    setActiveItem(item);
  };
  return (
    ((activeItem === "Home" || activeItem === "Course") && (
      <div className=" duration-4  mb-10 h-[auto] xl:h-[100vh]">
        <TopBar getClickedItem={getItem} />
        <div className="flex">
          <div
            className={`w-1/2 flex-shrink-0 sm:h-[400px] sm:pl-10 xl:ml-10 xl:h-full xl:pl-14`}
          >
            <h2
              className={`font-semibold sm:mt-5 sm:w-1/2 sm:text-lg md:mb-8 md:mt-14 md:text-xl  lg:text-2xl xl:mb-10 xl:mt-20 ${styles.welcomeText} `}
            >
              Welcome to <br />
              <span style={{ color: "#ff8541" }}>10000</span> coders
            </h2>
            <h1
              className={`${styles.heading} font-bold sm:mb-2 sm:mt-4 sm:text-2xl md:text-3xl lg:mb-8 lg:text-4xl xl:mb-6 xl:w-9/12 xl:text-5xl`}
            >
              Changing Lives <br /> through IT Excellence
            </h1>
            <p
              className={` ${styles.para} sm:tracking-tighter md:w-[85%] lg:mb-8 lg:w-[70%] xl:mb-10 xl:w-8/12`}
            >
              Transform your aspirations into achievements with our{" "}
              <span style={{ color: "#ff8541" }}>web development training</span>{" "}
              web development training and placement programs. Level up not only
              in coding but also in effective communication through our
              comprehensive training.
            </p>
            <button className={ `${styles.btn} block rounded-xl bg-[#ff8541] sm:my-10  sm:px-14 sm:py-5 md:my-5 xl:px-20 xl:py-6`}></button>
          </div>
          <div
            className={` sm:px-6 sm:py-10 md:mt-14 md:p-4 xl:flex xl:items-end xl:p-0`}
          >
            <img
              className="block sm:h-full sm:w-full xl:h-5/6"
              src="/LandingPageImages/guy_on_comp_1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    )) ||
    (activeItem === "Scholarship" && (
      <div className="mb-10 sm:pb-10  xl:h-[100vh]">
        <TopBar getClickedItem={getItem} />
        <div className="flex ">
          <div className="w-1/2 flex-shrink-0 sm:my-10 sm:h-[300px] sm:pl-10 xl:ml-10  xl:pl-14">
            <p className="sm:mb-2 sm:mt-4 sm:text-2xl sm:font-bold lg:my-10 lg:text-4xl xl:mb-6 xl:mt-20 xl:w-9/12 xl:text-5xl ">
              Personalised Discounts
            </p>
            <p className="sm:mb-6 sm:tracking-tighter  md:w-11/12 lg:mb-14 lg:w-[75%] xl:mb-10 xl:w-7/12">
              Embark on a transformative tech adventure by taking our in- depth
              assessment, meticulously designed to evaluate your skillset and
              knowledge. Based on your assessment performance,{" "}
              <span style={{ color: "#ff8541" }}>
                unlock substantial discounts
              </span>{" "}
              on our cutting-edge IT courses, ensuring an education tailored to
              your capabilities.
            </p>
            <button className="rounded-xl bg-[#ff8541] font-semibold text-white sm:mr-1 sm:inline sm:px-1 sm:py-2 sm:text-sm xl:rounded-2xl xl:p-4">
              Take Assessment
            </button>{" "}
            <button className="rounded-xl border bg-white font-semibold text-[#ff8541] shadow-md sm:inline sm:px-1 sm:py-2 sm:text-sm xl:p-4">
              Request a call back
            </button>
          </div>
          <div className="sm:p-2 xl:mt-12">
            <img
              className=" block h-[75%]"
              src="/LandingPageImages/Girl_on_computer.png"
              alt=""
            />
          </div>
        </div>
      </div>
    )) ||
    (activeItem === "Free Lecture" && (
      <div>
        <TopBar getClickedItem={getItem} />
        <div className="flex xl:h-[100vh]  ">
          <div className="  w-1/2 flex-shrink-0 sm:h-[400px] sm:pl-10 xl:ml-10 xl:pl-14">
            <p className="xl:b-6 font-bold sm:mb-2 sm:mt-8 sm:text-2xl lg:text-4xl xl:mb-10 xl:mt-[8rem] xl:w-9/12 xl:text-5xl">
              Grab Your Free <br /> Lecture
            </p>
            <p className="xl:mb-13 sm:mb-6 sm:tracking-tighter md:w-[70%] xl:w-8/12">
              Experience the 1000coders vibe for{" "}
              <span style={{ color: "#ff8541" }}>FREE!</span> Join our web
              development lecture and kickstart your coding journey at no cost.
              Seize this chance to learn and grow in the exciting world of web
              development
            </p>
            <button className="bg-[#ff8541] font-semibold text-white sm:mr-1 sm:inline sm:rounded-xl sm:px-1 sm:py-2 sm:text-sm xl:rounded-2xl xl:p-4">
              Take Assessment
            </button>{" "}
            <button className=" bg-white font-semibold text-[#ff8541] shadow-md sm:inline sm:rounded-xl sm:px-1 sm:py-2 sm:text-sm sm:tracking-tighter xl:rounded-2xl xl:p-4 ">
              Request a call back
            </button>
          </div>
          <div className="flex sm:items-center lg:items-start xl:items-start">
            <img
              className="sm:h-[60%] lg:mt-5 lg:h-[70%] xl:mt-24 xl:h-[50%]"
              src="/LandingPageImages/guy_working_on_comp.png"
              alt=""
            />
          </div>
        </div>
      </div>
    ))
  );
}
