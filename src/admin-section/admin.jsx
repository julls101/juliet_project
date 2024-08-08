import styles from './admin.module.css'


const admin = () => {
  return (
    <>
        <div className={styles.section}>
      <div className={styles.dfl}>
        <div className={styles.firstSection}>
          <big className={styles.big}>Barbs shoe Stor </big>
          <p className={styles.p}>Dashboard</p>
          <small className={styles.small}><a className={styles.links} href="#">Product Management</a></small>
          <small className={styles.small}><a className={styles.links} href="#">Order Management</a></small>
          <small className={styles.small}><a className={styles.links} href="#">User Management</a></small>
          <small className={styles.small}><a className={styles.links} href="#">Inventory Tracking</a></small>
          <button className={styles.btn} type="button">Logout</button>
        </div>

        <div className={styles.secondSection}>
          <h1 className={styles.h1}>Product Management</h1>
          <div className={styles.addItem}><a className={styles.a} href="#">Add Item</a></div>
          <div className={styles.grid}>
            <table>
                <tr>
                    <th>Product image</th>
                    <th>Product title</th>
                    <th>Price</th>
                    <th>Size</th>
                    <th>Quantity</th>
                    <th>Variation (color)</th>
                    <th>Sold</th>
                </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default admin