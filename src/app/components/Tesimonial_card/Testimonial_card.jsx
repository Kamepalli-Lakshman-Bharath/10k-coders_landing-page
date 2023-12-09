import styles from "./Testimonial_card.module.css";

export default function Testimonial_card(props) {
  const { img, text } = props;
  return (
    <div
      style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
      className={` relative inline-block bg-white hover:w-[26rem] duration-0.5 ease-linear hover:h-[22rem] h-[20rem] rounded-2xl transition-all w-[24rem] flex-shrink-0  p-2 `}
    >
      <img className="w-full inline rounded-2xl" src={img} alt="" />
      <img
        className={`inline absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[100%]  ${styles.logo}`}
        src="/Other_images/logos_youtube.png"
        alt=""
      />
      <p className={`${styles.text} tracking-tight px-4 p-4`}>{text}</p>
    </div>
  );
}
