"use client";
import styles from "./TeamExperts.module.css";

export default function TeamExperts() {
  return (
    <div className=" px-16 pb-16 xl:h-[100vh]">
      <p className="pb-6 pt-4 text-center text-2xl font-bold"> Team Experts</p>
      <p className="mb-3 text-center text-xl font-light">
        Exceptional instructors fueling innovation and shaping future tech
        leaders with their expertise, <br /> guidance, and unwavering passion
        for education.
      </p>
      <div
        className={`mt-5 flex justify-center gap-x-8 ${styles.flex}  sm:flex-col sm:gap-y-10 xl:flex-row `}
      >
        <div
          style={{
            width: "366px",
            height: "553px",
            boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
          }}
          className=" box-border overflow-hidden rounded-2xl sm:mx-auto"
        >
          <img className="mx-auto" src="/experts_images/image1.png" />
          <div
            className="h-full p-6"
            style={{
              background:
                "linear-gradient(123deg, #5F2C51 -4.94%, #8B3654 90.42%)",
            }}
          >
            <p className="  mb-5 mt-7 text-2xl font-bold text-white">
              {" "}
              Anil Kumar Ghorakav
            </p>
            <p className=" mb-5 text-2xl text-white">Ex Company : </p>
            <img
              className="mr-2.5 inline rounded-2xl bg-white p-2"
              src="/Other_images/Amazon_logo.svg"
            />
            <img
              className="inline  rounded-2xl bg-white p-4"
              src="/Other_images/Oracle_logo.svg"
              alt=""
            />
            <p className="mt-5 text-sm text-white">
              As an entrepreneur who’s constantly finding ways to help people
              reach greater heights in their career and an Ex-Oracle guy, I know
              exactly what it takes to launch a career in the IT industry. The
              truth is your background or your degrees don’t matter! What
              matters is your skills, only your skills!
            </p>
          </div>
        </div>
        <div
          style={{
            width: "366px",
            height: "553px",
            boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
          }}
          className=" box-border overflow-hidden rounded-2xl sm:mx-auto"
        >
          <img className="mx-auto" src="/experts_images/image2.png" />
          <div
            className="h-full p-6"
            style={{
              background:
                "linear-gradient(123deg, #5F2C51 -4.94%, #8B3654 90.42%)",
            }}
          >
            <p className=" mb-5 mt-7 text-2xl font-bold text-white">
              {" "}
              Praveen Kumar
            </p>
            <p className=" mb-5 text-2xl text-white">Ex Company : </p>
            <div className="text-2xl text-white">
              <img
                className="mr-5 inline"
                src="/Other_images/microsoft-icon.svg"
                alt=""
              />
              Microsoft
            </div>
            <p className="mt-5 text-sm text-white">
              A pioneer in Learning & Development, Praveen always felt
              disengaged with traditional education. He believes supplementing
              education with relevant and engaging experience would prepare
              students for careers in the tech industry. He currently leads the
              program design at 10000 coders and brings in all his experience in
              studying various programs in the west to India for your success.{" "}
            </p>
          </div>
        </div>
        <div
          style={{
            width: "366px",
            height: "553px",
            boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
          }}
          className=" box-border overflow-hidden rounded-2xl sm:mx-auto"
        >
          <img className="mx-auto" src="/experts_images/image3.png" />
          <div
            className="h-full p-6"
            style={{
              background:
                "linear-gradient(123deg, #5F2C51 -4.94%, #8B3654 90.42%)",
            }}
          >
            <p className=" mb-5 mt-7 text-2xl font-bold text-white">
              {" "}
              Pavan Kumar
            </p>
            <p className=" mb-5 text-2xl text-white">Ex Company : </p>
            <p className=" mb-5 text-2xl text-white">N/A</p>
            <p className="mt-5 text-sm text-white">
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
}
