import styles from "./LandingPage.module.css";

const LandingPage = ({ activeItem }) => {
  const renderHomeCourseContent = () => (
    <div className="flex justify-between pb-[70px] sm:flex-col md:flex-col lg:mx-[100px] xl:flex-row">
      <div
        className={`sm:mx-auto  sm:mb-10 sm:w-[50%] md:mb-20 lg:w-[70%] xl:mx-[0px] xl:w-[35%]`}
      >
        <p
          className={`font-bold sm:my-6 sm:text-[18px] md:my-8 md:text-[20px] lg:text-2xl `}
        >
          Welcome to <br />
          <span className="text-[#ff8541]">10000</span> coders
        </p>
        <p
          className={`font-bold sm:pb-[14px] sm:text-3xl md:pb-[16px] md:text-4xl lg:inline-block lg:pb-[19px] lg:text-5xl  `}
        >
          Changing Lives through IT Excellence
        </p>
        <p
          className={`leading-[25px] sm:mb-[20px] sm:text-[14px] md:mb-[30px] md:text-[16px] lg:mb-[35px] lg:text-[18px]`}
        >
          Transform your aspirations into achievements with our{" "}
          <span className="text-[#ff8541]">web development training</span> web
          development training and placement programs. Level up not only in
          coding but also in effective communication through our comprehensive
          training.
        </p>
        <button
          className={`mr-[32px] mb-4 rounded-2xl bg-[#FF8541] font-bold text-white shadow-[0_2px_5px_0px_rgba(116,116,116,0.25)] sm:px-[15px] sm:py-[10px] sm:text-[14px] md:px-[20px] md:py-[14px] lg:px-[24px] lg:py-[16px] lg:text-[16px]`}
        >
          Get Enrolled
        </button>
        <button
          className={`rounded-2xl font-bold text-[#FF8541] shadow-[0_2px_5px_0px_rgba(116,116,116,0.25)] sm:px-[15px] sm:py-[10px] sm:text-[14px] md:px-[20px] md:py-[14px] md:text-[16px] lg:px-[24px] lg:py-[16px]`}
        >
          Request Call Back
        </button>
      </div>
      <div
        className={`sm:mx-auto sm:h-[290px] md:h-[380px] md:w-[520px] lg:h-[408px] lg:w-[547px] xl:mx-[0px] xl:mr-[30px] xl:mt-[100px]`}
      >
        <img
          className="h-full w-full "
          src="/LandingPageImages/guy_on_comp_1.png"
          alt=""
        />
      </div>
    </div>
  );

  const renderScholarshipContent = () => (
    <div className="flex justify-between pb-[125px] sm:flex-col md:flex-col lg:mx-[100px] lg:flex-col xl:flex-row">
      <div className="sm:mx-auto sm:mb-10 sm:mt-10 sm:w-[60%] lg:mb-[20px] lg:w-[60%] xl:mx-[0px] xl:mt-32 xl:w-[43%]">
        <p className="pb-[19px] font-bold sm:pb-[14px] sm:text-3xl md:text-4xl lg:text-5xl">
          Personalised Discounts
        </p>
        <p
          className={`leading-[25px] sm:mb-[20px] sm:text-[14px] md:mb-[32px] md:text-[16px] lg:mb-[35px] lg:text-[18px]`}
        >
          Embark on a transformative tech adventure by taking our in-depth
          assessment, meticulously designed to evaluate your skillset and
          knowledge. Based on your assessment performance,{" "}
          <span className="text-[#ff8541]">unlock substantial discounts</span>{" "}
          on our cutting-edge IT courses, ensuring an education tailored to your
          capabilities.
        </p>
        <button
          className={`mr-[32px] mb-3 rounded-2xl bg-[#FF8541] font-bold text-white shadow-[0_2px_5px_0px_rgba(116,116,116,0.25)] sm:px-[15px] sm:py-[10px] sm:text-[14px] md:px-[20px] md:py-[14px] lg:px-[24px] lg:py-[16px] lg:text-[16px]`}
        >
          Take Assessment
        </button>
        <button
          className={`rounded-2xl bg-[#FF8541] font-bold text-white shadow-[0_2px_5px_0px_rgba(116,116,116,0.25)] sm:px-[15px] sm:py-[10px] sm:text-[14px] md:px-[20px] md:py-[14px] lg:px-[24px] lg:py-[16px] lg:text-[16px]`}
        >
          Request Call Back
        </button>
      </div>
      <div className="sm:mx-auto sm:h-[290px] md:h-[390px] md:w-[520px] lg:h-[408px] lg:w-[547px] xl:mx-[0px] xl:mr-[30px] xl:mt-[60px]">
        <img
          className="h-full w-full"
          src="/LandingPageImages/Girl_on_computer.png"
          alt=""
        />
      </div>
    </div>
  );

  const renderFreeLectureContent = () => (
    <div className="flex justify-between pb-[95px] sm:flex-col md:flex-col lg:flex-col xl:mx-[100px] xl:flex-row">
      <div
        className={`sm:mx-auto sm:mb-10 sm:mt-10 sm:w-[60%] md:mb-[20px] lg:mt-10 lg:w-[60%] xl:mx-[0px] xl:mt-32 xl:w-[41%]`}
      >
        <p className="pb-[19px] font-bold sm:pb-[14px] sm:text-3xl md:pb-[16px] md:text-4xl lg:text-5xl">
          Grab Your Free Lecture
        </p>
        <p className="leading-[25px] sm:mb-[20px] sm:text-[14px] md:mb-[32px] md:text-[16px] lg:mb-[35px] lg:text-[18px]">
          Experience the 1000coders vibe for{" "}
          <span className="text-[#ff8541]">FREE!</span> Join our web development
          lecture and kickstart your coding journey at no cost. Seize this
          chance to learn and grow in the exciting world of web development
        </p>
        <button
          className={`mr-[32px] mb-3 rounded-2xl bg-[#FF8541] font-bold text-white shadow-[0_2px_5px_0px_rgba(116,116,116,0.25)] sm:px-[15px] sm:py-[10px] sm:text-[14px] md:px-[20px] md:py-[14px] lg:px-[24px] lg:py-[16px] lg:text-[16px]`}
        >
          Watch Free Lectures
        </button>
        <button
          className={`rounded-2xl bg-[#FF8541] font-bold text-white shadow-[0_2px_5px_0px_rgba(116,116,116,0.25)] sm:px-[15px] sm:py-[10px] sm:text-[14px] md:px-[20px] md:py-[14px] lg:px-[24px] lg:py-[16px] lg:text-[16px]`}
        >
          Request Call Back
        </button>
      </div>
      <div className="sm:mx-auto sm:h-[290px] md:h-[390px] md:w-[520px] lg:h-[408px] lg:w-[547px] xl:mx-[0px] xl:mr-[30px] xl:mt-[100px]">
        <img
          className="h-full w-full"
          src="/LandingPageImages/guy_working_on_comp.png"
          alt=""
        />
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
