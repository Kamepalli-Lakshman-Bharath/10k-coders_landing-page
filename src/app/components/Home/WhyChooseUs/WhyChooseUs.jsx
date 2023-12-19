"use client";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <div className={`bg-[#dbf2fc] pb-[40px]`}>
      <p className="py-6 sm:text-[24px] text-center font-bold md:text-[28px] lg:text-[32px]">
        {" "}
        Why Choose Us?
      </p>
      <p className="lg:mx-auto sm:mb-10 sm:mx-10 text-center md:mx-20 md:mb-[40px] md:text-[18px] lg:w-[905px] lg:px-[0px] lg:text-[20px]">
        Exceptional instructors fueling innovation and shaping future tech
        leaders with their expertise, guidance, and unwavering passion
        for education
      </p>
      <div className="flex flex-wrap justify-center gap-8 ">
        <div
          className={` md:h-64 md:w-96 ${styles.card} relative overflow-hidden rounded-2xl shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]`}
        >
          <img
            className="h-full w-full"
            src="/WhyChooseUs_images/image1.png"
            alt=""
          />{" "}
          <p className={styles.text}>
            Structured <br /> Curriculum
          </p>
          <p className={styles.para}>
            {" "}
            10000coders offers a meticulously <br /> structured IT training
            curriculum designed <br /> to equip learners with comprehensive{" "}
            <br />
            skills and expertise for success in the tech <br /> industry.
          </p>
        </div>
        <div
          className={` md:h-64 md:w-96 ${styles.card} relative overflow-hidden rounded-2xl shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]`}
        >
          {" "}
          <img
            className="h-full w-full"
            src="/WhyChooseUs_images/image2.png"
            alt=""
          />{" "}
          <p className={styles.text}>Live classes</p>
          <p className={styles.para}>
            {" "}
            Experience dynamic learning with <br /> 10000coders' live classes,
            where expert <br /> instructors deliver real-time instruction <br />{" "}
            and interactive sessions for an engaging <br /> and effective IT
            training journey
          </p>
        </div>
        <div
          className={` md:h-64 md:w-96 ${styles.card} relative overflow-hidden rounded-2xl shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]`}
        >
          {" "}
          <img
            className="h-full w-full"
            src="/WhyChooseUs_images/image3.png"
            alt=""
          />{" "}
          <p className={styles.text}>
            &nbsp; &nbsp; Practical <br />
            &nbsp; &nbsp; Experience
          </p>
          <p className={styles.para}>
            {" "}
            Gain invaluable practical experience <br /> through hands-on
            projects and real-world <br /> simulations with 10000coders,
            ensuring <br /> you are well-prepared to tackle real <br />{" "}
            challenges in the IT field
          </p>
        </div>
        <div
          className={` md:h-64 md:w-96 ${styles.card} relative overflow-hidden rounded-2xl shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]`}
        >
          {" "}
          <img
            className="h-full w-full"
            src="/WhyChooseUs_images/image4.png"
            alt=""
          />{" "}
          <p className={styles.text}>
            Aspirational <br />
            Peers
          </p>
          <p className={styles.para}>
            {" "}
            Join a community of aspirational peers, <br /> where you'll
            collaborate with like-minded <br /> individuals, fostering a
            supportive <br /> environment that fuels collective growth <br />{" "}
            and inspires success in the IT industry.
          </p>
        </div>
        <div
          className={` md:h-64 md:w-96 ${styles.card} relative overflow-hidden rounded-2xl shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]`}
        >
          {" "}
          <img
            className="h-full w-full"
            src="/WhyChooseUs_images/image5.png"
            alt=""
          />{" "}
          <p className={styles.text}>
            1:1 <br /> Mentorship
          </p>
          <p className={styles.para}>
            {" "}
            Embark on a personalized learning <br /> journey with 10000coders'
            one-on-one <br /> mentorship, where experienced mentors <br />{" "}
            provide tailored guidance, enabling you to <br /> maximize your
            potential and excel in the <br /> IT domain.
          </p>
        </div>
        <div
          className={` md:h-64 md:w-96 ${styles.card} relative overflow-hidden rounded-2xl shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]`}
        >
          {" "}
          <img
            className="h-full w-full"
            src="/WhyChooseUs_images/image6.png"
            alt=""
          />{" "}
          <p className={styles.text}>
            &nbsp; &nbsp; &nbsp; &nbsp; Career <br /> &nbsp; &nbsp; &nbsp;
            &nbsp; support
          </p>
          <p className={styles.para}>
            {" "}
            Unlock your career potential with <br /> comprehensive career
            support, including <br /> job placement assistance, interview <br />
            coaching, and networking opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
