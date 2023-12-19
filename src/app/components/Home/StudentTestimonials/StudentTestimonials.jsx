import TestimonialCard from "../Tesimonial_card/Testimonial_card";
import styles from "./StudentTestimonials.module.css";

const StudentTestimonials = ({ StudentTestimonialsData }) => {
  return (
    <div className={`bg-[#dbf2fc] pb-[40px]`}>
      <p className=" py-6 text-center sm:text-[24px]  md:text-[28px] lg:text-[32px] font-bold">
        Student Testimonials
      </p>
      <p className="lg:mx-auto mb-[40px] sm:text-[16px] sm:px-10 text-center md:text-[18px] md:px-20 lg:text-[20px] lg:px-[0px] lg:h-[54px] lg:w-[810px]">
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
      <div className="flex justify-center">
        <button className="rounded-xl bg-white px-[24px] py-[16px] font-semibold shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)]">
          Watch More{" "}
          <img className="inline" src="/Other_images/YoutubeLogo.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
export default StudentTestimonials;
