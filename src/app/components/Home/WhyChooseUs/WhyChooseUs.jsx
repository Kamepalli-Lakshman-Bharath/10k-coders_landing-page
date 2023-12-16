"use client";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs=()=> {
  return (
    <div className={`xl:h-[100vh] xsm:pb-10 ${styles.main} bg-[#dbf2fc]`} >
      <p className="xsm:py-6 text-center sm:py-6 text-2xl font-bold">
        {" "}
        Why Choose Us?
      </p>
      <p className="text-center md:px-16 xsm:text-sm xsm:px-14 mb-4 sm:px-6 text-xl">
        Exceptional instructors fueling innovation and shaping future tech
        leaders with their expertise, <br /> guidance, and unwavering passion
        for education
      </p>
      <div className="flex flex-wrap justify-center gap-8 sm:pb-10">
        <div
          className={`h-64 w-96 xsm:h-50 xsm:w-80 ${styles.card} relative shadow-md overflow-hidden rounded-2xl`}
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
          className={`h-64 w-96 xsm:h-50 xsm:w-80 ${styles.card} shadow-md relative overflow-hidden rounded-2xl`}
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
          className={`h-64 w-96 xsm:h-50 xsm:w-80 ${styles.card} shadow-md relative overflow-hidden rounded-2xl`}
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
          className={`h-64 w-96 xsm:h-50 xsm:w-80 ${styles.card} shadow-md relative overflow-hidden rounded-2xl`}
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
          className={`h-64 w-96 xsm:h-50 xsm:w-80 ${styles.card} shadow-md relative overflow-hidden rounded-2xl`}
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
          className={`h-64 w-96 xsm:h-50 xsm:w-80 ${styles.card} shadow-md relative overflow-hidden rounded-2xl`}
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
}
export default WhyChooseUs