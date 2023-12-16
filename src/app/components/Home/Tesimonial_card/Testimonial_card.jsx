import styles from "./Testimonial_card.module.css";

const Testimonial_card = (props) => {
  const { img, text } = props;
  return (
    <div
      className={` duration-0.5 relative  inline-block flex-shrink-0 rounded-2xl bg-white p-2 shadow-md transition-all ease-linear hover:h-[22rem] hover:w-[26rem] xsm:h-[18rem] xsm:w-[20rem] xsm:hover:h-[20rem] xsm:hover:w-[22rem] sm:h-[20rem] sm:w-[22rem] sm:hover:h-[22rem] sm:hover:w-[24rem] md:h-[20rem]  md:w-[24rem] md:hover:h-[22rem]  md:hover:w-[26rem] `}
    >
      <img className="inline w-full rounded-2xl" src={img} alt="" />
      <img
        className={`absolute left-[50%] top-[50%] inline xsm:-translate-x-[50%] xsm:-translate-y-[180%] sm:-translate-x-[50%] sm:-translate-y-[5rem] sm:hover:-translate-x-[50%] sm:hover:-translate-y-[5rem] md:-translate-x-[50%] md:-translate-y-[100%]  ${styles.logo}`}
        src="/Other_images/logos_youtube.png"
        alt=""
      />
      <p className={` p-4 px-4 tracking-tight`}>{text}</p>
    </div>
  );
};
export default Testimonial_card;
