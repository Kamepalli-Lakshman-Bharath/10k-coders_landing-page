import styles from "./Testimonial_card.module.css";

export default function Testimonial_card(props) {
  const { img, text } = props;
  return (
    <div
      style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
      className={` duration-0.5 relative inline-block h-[20rem] w-[24rem] flex-shrink-0 rounded-2xl bg-white p-2 transition-all ease-linear hover:h-[22rem]  hover:w-[26rem] `}
    >
      <img className="inline w-full rounded-2xl" src={img} alt="" />
      <img
        className={`absolute left-[50%] top-[50%] inline -translate-x-[50%] -translate-y-[100%]  ${styles.logo}`}
        src="/Other_images/logos_youtube.png"
        alt=""
      />
      <p className={`${styles.text} p-4 px-4 tracking-tight`}>{text}</p>
    </div>
  );
}
