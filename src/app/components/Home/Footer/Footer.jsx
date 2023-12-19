import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div
      className={`flex ${styles.main}  flex-col overflow-hidden pt-[9px] text-white sm:h-auto sm:gap-y-[30px] sm:pb-10  sm:text-sm lg:h-auto lg:px-[20px] lg:pb-[40px] xl:h-[468px] xl:px-[29px] xl:pb-[120px]`}
      style={{
        background:
          "linear-gradient(90deg, #CB5C1C 0.12%, #F87B34 100.94%), #FFF",
      }}
    >
      <img
        className={`sm:ml-[20px] ${styles.logo} sm:h-[80px] sm:w-[120px] lg:h-[100px] lg:w-[140px] xl:h-[115px] xl:w-[162px]`}
        src="/Footer_images/Footer-Logo.png"
      />
      <div className="flex flex-row justify-around lg:mt-[15px] xl:mt-[30px]">
        <div
          className={`${styles.first} sm:pl-4 sm:text-lg lg:text-[20px] xl:mr-[100px] xl:text-[24px]`}
        >
          <p
            className={`${styles.heading} font-bold lg:mb-[18px] xl:mb-[24px] `}
          >
            Reach Us
            <img
              className="ml-[10px] inline sm:h-[1.2rem] xl:h-[20px] xl:w-[20px]"
              src="/Footer_images/uil_message.svg"
            />
          </p>
          <div className="flex items-end sm:mt-3 lg:mb-[18px] lg:h-[35px]  xl:mb-[16px]  xl:w-[240px] xl:text-[20px]">
            <img
              className={` sm:h-6 sm:w-6 ${styles.img} mr-[16px] h-full xl:h-[40px] xl:w-[40px] `}
              src="/Footer_images/logos_whatsapp-icon.svg"
              alt=""
            />{" "}
           <p> +919700610241 </p>
          </div>
          <div className="items-end flex sm:mb-[10px] sm:mt-3 lg:mb-[18px] lg:h-[28px] xl:mb-[24px] xl:w-[294px] xl:text-[20px]">
            <img
              className={`mr-[16px]  h-full sm:h-6 sm:w-6 xl:w-[40px] xl:h-[30px] ${styles.img}`}
              src="/Footer_images/logos_google-gmail.svg"
              alt=""
            />{" "}
           <p> hello@10000coders.com </p>
           </div>
          <div
            className={` ${styles.social} flex items-end justify-around rounded-[16px] bg-[#E8AE8E] sm:p-2 lg:px-[10px]  lg:py-[10px] xl:h-[82px] xl:w-[294px] xl:py-[16px]`}
          >
            <img
              className={`${styles.img} sm:h-7 sm:w-7 lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[50px]`}
              src="/Footer_images/logos_facebook.svg"
              alt=""
            />
            <img
              className={`sm:h-7 sm:w-7 lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[50px] ${styles.img}`}
              src="/Footer_images/skill-icons_instagram.svg"
              alt=""
            />
            <img
              className={`sm:h-7 sm:w-7 lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[50px] ${styles.img}`}
              src="/Footer_images/logos_youtube-icon.svg"
              alt=""
            />
            <img
              className={`sm:h-7 sm:w-7 lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[50px] ${styles.img}`}
              src="/Footer_images/skill-icons_linkedin.svg"
              alt=""
            />
          </div>
        </div>
        <div className="sm:ml-2 xl:mr-[100px] ">
          <p
            className={`${styles.heading} font-bold sm:mb-[10px] sm:text-lg lg:mb-[18px] lg:text-[20px] xl:mb-[24px] xl:text-2xl`}
          >
            Quick Links
            <img
              className={` ${styles.icon} ml-[10px] inline sm:h-5 xl:h-8 xl:w-8`}
              src="/Footer_images/material-symbols_link.svg"
              alt=""
            />
          </p>
          <div className="flex font-bold sm:gap-x-[30px] lg:gap-x-[30px] lg:text-[18px]  xl:gap-x-[50px]">
            <div className="flex flex-col sm:gap-y-[10px] lg:gap-y-[12px] xl:w-[200px] xl:gap-y-[16px]">
              <div className="flex items-end xl:text-[20px]  ">
                <img
                  className={`mr-[10px]  inline sm:h-5  xl:h-[25px] xl:w-[25px] ${styles.icon}`}
                  src="/Footer_images/iconamoon_home-bold.svg"
                  alt=""
                />
                <p>Home</p>
              </div>
              <div className="flex items-end xl:text-[20px] ">
                <img
                  className={`mr-[10px] inline sm:h-5 xl:h-[25px] xl:w-[25px] ${styles.icon}`}
                  src="/Footer_images/clarity_list-line.svg"
                  alt=""
                />
                <p>Course</p>
              </div>
              <div className="flex items-end xl:text-[20px]">
                <img
                  className={`mr-[10px] inline sm:h-5 xl:h-[25px] xl:w-[25px] ${styles.icon}`}
                  src="/Footer_images/ph_trophy-bold.svg"
                  alt=""
                />
                <p>Success Stories</p>
              </div>
              <div className="flex items-end xl:text-[20px]">
                <img
                  className={`mr-[10px] inline sm:h-5 xl:h-auto ${styles.icon} mr-[10px] xl:h-[24px] xl:w-[24px]`}
                  src="/Footer_images/pajamas_work.svg"
                  alt=""
                />
                <p>Hiring Partners</p>
              </div>
            </div>
            <div className=" sm:pt-[35px]  flex flex-col sm:gap-y-[10px] sm:pl-2 lg:gap-y-[12px] xl:w-[180px] xl:gap-y-[16px]">
              <div className="flex items-end xl:text-[20px]">
                <img
                  className={` ${styles.icon} mr-[10px] sm:h-5 xl:h-[24px] xl:w-[24px]`}
                  src="/Footer_images/mdi_about-circle-outline.svg"
                  alt=""
                />
                <p>About Us</p>
              </div>
              <div className="flex items-end xl:text-[20px] ">
                <img
                  className={`${styles.icon} mr-[10px]  inline translate-y-1 sm:h-5 xl:h-[24px] xl:w-[24px]`}
                  src="/Footer_images/fluent-mdl2_review-solid.svg"
                  alt=""
                />
                <p>Reviews</p>
              </div>
              <div className="mb-2 items-end flex xl:text-[20px] ">
                <img
                  className={`mr-[10px] inline sm:h-5 xl:h-[25px] xl:w-[25px] ${styles.icon}`}
                  src="/Footer_images/octicon_person-16.svg"
                  alt=""
                />
                <p> Work With Us</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="sm:pl-[9px] lg:text-[20px]">
            <p
              className={`${styles.heading} font-semibold sm:mb-[10px] sm:text-[18px] lg:mb-[16px] xl:mb-[20px] xl:text-2xl`}
            >
              Office{" "}
              <img
                className={`${styles.icon} ml-[10px] inline lg:h-[18px] lg:w-[18px]  xl:h-[25px] xl:w-[25px]`}
                src="/Footer_images/icomoon-free_office.svg"
                alt=""
              />
            </p>
          </div>
          <div className={` ${styles.last} flex items-start gap-x-[10px]`}>
            <img
              className={`${styles.icon} 
               xl:h-[24px] xl:w-[24px] `}
              src="/Footer_images/ion_location.svg"
              alt=""
            />
            <p className="leading-7 sm:w-[150px] lg:h-[130px] lg:w-[272px] lg:text-[18px] xl:text-[20px]">
              Mig 214, 2nd floor, Road No. 1, KPHB Kukatpally, Hyderabad,
              Telangana - 500072
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
