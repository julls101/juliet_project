import styles from './header.module.css';
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";





const header = () => {
  return (
    <>
    <header className={styles.header}>
        <nav className={styles.nav}>
        <div className={styles.logo}>Barbs Show Stor</div>
          <div className={styles.leftItem}>
            <a href='#'><CiSearch /></a>
            <a href='#'><FaRegCircleUser /></a>
            <a href='#'><FiShoppingCart /></a>
          </div>
        </nav>
    </header>
    
    </>
  )
}

export default header
