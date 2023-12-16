import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div
      className={`flex ${styles.main} flex-col overflow-hidden text-white sm:h-[290px]  sm:gap-y-[30px] sm:text-sm xl:h-[337px]`}
      style={{
        background:
          "linear-gradient(90deg, #CB5C1C 0.12%, #F87B34 100.94%), #FFF",
      }}
    >
      <div> 
        <img
          className={` ${styles.logo} md:ml-8 md:mt-4 sm:ml-6 sm:mt-4 sm:w-[120px] lg:ml-5 lg:w-[140px] xl:ml-10 xl:w-[162px]`}
          src="/Footer_images/logo with dark bg 1.png"
        />
      </div>
      <div className="flex flex-row justify-around ">
        <div className={`${styles.first} sm:pl-4`}>
          <p
            className={`${styles.heading} font-bold sm:sm:text-lg xl:text-2xl`}
          >
            Reach Us{" "}
            <img
              className="inline  sm:h-[1.2rem]"
              src="/Footer_images/uil_message.svg"
            />
          </p>
          <p className=" items-center sm:mt-3 xl:text-lg">
            <img
              className= {`inline sm:h-6 mr-2 sm:w-6 xl:h-8 ${styles.img} xl:w-8`} 
              src="/Footer_images/logos_whatsapp-icon.svg"
              alt=""
            />{" "}
            +91&nbsp;9700610241
          </p>
          <p className="items-center sm:mt-3 xl:text-lg">
            <img
              className={`inline mr-2 sm:h-6 sm:w-6 xl:h-8 xl:w-8 ${styles.img}`}
              src="/Footer_images/logos_google-gmail.svg"
              alt=""
            />{" "}
            hello@10000coders.com
          </p>
          <div className=" flex gap-x-3 py-4">
            <img
              className={`sm:h-7 ${styles.img} sm:w-7 xl:h-8 xl:w-8`}
              src="/Footer_images/logos_facebook.svg"
              alt=""
            />
            <img
              className={`sm:h-7 sm:w-7 xl:h-8 xl:w-8 ${styles.img}`}
              src="/Footer_images/skill-icons_instagram.svg"
              alt=""
            />
            <img
              className={`sm:h-7 sm:w-7 xl:h-8 xl:w-8 ${styles.img}`}
              src="/Footer_images/logos_youtube-icon.svg"
              alt=""
            />
            <img
              className={`sm:h-7 sm:w-7 xl:h-8 xl:w-8 ${styles.img}`}
              src="/Footer_images/skill-icons_linkedin.svg"
              alt=""
            />
          </div>
        </div>
        <div className=" sm:ml-2">
          <p
            className={`${styles.heading} mb-2  font-bold sm:text-lg xl:text-2xl`}
          >
            Quick Links{" "}
            <img
              className={` ${styles.icon} inline sm:h-5 xl:h-8 xl:w-8`}
              src="/Footer_images/material-symbols_link.svg"
              alt=""
            />
          </p>
          <p className=" mb-2 xl:text-lg  ">
            <img
              className={`inline sm:h-5 xl:h-auto xl:w-auto ${styles.icon}`}
              src="/Footer_images/iconamoon_home-bold.svg"
              alt=""
            />
            &nbsp; Home
          </p>
          <p className="mb-2 xl:text-lg ">
            <img
              className={`inline sm:h-5 xl:h-auto xl:w-auto ${styles.icon}`}
              src="/Footer_images/clarity_list-line.svg"
              alt=""
            />
            &nbsp; Course
          </p>
          <p className="mb-2 xl:text-lg">
            <img
              className={`inline sm:h-5 xl:h-auto xl:w-auto ${styles.icon}`}
              src="/Footer_images/ph_trophy-bold.svg"
              alt=""
            />
            &nbsp; Success Stories
          </p>
          <p className="xl:text-lg">
            <img
              className={`inline sm:h-5 xl:h-auto ${styles.icon} xl:w-auto`}
              src="/Footer_images/pajamas_work.svg"
              alt=""
            />
            &nbsp; partners
          </p>
        </div>
        <div className=" flex-col  sm:flex sm:gap-y-2 sm:pl-2 sm:pt-[35px]">
          <p className="xl:text-lg">
            <img
              className={`inline ${styles.icon} sm:h-5 xl:h-auto xl:w-auto`}
              src="/Footer_images/mdi_about-circle-outline.svg"
              alt=""
            />
            &nbsp; About Us
          </p>
          <p className="xl:text-lg ">
            <img
              className={`relative ${styles.icon} mb-2 inline translate-y-1 sm:h-5 xl:w-auto`}
              src="/Footer_images/fluent-mdl2_review-solid.svg"
              alt=""
            />
            &nbsp; Reviews
          </p>
          <p className="mb-2 xl:text-lg ">
            <img
              className={`inline sm:h-5 xl:h-auto xl:w-auto ${styles.icon}`}
              src="/Footer_images/octicon_person-16.svg"
              alt=""
            />
            &nbsp; Work With Us
          </p>
        </div>
        <div className=" sm:w-[180px] sm:pl-[9px]">
          <p
            className={`${styles.heading} font-semibold sm:text-lg xl:text-2xl`}
          >
            Office &nbsp;
            <img
              className={`${styles.icon} inline sm:h-5 xl:h-auto xl:w-auto`}
              src="/Footer_images/icomoon-free_office.svg"
              alt=""
            />{" "}
          </p>
          <p className={` ${styles.last} xl:text-lg`}>
            <img
              className={`${styles.icon}  src="/Footer_images/ion_location.svg inline sm:h-5 xl:h-auto
              xl:w-auto`}
              alt=""
            />
            Mig 214, 2nd floor, Road No. 1,  KPHB Kukatpally, Hyderabad,
            Telangana - 500072
          </p>
        </div>
      </div>
    </div>
  );
}
