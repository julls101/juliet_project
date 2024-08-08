import styles from './footer.module.css'
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";



const footer = () => {
  return (
    <>
    <footer className={styles.footer}>
        <div className={styles.left}>
            <h2 className={styles.h2}>Contact Details</h2>
            <address>
                <span className={styles.address}>45 Joseph Awazuike crescent, off Military road, Abuja.</span>
                <a className={styles.address} href='mailto:info@barbstor.com'>Info@barbstor.com</a>
                <a className={styles.address} href='tel: +234-809-3456-234'>+234-809-3456-234</a>
            </address>
        </div>
        <div className={styles.right}>
            <a className={styles.social} href=""><BiLogoInstagramAlt /></a>
            <a className={styles.social} href=""><FaTwitter /></a>
            <a className={styles.social} href=""><CgFacebook /></a>
        </div>
    </footer>

    </>
  )
}

export default footer