import styles from "./Courses.module.css";

const Courses = ({ curriculum, activeModuleNum, handleActiveModule }) => {
  const renderModule = (moduleNum, title, duration) => (
    <div
      key={moduleNum}
      onClick={() => handleActiveModule(moduleNum)}
      className={`h-[105px] cursor-pointer rounded-[10px] p-2 xsm:w-[180px] xsm:flex-shrink-0 lg:h-[112px] ${
        activeModuleNum === moduleNum ? styles.active : ""
      } bg-[#f8f9fa] xsm:bg-[#f8f9fa]`}
    >
      <div className="flex justify-between">
        {" "}
        <p>Module {moduleNum}</p> <p className={` xsm:hidden `}>{duration}</p>{" "}
      </div>
      <p className={`font-semibold xsm:mt-4 xsm:text-sm lg:mt-3`}>{title}</p>
    </div>
  );

  return (
    <div id="Course" className="bg-[#dbf2fc] xsm:h-auto ">
      <p className={`text-center text-2xl font-semibold xsm:py-6 sm:py-6 `}>
        Courses that we Offer
      </p>
      <div className={` flex xsm:flex-col sm:flex-col lg:mx-10  lg:flex-row`}>
        <div
          className={`w-96 overflow-hidden rounded-[10px] xsm:mx-auto xsm:mb-10 xsm:w-[75%] xsm:shadow-md sm:mx-auto  sm:mb-10 sm:w-[70%] lg:w-[36%] xl:w-[30%]`}
        >
          <img
            src="/courses_images/courseheading.png"
            className="w-full"
            alt="Course-heading"
          />
          <div className="flex-shrink-0 bg-white p-4 xsm:px-10 xsm:text-sm sm:px-10 sm:text-lg">
            <p className="py-2 font-semibold ">Course Outcome</p>
            <p className="pb-2 text-[#838383]">
              Full-stack Front-end Developer
            </p>
            <p className="py-1 font-semibold xsm:text-sm  ">
              What You Will Learn
            </p>
            <p className="pb-2 tracking-tighter text-[#838383]">
              HTML, CSS, JavaScript, responsive design, user interface (UI)
              design, web accessibility, version control (Git), browser
              compatibility, front-end frameworks (e.g., React, Angular,
              Vue.js). CSS preprocessors (e.g., Sass, Less), DOM manipulation,
              web performance optimization, cross-browser testing, progressive
              web apps (PWAs), JavaScript libraries (e.g.,JQuery), front-end
              build tools etc.
            </p>
            <p
              className={`cursor-pointer pb-[1.2rem] pt-8 text-center  text-xl font-semibold`}
              style={{ color: "#ff8541" }}
            >
              Enroll Now
            </p>
          </div>
        </div>
        <div
          className={`xsm:shadow-mdl l rounded-[10px] bg-white xsm:mx-10 xsm:mb-10 sm:mx-auto sm:mb-10  sm:w-[98%] sm:p-3  md:w-[90%] lg:h-[44rem] lg:w-[60%] `}
        >
          <p className="p-3 text-xl text-[#AEAEAE]">Duration : 8 weeks</p>
          <div
            className={` flex xsm:w-[100%] xsm:flex-col sm:flex-row sm:justify-between lg:flex-row lg:justify-between xl:p-2`}
          >
            <div
              className={`flex ${styles.scroll} cursor-pointer flex-col gap-y-[1px] xsm:h-[120px] xsm:w-[100%] xsm:flex-row xsm:gap-x-4 xsm:overflow-y-hidden xsm:overflow-x-scroll  xsm:px-5 sm:w-[40%] sm:flex-col sm:gap-y-4 md:w-[30%] lg:w-[30%] lg:flex-col lg:gap-y-[14px]`}
            >
              {curriculum.map(({ week, title }, idx) =>
                renderModule(idx + 1, title, week),
              )}
            </div>
            <div className=" sm:mx-auto sm:w-[50%] md:w-[60%] lg:w-[60%]">
              <p className="py-2 xsm:my-4 xsm:text-center sm:mb-2">
                {curriculum[activeModuleNum - 1].week}
              </p>
              <hr className="mb-8 h-1 bg-gradient-to-r from-[#F87B34] to-[#CB5C1C]" />
              <ul className={` ${styles.points} xsm:h-[400px] sm:h-[362px]`}>
                <li className="ml-10  font-semibold ">
                  <p className="xsm:mb-4 sm:mb-2 md:mb-3 lg:mb-6">
                    {curriculum[activeModuleNum - 1].title}
                  </p>{" "}
                  <ul
                    className={`flex list-disc flex-col xsm:ml-10  xsm:h-[] xsm:gap-y-4 sm:gap-y-2 md:gap-y-6 lg:ml-10  `}
                  >
                    {curriculum[activeModuleNum - 1].points.map(
                      (point, idx) => (
                        <li key={idx}>{point}</li>
                      ),
                    )}
                  </ul>
                </li>
              </ul>
              <hr className="mt-8 h-1 bg-gradient-to-r from-[#F87B34] to-[#CB5C1C]" />
              <p
                className={`cursor-pointer text-lg font-bold text-[#F87B34] xsm:my-6 xsm:text-center sm:my-10 sm:text-center lg:my-16 `}
              >
                Download Curriculum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Courses;
