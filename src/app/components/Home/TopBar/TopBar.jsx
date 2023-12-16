import Link from "next/link";
import { CaretDown } from "../../../Assets/TopbarSvg/TopbarSvg";


const TopBar = ({ getClickedItem, activeItem }) => {
  const menuItem = (label, id) => (
    <p
      className={`${
        activeItem === id
          ? "ease border-b-2  border-b-[#F87B34] text-[#F87B34] transition-all duration-150"
          : ""
      }  cursor-pointer sm:text-base lg:text-xl xsm:text-[14px]`}
      onClick={() => {
        getClickedItem(id);
      }}
    >
      {label}
    </p>
  );

  return (
    <nav className="flex items-center justify-between justify-items-center sm:px-4 md:px-6 xl:px-6">
      <div className="xsm:w-18 xsm:flex xsm:h-12 sm:h-20 sm:w-28 md:h-28 md:w-28 lg:h-[10rem] lg:w-[11rem]">
        <img
          className="h-full w-full xsm:h-full xsm:w-full"
          src="/LandingPageImages/logo-1.png"
        />
      </div>
      <div className="flex  justify-between font-semibold xsm:w-4/6 sm:w-[56%] md:w-3/6 md:text-lg lg:text-xl   xl:p-2.5">
        {menuItem("Home", "Home")}
        <Link href="#Course" scroll={true} passHref>
          {menuItem("Course", "Course")}
        </Link>
        {menuItem("Scholarship", "Scholarship")}
        {menuItem("Free Lecture", "Free Lecture")}
      </div>
      <div>
        <button className="text-[#ff8541] xsm:mr-1  xsm:rounded-lg xsm:text-sm xsm:shadow-sm sm:rounded-xl sm:px-4 sm:py-2 sm:shadow-md md:px-5 md:text-lg lg:px-6 lg:py-[15px] lg:text-xl xsm:p-2 xl:px-5">
          Login <CaretDown className="inline xsm:h-2 " />
        </button>
      </div>
    </nav>
  );
};

export default TopBar;
