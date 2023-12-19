import styles from "./StudentCard.module.css";

const StudentCard = (props) => {
  const { name, role, companyLogo, successStory, ctc, img } = props;
  return (
    <div className={`${styles.card} overflow-hidden  border-black shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)]`}>
      <div>
        <img
          src={img}
          className={`mx-auto block h-36 w-36 rounded-full ${styles.profile}`}
          alt={name}
        />
      </div>
      <p className=" mt-4 text-center text-xl font-semibold">{name}</p>
      <p className="text-center text-xl font-semibold">{role}</p>
      <img
        className={` mx-auto my-2 h-12 w-44 px-2 ${styles.img}`}
        src={companyLogo}
        alt=""
      />
      <p className={`${styles.text} my-auto h-[8rem] `}>{successStory}</p>
      <p
        className={`mt-6 text-center text-lg font-bold text-[#f57932] ${styles.package}`}
      >
        Package : {ctc}
      </p>
    </div>
  );
};
export default StudentCard;
