import Data from "../component/product-db/db";
import Card from "../component/card-section/cardSection";
import styles from './product.module.css'


const product = () => {
  return (
    <>
      <h1 className={styles.h1}> All Products</h1>
      <div className={styles.productList}>
        {Data.map(data => (
          <Card key={data.id} data={data} />
        ))}
        </div>
        </>
  )
}

export default product