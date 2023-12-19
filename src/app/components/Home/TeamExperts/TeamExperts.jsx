
const TeamExperts = () => {
  return (
    <div className="pb-[40px]">
      <p className="my-6 sm:text-[24px] text-center font-bold md:text-[28px] lg:h-[54px] lg:text-[32px]">
        Team Experts
      </p>
      <p className="mx-auto sm:px-10 lg:px-[0px] mb-[40px] text-center font-light md:px-20  md:text-[18px] lg:w-[905px] lg:text-xl">
        Exceptional instructors fueling innovation and shaping future tech
        leaders with their expertise, <br /> guidance, and unwavering passion
        for education.
      </p>
      <div
        className={`mt-5  flex justify-center gap-x-8 sm:gap-y-10 sm:flex-col  xl:mx-[100px] xl:flex-row`}
      >
        <div className=" mx-auto overflow-hidden rounded-2xl shadow-[0_4px_12px_0px_rgba(0,0,0,0.25)] sm:w-[90%] md:w-[48%] lg:w-[40%] xl:h-[553px] xl:w-[366px]">
          <img className="mx-auto" src="/experts_images/image1.png" />
          <div className="h-full bg-gradient-to-r from-[#5F2C51] to-[#8B3654] p-[30px]">
            <p className="text-[25px] font-bold text-white">
              {" "}
              Anil Kumar Ghorakav
            </p>
            <p className="mb-5 text-[25px] text-white">Ex Company : </p>
            <img
              className=" mr-2.5 mb-2 inline rounded-2xl bg-white p-2"
              src="/Other_images/Amazon_logo.svg"
            />
            <img
              className="inline rounded-2xl bg-white p-4"
              src="/Other_images/Oracle_logo.svg"
              alt=""
            />
            <p className="mt-5 text-[15px] text-white">
              As an entrepreneur who’s constantly finding ways to help people
              reach greater heights in their career and an Ex-Oracle guy, I know
              exactly what it takes to launch a career in the IT industry. The
              truth is your background or your degrees don’t matter! What
              matters is your skills, only your skills!
            </p>
          </div>
        </div>
        <div className=" mx-auto box-border overflow-hidden rounded-2xl lg:w-[40%] shadow-[0_4px_12px_0px_rgba(0,0,0,0.25)] sm:w-[90%] md:w-[48%]  xl:h-[553px] xl:w-[366px] ">
          <img className="mx-auto" src="/experts_images/image2.png" />
          <div className="h-full bg-gradient-to-r from-[#5F2C51] to-[#8B3654] p-6">
            <p className="text-[25px] font-bold text-white"> Praveen Kumar</p>
            <p className="mb-5 text-[25px] text-white">Ex Company : </p>
            <div className="text-[25px] text-white">
              <img
                className="mr-5 inline"
                src="/Other_images/microsoft-icon.svg"
                alt=""
              />
              Microsoft
            </div>
            <p className="mt-5 text-[15px] text-white">
              A pioneer in Learning & Development, Praveen always felt
              disengaged with traditional education. He believes supplementing
              education with relevant and engaging experience would prepare
              students for careers in the tech industry. He currently leads the
              program design at 10000 coders and brings in all his experience in
              studying various programs in the west to India for your success.{" "}
            </p>
          </div>
        </div>
        <div className="mx-auto box-border overflow-hidden rounded-2xl lg:w-[40%] shadow-[0_4px_12px_0px_rgba(0,0,0,0.25)] sm:w-[90%] md:w-[48%]  xl:h-[553px] xl:w-[366px] ">
          <img className="mx-auto" src="/experts_images/image3.png" />
          <div className="h-full bg-gradient-to-r from-[#5F2C51] to-[#8B3654] p-6">
            <p className=" text-[25px] font-bold text-white"> Pavan Kumar</p>
            <p className="mb-5 text-[25px] text-white">Ex Company : </p>
            <p className="mb-5 text-[25px] text-white">N/A</p>
            <p className="mt-5 text-[15px] text-white">
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
