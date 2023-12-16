import styles from "./StudentCard.module.css";

const  StudentCard=(props)=> {
  const { name, role, companyLogo, successStory, ctc, img } = props;
  return (
    <div
      className={`${styles.card}  shadow-md`}
    >
      <div>
        <img
          src={img}
          className={`mx-auto block  h-36 w-36 rounded-full ${styles.profile}`}
          alt={name}
        />
      </div>
      <p className=" my-4 text-center xsm:text-base text-xl font-semibold">{role}</p>
      <img
        className={` mx-auto my-6 h-12 w-44 px-2 ${styles.img}`}
        src={companyLogo}
        alt=""
      />
      <p className={`${styles.text} h-40 `}>{successStory}</p>
      <p
        className={` text-center xsm:text-base text-lg font-bold text-[#f57932] ${styles.package}`}
      >
        Package : {ctc}
      </p>
    </div>
  );
}
export default StudentCard;