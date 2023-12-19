import Link from "next/link";
import styles from "./TopBar.module.css";
import { CaretDown } from "../../../Assets/TopbarSvg/TopbarSvg";

const TopBar = ({ getClickedItem, activeItem, handlDropDown, isDropDown }) => {
  const menuItem = (label, id) => (
    <p
      className={`${
        activeItem === id
          ? "ease border-b-2 border-b-[#F87B34] text-[#F87B34] transition-all duration-150"
          : ""
      } ${styles.item} xsm:text-[14px] cursor-pointer font-bold sm:text-base `}
      onClick={() => {
        getClickedItem(id);
      }}
    >
      {label}
    </p>
  );

  return (
    <nav
      className={`flex ${styles.nav} items-center justify-between sm:px-4 md:mx-[20px] md:my-[20px] md:px-0 lg:mx-[35px] lg:my-[20px]`}
    >
      <div className="xsm:w-18 xsm:flex xsm:h-12 sm:h-20 sm:w-28 md:h-[70px] md:w-auto lg:h-[90px] lg:w-[140px] xl:h-[100] xl:w-[147px]">
        <img
          className="xsm:h-full xsm:w-full h-full w-full "
          src="/LandingPageImages/Navbar-Logo.png"
        />
      </div>
      <div
        className={`flex ${
          isDropDown ? styles.menu : styles.dropdown
        } xsm:w-[64%] xsm:gap-x-3 md:gap-x-4 sm:gap-x-3 lg:gap-x-10 sm:w-[56%]  md:w-auto`}
      >
        {menuItem("Home", "Home")}
        <Link href="#Course" scroll={true}>
          {menuItem("Course", "Course")}
        </Link>
        {menuItem("Scholarship", "Scholarship")}
        {menuItem("Free Lecture", "Free Lecture")}
        <p
          className={`cursor-pointer font-semibold ${styles.hide} border-b border-[#edf6f9] p-1 text-md  hover:text-[#CB5C1C]`}
        >
          <img
            className="inline  h-5"
            src="/LandingPageImages/login-bracket-svgrepo-com.svg"
          />{" "}
          Login
        </p>
      </div>
      <div>
        <button
          className={`text-[#FF8541] ${styles.hidebtn} xsm:p-2 xsm:text-sm rounded-2xl font-bold shadow-[0_2px_5px_0px_rgba(116,116,116,0.25)] sm:px-4 sm:py-2 md:px-[20px] md:py-[14px] lg:px-[24px] lg:py-[16px] lg:text-base`}
        >
          Login <CaretDown className="inline" />
        </button>
      </div>
      <img
        className={`h-10 cursor-pointer ${styles.hide} float-right shadow-[0_2px_5px_0px_rgba(116,116,116,0.25)] rounded-md p-2 mr-4 w-10`}
        onClick={() => handlDropDown()}
        src={`${
          !isDropDown
            ? "/LandingPageImages/menu-svgrepo-com.svg "
            : "/LandingPageImages/cross-svgrepo-com.svg"
        }`}
        alt=""
      />
    </nav>
  );
};

export default TopBar;
