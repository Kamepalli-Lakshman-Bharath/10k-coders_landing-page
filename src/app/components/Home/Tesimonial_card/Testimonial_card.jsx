import styles from "./Testimonial_card.module.css";

const Testimonial_card = (props) => {
  const { img, text } = props;
  return (
    <div
      className={` duration-0.5  md:hover relative inline-block flex-shrink-0 rounded-2xl bg-white p-2 shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)] transition-all ease-linear sm:h-[15rem] sm:w-[19rem] md:h-[18rem] md:w-[22rem] lg:h-[20rem] lg:w-[24rem] sm:hover:h-[17rem] sm:hover:w-[20rem] md:hover:h-[20rem] md:hover:w-[24rem] lg:hover:h-[22rem] lg:hover:w-[26rem] `}
    >
      <img className="inline w-full rounded-2xl" src={img} alt="" />
      <img
        className={`absolute inline sm:left-[42%] sm:top-[30%] md:left-[45%] md:top-[32%] lg:left-[50%] lg:top-[50%] xl:-translate-x-[50%] xl:-translate-y-[100%]`}
        src="/Other_images/logos_youtube.png"
        alt=""
      />
      <p className={` p-4 px-4 tracking-tight sm:text-sm md:text-base `}>
        {text}
      </p>
    </div>
  );
};
export default Testimonial_card;
