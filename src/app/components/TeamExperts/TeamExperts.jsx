"use client";

export default function TeamExperts() {
  return (
    <div className=" px-16  pb-16" style={{ height: "100vh" }}>
      <p className="text-center pt-4 pb-6 font-bold text-2xl"> Team Experts</p>
      <p className="text-center font-light mb-3 text-xl">
        Exceptional instructors fueling innovation and shaping future tech
        leaders with their expertise, <br /> guidance, and unwavering passion
        for education.
      </p>
      <div className=" flex justify-center mt-5 gap-x-8 ">
        <div
          style={{
            width: "366px",
            height: "553px",
            boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
          }}
          className=" overflow-hidden box-border rounded-2xl"
        >
          <img className="mx-auto" src="/experts_images/image1.png" />
          <div
            className="h-full p-6"
            style={{
              background:
                "linear-gradient(123deg, #5F2C51 -4.94%, #8B3654 90.42%)",
            }}
          >
            <p className=" text-white font-bold text-2xl mt-7 mb-5">
              {" "}
              Anil Kumar Ghorakav
            </p>
            <p className=" mb-5 text-2xl text-white">Ex Company : </p>
            <img
              className="p-2 mr-2.5 bg-white inline rounded-2xl"
              src="/Other_images/Amazon_logo.svg"
            />
            <img
              className="p-4  bg-white inline rounded-2xl"
              src="/Other_images/Oracle_logo.svg"
              alt=""
            />
            <p className="mt-5 text-white text-sm">
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
          className=" overflow-hidden box-border rounded-2xl"
        >
          <img className="mx-auto" src="/experts_images/image2.png" />
          <div
            className="h-full p-6"
            style={{
              background:
                "linear-gradient(123deg, #5F2C51 -4.94%, #8B3654 90.42%)",
            }}
          >
            <p className=" text-white font-bold text-2xl mt-7 mb-5">
              {" "}
              Praveen Kumar
            </p>
            <p className=" mb-5 text-2xl text-white">Ex Company : </p>
            <div className="text-2xl text-white">
              <img
                className="inline mr-5"
                src="/Other_images/microsoft-icon.svg"
                alt=""
              />
              Microsoft
            </div>
            <p className="mt-5 text-white text-sm">
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
          className=" overflow-hidden box-border rounded-2xl"
        >
          <img className="mx-auto" src="/experts_images/image3.png" />
          <div
            className="h-full p-6"
            style={{
              background:
                "linear-gradient(123deg, #5F2C51 -4.94%, #8B3654 90.42%)",
            }}
          >
            <p className=" text-white font-bold text-2xl mt-7 mb-5">
              {" "}
              Anil Kumar Ghorakav
            </p>
            <p className=" mb-5 text-2xl text-white">Ex Company : </p>
            <p className=" mb-5 text-2xl text-white">N/A</p>
            <p className="mt-5 text-white text-sm">
              As an entrepreneur who’s constantly finding ways to help people
              reach greater heights in their career and an Ex-Oracle guy, I know
              exactly what it takes to launch a career in the IT industry. The
              truth is your background or your degrees don’t matter! What
              matters is your skills, only your skills!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
