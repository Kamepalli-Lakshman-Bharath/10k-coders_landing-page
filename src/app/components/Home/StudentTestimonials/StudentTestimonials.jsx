import TestimonialCard from "../Tesimonial_card/Testimonial_card";
import styles from "./StudentTestimonials.module.css";

const StudentTestimonials = ({ StudentTestimonialsData }) => {
  return (
    <div className={` box-border bg-[#dbf2fc] lg:h-[100vh]`}>
      <p className="xsm:py-6 lg sm:py-6 text-center text-2xl font-bold">
        Student Testimonials
      </p>
      <p className=" xsm:mx-14 md:px-16 sm:mb-10  xsm:mb-10 xsm:text-base text-center text-xl font-light sm:px-5">
        Students generously share heartfelt testimonials, reflecting the
        exceptional learning and transformative experiences they've had at
        10000coders.
      </p>
      <div className={` ${styles.testimonials}`}>
        {StudentTestimonialsData.map((item, idx) => (
          <TestimonialCard key={idx} text={item.text} img={item.img} />
        ))}
        <TestimonialCard
          text={StudentTestimonialsData[0].text}
          img={StudentTestimonialsData[0].img}
        />
        <TestimonialCard
          text={StudentTestimonialsData[0].text}
          img={StudentTestimonialsData[0].img}
        />
        <TestimonialCard
          text={StudentTestimonialsData[0].text}
          img={StudentTestimonialsData[0].img}
        />
        <TestimonialCard
          text={StudentTestimonialsData[0].text}
          img={StudentTestimonialsData[0].img}
        />
        <TestimonialCard
          text={StudentTestimonialsData[0].text}
          img={StudentTestimonialsData[0].img}
        />
      </div>
      <div className="flex justify-center sm:py-10">
        <button
           className="rounded-xl shadow-md xsm:mb-5  bg-white p-3 px-8 py-3 font-semibold"
        >
          Watch More{" "}
          <img className="inline" src="/Other_images/YoutubeLogo.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
export default StudentTestimonials;
