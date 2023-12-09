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
      className="box-border"
      style={{ backgroundColor: "#dbf2fc", height: "100vh" }}
    >
      <p className="text-center py-5 font-bold text-2xl">
        Student Testimonials
      </p>
      <p className="text-center font-light text-xl mb-3">
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
      <div class="flex justify-center  my-20">
        <button
          style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
          className="font-semibold px-8  py-3  bg-white p-3 rounded-xl"
        >
          Watch More{" "}
          <img className="inline" src="/Other_images/YoutubeLogo.svg" alt="" />{" "}
        </button>
      </div>
    </div>
  );
}
