"use client";

export default function Footer() {
  return (
    <div
      className="  text-white flex flex-col h-[337px] pt-[9px] gap-y-[30.5px] pl-[29px] pb-[21.54px] rounded-[32px] overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #CB5C1C 0.12%, #F87B34 100.94%), #FFF",
      }}
    >
      <div>
        <img
          className="w-[162px] ml-20 h-[52px]"
          src="/Footer_images/logo with dark bg 1.png"
        />
      </div>
      <div className="flex flex-row justify-around">
        <div>
          <p className=" text-2xl font-bold">
            Reach Us{" "}
            <img
              className="inline "
              src="/Footer_images/uil_message.svg"
              alt=""
            />
          </p>
          <p className=" text-lg items-center mt-6">
            <img
              className=" h-8 w-8 inline"
              src="/Footer_images/logos_whatsapp-icon.svg"
              alt=""
            />{" "}
            &nbsp; +91&nbsp;9700610241
          </p>
          <p className=" mt-6 text-lg">
            <img
              className="h-8 w-8 inline "
              src="/Footer_images/logos_google-gmail.svg"
              alt=""
            />{" "}
            &nbsp; hello@10000coders.com
          </p>
          <div className=" py-4 gap-x-6 flex">
            <img
              className="h-8 w-8"
              src="/Footer_images/logos_facebook.svg"
              alt=""
            />
            <img
              className="h-8 w-8"
              src="/Footer_images/skill-icons_instagram.svg"
              alt=""
            />
            <img
              className="h-8 w-8"
              src="/Footer_images/logos_youtube-icon.svg"
              alt=""
            />
            <img
              className="h-8 w-8"
              src="/Footer_images/skill-icons_linkedin.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <p className=" text-2xl mb-2 font-bold">
            Quick Links{" "}
            <img
              className="inline"
              src="/Footer_images/material-symbols_link.svg"
              alt=""
            />
          </p>
          <p className=" mb-2 text-lg ">
            <img
              className="inline "
              src="/Footer_images/iconamoon_home-bold.svg"
              alt=""
            />
            &nbsp; Home
          </p>
          <p className=" mb-2 text-lg">
            <img
              className="inline "
              src="/Footer_images/clarity_list-line.svg"
              alt=""
            />
            &nbsp; Course
          </p>
          <p className="mb-2 text-lg">
            <img
              className="inline "
              src="/Footer_images/ph_trophy-bold.svg"
              alt=""
            />
            &nbsp; Success Stories
          </p>
          <p className=" text-lg">
            <img
              className="inline"
              src="/Footer_images/pajamas_work.svg"
              alt=""
            />
            &nbsp; partners
          </p>
        </div>
        <div className=" mb-2  text-lg pt-[33px]">
          <p>
            <img
              className="inline "
              src="/Footer_images/mdi_about-circle-outline.svg"
              alt=""
            />
            &nbsp; About Us
          </p>
          <p className=" text-lg">
            <img
              className="mb-2 inline "
              src="/Footer_images/fluent-mdl2_review-solid.svg"
              alt=""
            />
            &nbsp; Reviews
          </p>
          <p className=" mb-2 text-lg">
            <img
              className=" inline "
              src="/Footer_images/octicon_person-16.svg"
              alt=""
            />
            &nbsp; Work With Us
          </p>
        </div>
        <div className="">
          <p className="text-2xl font-semibold">
            Office &nbsp;
            <img
              className="inline"
              src="/Footer_images/icomoon-free_office.svg"
              alt=""
            />{" "}
          </p>
          <p className=" text-lg">
            <img
              className="inline "
              src="/Footer_images/ion_location.svg"
              alt=""
            />
            Mig 214, 2nd floor, Road <br /> No. 1, KPHB Kukatpally, <br />{" "}
            Hyderabad, Telangana - <br /> 500072
          </p>
        </div>
      </div>
    </div>
  );
}
