"use client";
import { useState } from "react";
import TopBar from "../TopBar/TopBar";
export default function LandingPage() {
  const [activeItem, setActiveItem] = useState("Home");
  const getItem = (item) => {
    setActiveItem(item);
    console.log(item);
  };
  return (
    ((activeItem === "Home" || activeItem === "Course") && (
      <div style={{ height: "100vh" }}>
        <TopBar getClickedItem={getItem} />
        <div className="flex">
          <div className=" pl-14 w-1/2">
            <div className=" ml-10 text-start mb-10 mt-20 w-40 font-bold text-2xl">
              Welcome to <br />
              <span style={{ color: "#ff8541" }}>10000</span> coders
            </div>
            <p className="ml-10 mb-6 w-9/12 font-bold text-5xl">
              Changing Lives &nbsp; &nbsp; &nbsp; through IT Excellence
            </p>
            <p className="ml-10 mb-10 w-8/12 ">
              Transform your aspirations into achievements with our{" "}
              <span style={{ color: "#ff8541" }}>web development training</span>{" "}
              web development training and placement programs. Level up not only
              in coding but also in effective communication through our
              comprehensive training.
            </p>
            <button className="bg-[#ff8541] inline-block p-4 text-white rounded-2xl cursor-pointer ml-10">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </button>
          </div>
          <div className="flex items-end">
            <img
              className="block h-5/6"
              src="/LandingPageImages/guy_on_comp_1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    )) ||
    (activeItem === "Scholarship" && (
      <div style={{ height: "100vh" }}>
        <TopBar getClickedItem={getItem} />
        <div className="flex ">
          <div className=" pl-14 w-1/2">
            <p className=" mt-[9.5rem]  ml-10 mb-6 w-9/12 font-bold text-5xl">
              Personalised Discounts
            </p>
            <p className="ml-10 mb-10 w-8/12 ">
              Embark on a transformative tech adventure by taking our in-
              <br />
              depth assessment, meticulously designed to evaluate your <br />
              skillset and knowledge. Based on your assessment <br />
              performance,
              <span style={{ color: "#ff8541" }}>
                unlock substantial discounts
              </span>
              on our cutting-edge <br /> IT courses, ensuring an education
              tailored to your capabilities.
            </p>
            <button className="  bg-[#ff8541] font-semibold inline-block p-4 text-white rounded-2xl ml-10  ">
              Take Assessment
            </button>{" "}
            <button className=" shadow-lg border bg-[#fff] font-semibold inline-block p-4 text-[#ff8541] rounded-2xl cursor-pointer ml-10  ">
              Request a call back
            </button>
          </div>
          <div className="w-[50%] flex items-start justify-start">
            <img
              className="block mt-0 h-[80%]"
              src="/LandingPageImages/Girl_on_computer.png"
              alt=""
            />
          </div>
        </div>
      </div>
    )) ||
    (activeItem === "Free Lecture" && (
      <div style={{ height: "100vh" }}>
        <TopBar getClickedItem={getItem} />
        <div className="flex ">
          <div className=" pl-14 w-1/2">
            <p className=" mt-[9.5rem]  ml-10 mb-6 w-9/12 font-bold text-5xl">
              Grab Your Free Lecture
            </p>
            <p className="ml-10 mb-10 w-8/12 ">
              Experience the 1000coders vibe for{" "}
              <span style={{ color: "#ff8541" }}>FREE!</span> Join our web
              development lecture and kickstart your coding journey at no <br />{" "}
              cost. Seize this chance to learn and grow in the exciting world{" "}
              <br /> of web development
            </p>
            <button className="  bg-[#ff8541] font-semibold inline-block p-4 text-white rounded-2xl ml-10  ">
              Take Assessment
            </button>{" "}
            <button className=" shadow-lg border bg-[#fff] font-semibold inline-block p-4 text-[#ff8541] rounded-2xl cursor-pointer ml-10  ">
              Request a call back
            </button>
          </div>
          <div className="w-[50%] flex items-end justify-start">
            <img
              className="block mt-0 h-[80%]"
              src="/LandingPageImages/guy_working_on_comp.png"
              alt=""
            />
          </div>
        </div>
      </div>
    ))
  );
}
