import StudentCard from "../StudentCard/StudentCard";
import styles from "./SuccessStories.module.css";

const SuccessStories = ({ successStories }) => {
  return (
    <div className=" pb-[40px]">
      <p className="text-center lg:text-[32px] sm:text-[24px] md:text-[28px] py-6 font-bold">Success Stories</p>
      <p className="lg:mx-auto lg:w-[905px] text-center md:text-[18px] md:px-20 lg:px-[0px] lg:text-[20px] lg:h-[56px] tracking-[0.4px]">
        Our team births success stories by equipping individuals with
        cutting-edge skills and knowledge, propelling them towards coveted
        positions at top-tier companies across India.
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
