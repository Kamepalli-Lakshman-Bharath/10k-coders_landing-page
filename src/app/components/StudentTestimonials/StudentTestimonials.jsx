"use client";
import Testimonial_card from "../Tesimonial_card/Testimonial_card";
import styles from "./StudentTestimonials.module.css";

export default function StudentTestimonials() {
  const StudentTestimonialsData = [
    {
      img: "/student_testimonial_images/image2.png",
      text: "Watch Shruti as she candidly recounts her personal growth and insights during her time at the 10000coders.",
    },
    {
      img: "/student_testimonial_images/image1.png",
      text: "Watch Rohith as she candidly recounts her personal growth and insights during her time at the 10000coders.",
    },
  ];
  return (
    <div
      className={`${styles.main} box-border xl:h-[100vh]`}
      style={{ backgroundColor: "#dbf2fc" }}
    >
      <p className="py-5 text-center font-bold text-2xl">
        Student Testimonials
      </p>
      <p className="mb-3 text-center text-xl font-light sm:px-5">
        Students generously share heartfelt testimonials, reflecting the
        exceptional learning and <br /> transformative experiences they've had
        at the 10000coders.
      </p>
      <div className={` ${styles.testimonials}`}>
        {StudentTestimonialsData.map((item, idx) => (
          <Testimonial_card
            className="flex-shrink-0"
            key={idx}
            text={item.text}
            img={item.img}
          />
        ))}
        <Testimonial_card
          text={StudentTestimonialsData[1].text}
          img={StudentTestimonialsData[1].img}
        />
        <Testimonial_card
          text={StudentTestimonialsData[1].text}
          img={StudentTestimonialsData[1].img}
        />
        <Testimonial_card
          text={StudentTestimonialsData[1].text}
          img={StudentTestimonialsData[1].img}
        />
        <Testimonial_card
          text={StudentTestimonialsData[1].text}
          img={StudentTestimonialsData[1].img}
        />
        <Testimonial_card
          text={StudentTestimonialsData[1].text}
          img={StudentTestimonialsData[1].img}
        />
      </div>
      <div class="flex justify-center sm:py-10  ">
        <button
          style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
          className="rounded-xl bg-white  p-3  px-8 py-3 font-semibold"
        >
          Watch More{" "}
          <img className="inline" src="/Other_images/YoutubeLogo.svg" alt="" />{" "}
        </button>
      </div>
    </div>
  );
}
