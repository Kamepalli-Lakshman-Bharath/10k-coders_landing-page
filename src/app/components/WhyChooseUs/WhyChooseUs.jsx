"use client";
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <div className={`xl:h-[100vh] ${styles.main}`} style={{ backgroundColor: "#dbf2fc" }}>
      <p className="pb-6 pt-4 text-center  text-2xl font-bold">
        {" "}
        Why Choose Us?
      </p>
      <p className="text-center px-[20px]  mb-4 sm:px-6 text-xl">
        Exceptional instructors fueling innovation and shaping future tech
        leaders with their expertise, <br /> guidance, and unwavering passion
        for education
      </p>
      <div className="flex flex-wrap justify-center gap-8 border sm:pb-10">
        <div
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          className={`h-64 w-96 ${styles.card} relative overflow-hidden rounded-2xl`}
        >
          {" "}
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
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          className={`h-64 w-96 ${styles.card} relative overflow-hidden rounded-2xl`}
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
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          className={`h-64 w-96 ${styles.card} relative overflow-hidden rounded-2xl`}
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
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          className={`h-64 w-96 ${styles.card} relative overflow-hidden rounded-2xl`}
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
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          className={`h-64 w-96 ${styles.card} relative overflow-hidden rounded-2xl`}
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
          style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          className={`h-64 w-96 ${styles.card} relative overflow-hidden rounded-2xl`}
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
