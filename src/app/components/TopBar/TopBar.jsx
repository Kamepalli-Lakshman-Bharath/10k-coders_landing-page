"use client";
import { useState } from "react";
import Link from "next/link";

export default function TopBar(props) {
  const { getClickedItem } = props;
  const [activeItem, setActiveItem] = useState("Home");
  const getActiveItem = (item) => {
    setActiveItem(item);
    console.log(item);
  };
  const scrollToCourseSection = (e) => {
    e.preventDefault();
    const courseSection = document.getElementById("Course");

    if (courseSection) {
      courseSection.scrollIntoView({ behavior: "smooth" });
      getClickedItem("Course");
      getActiveItem("Course");
    }
  };

  return (
    <nav className=" px-16 box-border flex justify-between items-center">
      <div>
        <img src="/LandingPageImages/logo.png" />
      </div>
      <div className=" h-[39px] font-semibold gap-x-10 items-center flex p-2.5">
        <p
          className={`${
            activeItem === "Home"
              ? "border-b-2 transition-all duration-150 ease text-[#F87B34] border-b-[#F87B34]"
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
              ? "border-b-2 transition-all duration-150 ease text-[#F87B34] border-b-[#F87B34]"
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
              ? "border-b-2 transition-all duration-150 ease text-[#F87B34] border-b-[#F87B34]"
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
              ? "border-b-2 transition-all duration-150 ease text-[#F87B34] border-b-[#F87B34]"
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
        <div>
          <p
            style={{
              color: "#ff8541",
              borderRadius: "16px",
              boxShadow: "0px 2px 5px 0px rgba(116, 116, 116, 0.25)",
            }}
            className="cursor-pointer mt-4 font-semibold px-6 py-4"
          >
            Login{" "}
            <img
              className="inline"
              src="/LandingPageImages/CaretDown.svg"
              alt=""
            />
          </p>
        </div>
      </div>
    </nav>
  );
}
