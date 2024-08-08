import styles from './cardSection.module.css'


const cardSection = ({data}) => {
  return (
    <>
     <div className={styles.productCard}>
      <img className={styles.img} src={data.image} alt={data.title}/>
      <div className={styles.dfl}>
      <h4 className={styles.h2}>{data.title}<span className={styles.span}>-</span></h4>
      <p className={styles.p}>{data.price}</p>
      </div>
    </div>
    </>
  )
}

export default cardSection