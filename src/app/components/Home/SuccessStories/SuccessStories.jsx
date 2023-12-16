import StudentCard from "../StudentCard/StudentCard";
import styles from "./SuccessStories.module.css";

const SuccessStories = ({ successStories }) => {
  return (
    <div className="lg:h-[100vh]">
      <p className="xsm:py-6 pb-6 sm:py-6 text-center text-2xl font-bold">
        Success Stories
      </p>
      <p className="xsm:mb-10 sm:text-lg md:px-16 sm:mx-10 text-center xsm:text-sm xsm:mx-14 font-light sm:px-5">
        Our team births success stories by equipping individuals with
        cutting-edge skills and knowledge, <br /> propelling them towards
        coveted positions at top-tier companies across India.
      </p>
      <div className={`${styles.SuccessStories} `}>
        {successStories.map((item, index) => (
          <StudentCard
            key={index}
            ctc={item.package}
            role={item.role}
            companyLogo={item.companyLogo}
            img={item.Img}
            name={item.name}
            successStory={item.successStory}
          />
        ))}
      </div>
    </div>
  );
};
export default SuccessStories;
