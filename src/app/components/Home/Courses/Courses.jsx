
const Courses = ({ curriculum, activeModuleNum, handleActiveModule }) => {
  const renderModule = (moduleNum, title, duration) => (
    <div
      key={moduleNum}
      onClick={() => handleActiveModule(moduleNum)}
      className={` ${
        activeModuleNum === moduleNum ? styles.active : ""
      } cursor-pointer rounded-2xl hover:bg-[#d3d3d3] sm:flex-shrink-0  md:px-[20px] md:py-[10px] sm:p-2 sm:m-2 md:m-0  sm:w-[250px] md:w-[293px] xl:px-[30px] lg:py-[20px]`}
    >
      {" "}
      <p className="text-[10px] font-bold lg:mb-[10px]">Module {moduleNum}</p>
      <div className="flex items-center gap-x-10 justify-between font-bold ">
        {" "}
        <p className={`sm:text-[14px] lg:w-[144px] lg:text-[15px]`}>{title}</p>
        <p className={`xsm:hidden text-[10px] `}>{duration}</p>{" "}
      </div>
    </div>
  );

  return (
    <div id="Course" className="bg-[#DDF5FF] sm:px-[10px] pb-[40px] md:px-[20px]">
      <p
        className={`py-6 text-center font-bold sm:text-[24px] md:text-[28px] lg:text-[32px]`}
      >
        Courses that we Offer
      </p>
      <div
        className={`flex sm:flex-col sm:gap-y-10 lg:gap-x-[47px] lg:gap-y-10 xl:flex-row`}
      >
        <div
          className={`flex flex-shrink-0 flex-col overflow-hidden rounded-2xl shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)] sm:mx-auto sm:w-[90%] md:w-[60%] lg:w-[50%] xl:mx-[0px] xl:w-[381px]`}
        >
          <div className="">
            <img
              src="/courses_images/courseheading.png"
              className="w-full"
              alt="Course-heading"
            />
          </div>
          <div className="bg-white sm:p-3 md:p-4 xl:h-[417px]">
            <p className="font-bold md:text-[18px] lg:text-[20px] ">
              Course Outcome
            </p>
            <p className="text-[#838383]  sm:my-1 sm:text-[14px] md:text-[15px] lg:text-[16px] ">
              Full-stack Front-end Developer
            </p>
            <p className="font-bold sm:my-1 sm:text-[16px] md:text-[18px] lg:text-[20px]">
              What You Will Learn
            </p>
            <p className="leading-6 text-[#838383] sm:mb-[30px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
              HTML, CSS, JavaScript, responsive design, user interface (UI)
              design, web accessibility, version control (Git), browser
              compatibility, front-end frameworks (e.g., React, Angular,
              Vue.js). CSS preprocessors (e.g., Sass, Less), DOM manipulation,
              web performance optimization, cross-browser testing, progressive
              web apps (PWAs), JavaScript libraries (e.g.,JQuery), front-end
              build tools etc.
            </p>
            <button
              className={`mx-auto block cursor-pointer font-bold text-[#ff8541] sm:text-[16px] md:text-[18px] lg:text-[20px]`}
            >
              Enroll Now
            </button>
          </div>
        </div>
        <div
          className={` w-full rounded-lg bg-white shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)] sm:p-2 md:p-4`}
        >
          <p className="pb-1 text-xl text-[#AEAEAE]">Duration : 8 weeks</p>
          <div className={`flex sm:flex-col md:flex-row md:gap-x-12`}>
            <div
              className={`flex sm:flex-row  md:flex-col ${styles.scroll}  md:gap-y-4 lg:gap-y-1`}
            >
              {curriculum.map(({ week, title }, idx) =>
                renderModule(idx + 1, title, week),
              )}
            </div>
            <div className="w-full">
              <p className="font-bold sm:p-2 md:p-0 lg:p-0 sm:text-[14px] md:text-[14px] lg:text-[15px]">
                {curriculum[activeModuleNum - 1].week}
              </p>
              <hr className="h-1 rounded-xl bg-gradient-to-r from-[#F87B34] to-[#CB5C1C] md:mt-[10px]" />
              <ul
                className={`list-disc sm:m-[10px] md:text-[14px] sm:text-[14px] lg:m-[27px] lg:text-[15px] ${styles.points}`}
              >
                <li>
                  <p className="mb-[18px]  font-bold">
                    {curriculum[activeModuleNum - 1].title}
                  </p>
                  <ul className={`ml-[30px] list-disc`}>
                    {curriculum[activeModuleNum - 1].points.map(
                      (point, idx) => (
                        <li className="mb-[18px] " key={idx}>
                          {point}
                        </li>
                      ),
                    )}
                  </ul>
                </li>
              </ul>
              <hr className="h-1 rounded-xl bg-gradient-to-r from-[#F87B34] to-[#CB5C1C] lg:mt-[10px]" />
              <button className="mx-auto my-8 block text-center font-bold text-[#F87B34]">
                Download Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Courses;
