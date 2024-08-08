import styles from './login.module.css'
import Header from '../header/header'


const login = () => {
  return (
    <>
    <Header/>
    <div className={styles.login}>
    <h2 className={styles.h2}>Login</h2>
    <form action="" className={styles.form}>
    <div className={styles.email}>
        <input type="email" name="email" id="email" placeholder='Enter your email' required/>
    </div>
    <div className={styles.password}>
        <input type="password" name="password" id="password" placeholder='Enter your password' required/>
    </div>
    <button className={styles.btn} type="submit">Login</button>
    </form>
    </div>
    </>
  )
}

export default login