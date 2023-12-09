"use client";
import StudentCard from "../StudentCard/StudentCard";
import styles from "./SuccessStories.module.css";

export default function SuccessStories() {
  const successStories = [
    {
      name: "Tej",
      role: "Web Developer",
      companyLogo: "/succesStories_images/walmart_logo.png",
      successStory:
        "I got four placement offers of 4.5 LPA, 5.5 LPA, 6.5 LPA, and 9.2 LPA from different companies. The team supported me a lot with my placement.",
      package: "9.2 L",
      Img: "/succesStories_images/success story 2.png",
      status: "First Job",
    },
    {
      name: "Akhil",
      role: "Web Developer",
      companyLogo: "/succesStories_images/walmart_logo.png",
      successStory:
        "Got a hike of 250% from civil engineer background to react developer all in a duration of 7 months. Thanks to the entire team.",
      package: "8 L",
      Img: "/succesStories_images/success story 1.png",
      status: "250% Hike",
    },
    {
      name: "Manoj",
      role: "Web Developer",
      companyLogo: "/succesStories_images/walmart_logo.png",
      successStory:
        "10000coders helped me learn about real-time practices and work culture. Their guidance has helped a lot in finding the right career of becoming a web developer from being a BSc graduate.",
      package: "6.5 L",
      Img: "/succesStories_images/success story 3.png",
      status: "100% Hike",
    },
    {
      name: "Rohith",
      role: "Web Developer",
      companyLogo: "/succesStories_images/walmart_logo.png",
      successStory:
        "This institute has trained me so well that I have transformed from fearing whether I would get a job to becoming a developer",
      package: "6.5 L",
      Img: "/succesStories_images/success story 4.png",
      status: "First Job",
    },
  ];

  return (
    <div style={{ height: "100vh" }}>
      <p className="text-center box-border pt-4 pb-6 font-bold text-2xl">
        Success Stories
      </p>
      <p className="text-center text-xl font-light mb-3">
        Our team births success stories by equipping individuals with
        cutting-edge skills and knowledge, <br /> propelling them towards
        coveted positions at top-tier companies across India.
      </p>
      <div className={styles.SuccessStories}>
        {successStories.map((item) => {
          return (
            <>
              <StudentCard
                ctc={item.package}
                role={item.role}
                companyLogo={item.companyLogo}
                img={item.Img}
                name={item.name}
                successStory={item.successStory}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
