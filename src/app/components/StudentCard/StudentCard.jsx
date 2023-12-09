import styles from "./StudentCard.module.css";

export default function StudentCard(props) {
  const { name, role, companyLogo, successStory, ctc, img } = props;
  return (
    <div
      style={{ boxShadow: " 0px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
      className={styles.card}
    >
      <div>
        <img
          src={img}
          className={`block mx-auto rounded-full h-36 w-36 ${styles.profile}`}
          alt={name}
        />
      </div>
      <p className=" text-center text-xl my-4 font-semibold">{role}</p>
      <img
        className={` h-12 mx-auto my-6 px-2 w-44 ${styles.img}`}
        src={companyLogo}
        alt=""
      />
      <p className={`${styles.text} h-40 `}>{successStory}</p>
      <p
        className={` text-center text-lg text-[#f57932] font-bold ${styles.package}`}
      >
        Package : {ctc}
      </p>
    </div>
  );
}
