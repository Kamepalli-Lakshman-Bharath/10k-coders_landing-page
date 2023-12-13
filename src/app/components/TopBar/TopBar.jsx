"use client";
import { useState } from "react";
import styles from "./TopBar.module.css"
import Link from "next/link";

export default function TopBar(props) {
  const { getClickedItem } = props;
  const [activeItem, setActiveItem] = useState("Home");
  const getActiveItem = (item) => {
    setActiveItem(item);
    console.log(item);
  };

  return (
    <nav
      className={` ${styles.nav} box-border flex items-center justify-between md:px-5 xl:px-6`}
    >
      <div className={`${styles.logo} sm:h-10 sm:pl-2 md:h-[45px]  xl:h-14`}>
        <img
          className={`ml-3 h-full w-full`}
          src="/LandingPageImages/logo.png"
        />
      </div>
      <div className={`${styles.menu} flex font-semibold sm:mt-3 sm:w-[20rem] sm:justify-between xl:w-4/12 xl:p-2.5 `}>
        <p
          className={`${
            activeItem === "Home"
              ? "ease border-b-2 border-b-[#F87B34] text-[#F87B34] transition-all duration-150"
              : ""
          }  cursor-pointer`}
          onClick={() => {
            getClickedItem("Home");
            getActiveItem("Home");
          }}
        >
          Home
        </p>
        <Link
          href="#Course"
          scroll={true}
          className={`${
            activeItem === "Course"
              ? "ease border-b-2 border-b-[#F87B34] text-[#F87B34] transition-all duration-150"
              : ""
          }  cursor-pointer`}
          onClick={() => {
            getClickedItem("Course");
            getActiveItem("Course");
          }}
        >
          Course
        </Link>
        <p
          className={`${
            activeItem === "Scholarship"
              ? "ease border-b-2 border-b-[#F87B34] text-[#F87B34] transition-all duration-150"
              : ""
          }  cursor-pointer`}
          onClick={() => {
            getClickedItem("Scholarship");
            getActiveItem("Scholarship");
          }}
        >
          Scholarship
        </p>
        <p
          className={`${
            activeItem === "Free Lecture"
              ? "ease border-b-2 border-b-[#F87B34] text-[#F87B34] transition-all duration-150"
              : ""
          }  cursor-pointer`}
          onClick={() => {
            getClickedItem("Free Lecture");
            getActiveItem("Free Lecture");
          }}
        >
          Free Lecture
        </p>
      </div>
      <div>
          <button
            style={{
              color: "#ff8541",
              borderRadius: "16px",
              boxShadow: "0px 2px 5px 0px rgba(116, 116, 116, 0.25)",
            }}
            className={`mr-2 border sm:mt-2 ${styles.btn} sm:p-3 xl:px-5`}
          >
            Login{" "}
            <img
              className="inline"
              src="/LandingPageImages/CaretDown.svg"
              alt=""
            />
          </button>
      </div>
    </nav>
  );
}
