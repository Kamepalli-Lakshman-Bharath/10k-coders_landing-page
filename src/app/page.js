import Image from "next/image";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Courses from "./components/Courses/Courses.jsx";
import SuccessStories from "./components/SuccessStories/SuccessStories.jsx";
import StudentTestimonials from "./components/StudentTestimonials/StudentTestimonials.jsx";
import TeamExperts from "./components/SuccessStories/TeamExperts/TeamExperts.jsx";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs.jsx";
import HiringPartners from "./components/HiringPartners/HiringPartners.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Courses />
      <SuccessStories />
      <StudentTestimonials />
      <TeamExperts />
      <WhyChooseUs />
      <HiringPartners />
      <Footer />
    </>
  );
}
