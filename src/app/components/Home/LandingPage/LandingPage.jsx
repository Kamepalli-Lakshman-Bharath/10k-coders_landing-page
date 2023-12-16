import styles from "./LandingPage.module.css";

const LandingPage = ({ activeItem }) => {
  const renderHomeCourseContent = () => (
    <div className=" xl:pb-4 ">
      <div className="flex xsm:flex-col sm:flex-col lg:flex-row">
        <div
          className={`xsm:mx-auto xsm:w-auto  lg:w-1/2 xl:ml-10 xl:h-full xl:pl-14 xl:text-start`}
        >
          <p className="font-semibold xsm:mb-4 xl:ml-0 sm:ml-10 xsm:ml-20 sm:text-start xsm:mt-3 xsm:text-start xsm:text-sm   sm:text-lg md:text-xl lg:text-start lg:text-2xl xl:my-5">
            Welcome to <br />
            <span style={{ color: "#ff8541" }}>10000</span> coders
          </p>
          <p
            className={` xsm:text-md font-bold xl:ml-0 sm:ml-10 xsm:mb-4 xsm:ml-20 xsm:mt-1 sm:text-start xsm:text-start sm:mb-2 sm:mt-4 sm:text-2xl md:my-3 md:text-3xl lg:mb-8 lg:text-start lg:text-4xl xl:mb-6 xl:w-9/12 xl:text-5xl`}
          >
            Changing Lives <br /> through IT Excellence
          </p>
          <p
            className={` xsm:mb-4 sm:pr-20 xsm:mt-5 md:mr-[10rem]  xsm:px-20 sm:text-start xsm:text-start xsm:text-sm sm:mx-auto sm:px-10  sm:text-base sm:tracking-tighter lg:mb-8 xl:mb-10 xl:px-0 xl:pr-20 xl:text-start `}
          >
            Transform your aspirations into achievements with our{" "}
            <span style={{ color: "#ff8541" }}>web development training</span>{" "}
            web development training and placement programs. Level up not only
            in coding but also in effective communication through our
            comprehensive training.
          </p>
          <button
            className={`xl:px-18 block sm:ml-10 rounded-xl bg-[#ff8541] xsm:my-5 xsm:ml-20 xsm:px-10 xsm:py-4 sm:my-10 sm:px-14 sm:py-5 md:my-5 xl:mx-0 xl:py-6`}
          ></button>
        </div>
        <div
          className={`xsm:mx-auto md:h-[24rem] lg:h-[45%] lg:w-[45%] md:w-[24rem] sm:w-1/2 sm:pb-10 xsm:mb-10 xsm:mt-5 xsm:h-[14rem] xsm:w-[18rem]  sm:mx-auto sm:h-64 xl:mr-20 `}
        >
          <img
            className="block xsm:h-full xsm:w-full sm:h-full sm:w-full "
            src="/LandingPageImages/guy_on_comp_1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );

  const renderScholarshipContent = () => (
    <div className="mb-10 sm:pb-10  ">
      <div className="flex ">
        <div className="w-1/2 flex-shrink-0 sm:my-10 sm:h-[300px] sm:pl-10 xl:ml-10  xl:pl-14">
          <p className="sm:mb-2 sm:mt-4 sm:text-2xl sm:font-bold lg:my-10 lg:text-4xl xl:mb-6 xl:mt-20 xl:w-9/12 xl:text-5xl ">
            Personalised Discounts
          </p>
          <p className="sm:mb-6 sm:tracking-tighter  md:w-11/12 lg:mb-14 lg:w-[75%] xl:mb-10 xl:w-7/12">
            Embark on a transformative tech adventure by taking our in-depth
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
          <button className="rounded-xl bg-white font-semibold text-[#ff8541] shadow-md sm:inline sm:px-1 sm:py-2 sm:text-sm xl:p-4">
            Request a call back
          </button>
        </div>
        <div className="sm:p-2 lg:mr-28">
          <img
            className=" block w-full h-full"
            src="/LandingPageImages/Girl_on_computer.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );

  const renderFreeLectureContent = () => (
    <div>
      <div className="flex ">
        <div
          className={`  w-1/2 flex-shrink-0 sm:h-[400px] sm:pl-10 xl:ml-10 xl:pl-14`}
        >
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
        <div className=" lg:mr-28 lg:h-[58%] lg:mt-20 ">
          <img
            className="w-full h-full"
            src="/LandingPageImages/guy_working_on_comp.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );

  return activeItem === "Home" || activeItem === "Course"
    ? renderHomeCourseContent()
    : activeItem === "Scholarship"
      ? renderScholarshipContent()
      : activeItem === "Free Lecture" && renderFreeLectureContent();
};
export default LandingPage;
