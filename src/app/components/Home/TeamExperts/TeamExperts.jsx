import styles from "./TeamExperts.module.css";

const TeamExperts = () => {
  return (
    <div className=" md:px-16 xsm:mb-10 sm:mb-10 xl:h-[100vh]">
      <p className=" text-center text-2xl  font-bold sm:my-6 xsm:my-6"> Team Experts</p>
      <p className="mb-3 xsm:text-sm xsm:px-14 sm:px-10 text-center text-xl font-light">
        Exceptional instructors fueling innovation and shaping future tech
        leaders with their expertise, <br /> guidance, and unwavering passion
        for education.
      </p>
      <div
        className={`mt-5 flex justify-center gap-x-8 ${styles.flex} sm:flex-col sm:gap-y-10 xl:flex-row `}
      >
        <div className="mx-auto box-border h-[553px] w-[366px] overflow-hidden rounded-2xl shadow-md xsm:h-[35rem] xsm:w-[60%] sm:mx-auto">
          <img className="mx-auto" src="/experts_images/image1.png" />
          <div className="h-full bg-gradient-to-r from-[#5F2C51] to-[#8B3654] p-6">
            <p className=" mb-5 mt-7 text-2xl font-bold text-white xsm:text-base">
              {" "}
              Anil Kumar Ghorakav
            </p>
            <p className="mb-5 text-2xl text-white xsm:text-sm">
              Ex Company :{" "}
            </p>
            <img
              className="mr-2.5 inline rounded-2xl bg-white p-2 xsm:h-8 xsm:rounded-md"
              src="/Other_images/Amazon_logo.svg"
            />
            <img
              className="inline rounded-2xl bg-white p-4 xsm:h-10 xsm:rounded-md"
              src="/Other_images/Oracle_logo.svg"
              alt=""
            />
            <p className="mt-5 text-sm text-white xsm:text-sm">
              As an entrepreneur who’s constantly finding ways to help people
              reach greater heights in their career and an Ex-Oracle guy, I know
              exactly what it takes to launch a career in the IT industry. The
              truth is your background or your degrees don’t matter! What
              matters is your skills, only your skills!
            </p>
          </div>
        </div>
        <div className="mx-auto box-border h-[553px] w-[366px] overflow-hidden rounded-2xl shadow-md xsm:h-[35rem] xsm:w-[65%] sm:mx-auto">
          <img className="mx-auto" src="/experts_images/image2.png" />
          <div className="h-full bg-gradient-to-r from-[#5F2C51] to-[#8B3654] p-6">
            <p className="mb-5 mt-7 text-2xl font-bold text-white xsm:text-base">
              {" "}
              Praveen Kumar
            </p>
            <p className="mb-5 text-2xl text-white xsm:text-base">
              Ex Company :{" "}
            </p>
            <div className="text-2xl xsm:text-base text-white">
              <img
                className="mr-5 xsm:h-6 inline"
                src="/Other_images/microsoft-icon.svg"
                alt=""
              />
              Microsoft
            </div>
            <p className="mt-5 text-sm text-white xsm:text-sm">
              A pioneer in Learning & Development, Praveen always felt
              disengaged with traditional education. He believes supplementing
              education with relevant and engaging experience would prepare
              students for careers in the tech industry. He currently leads the
              program design at 10000 coders and brings in all his experience in
              studying various programs in the west to India for your success.{" "}
            </p>
          </div>
        </div>
        <div className="mx-auto box-border h-[553px] w-[366px] overflow-hidden rounded-2xl shadow-md xsm:h-[35rem] xsm:w-[65%] sm:mx-auto">
          <img className="mx-auto" src="/experts_images/image3.png" />
          <div className="h-full bg-gradient-to-r from-[#5F2C51] to-[#8B3654] p-6">
            <p className="mb-5 mt-7 text-2xl font-bold text-white xsm:text-base">
              {" "}
              Pavan Kumar
            </p>
            <p className="mb-5 text-2xl text-white xsm:text-base">
              Ex Company :{" "}
            </p>
            <p className="mb-5 text-2xl text-white xsm:text-base">N/A</p>
            <p className="mt-5 text-sm text-white xsm:text-sm">
              A startup enthusiast and a technology erudite, Pavan dons the
              advisor hat at 10000 Coders. He ensures our curriculum is
              up-to-date with the latest industry needs and our program delivery
              uses the trending tools and processes adopted by the industry. He
              has led and directed many learning programs for fresher engineers
              in various roles at the companies he has served over the last 13+
              years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamExperts;
