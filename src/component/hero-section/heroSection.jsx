import styles from "./heroSection.module.css";
import img from "../../assets/landing-page-sneaker.png"
import secondImg from '../../assets/second-landing-page-shoe.png'

const heroSection = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.firstSection}>
          <p className={styles.p}>
            We specialize in creating custom-made shoes for people who struggle
            to find the perfect fit in traditional stores.
          </p>
          <div className={styles.firstImg}>
            <img className={styles.img} src={img} alt="sneaker" />
          </div>
          <div className={styles.shop}>
          <a href="#">Shop now</a>
          </div>
        </div>
        <div className="secondSection">
            <img className={styles.img} src={secondImg} alt="sneaker" />
        </div>
      </section>
    </>
  );
};

export default heroSection;
