import Header from '../header/header'
import styles from './singleView.module.css'
import image from '../../assets/single-view-display.png'
import black2 from '../../assets/Black-2.png'



const singleView = () => {
  return (
    <>
    <Header/>
    <section className={styles.section}>
        <div className={styles.shoeDisplay}>
            <img className={styles.bigImg} src={image} alt="shoe display" />
        </div>
        <div className={styles.text}>
            <h3 className={styles.h3}>Brown</h3>
            <small className={styles.price}>$200</small>
            <small className={styles.color}><span className={styles.bold}>Color:</span> Black</small>
            <img className={styles.img} src={black2} alt="Black shoe" />
            <small className={styles.size}>Size:</small>
            <div className={styles.sizes}>
            <span className={styles.number}>6 (40)</span>
            <span className={styles.number}>7 (41)</span>
            <span className={styles.number}>8 (42)</span>
            <span className={styles.number}>9 (43)</span>
            <span className={styles.number}>10 (44)</span>
            <span className={styles.number}>11 (45)</span>
            <span className={styles.number}>12 (46)</span>
            </div>
            <button className={styles.btn} type="button">Select a size</button>
        </div>
    </section>
    </>
  )
}

export default singleView