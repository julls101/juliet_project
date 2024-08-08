import styles from './signup.module.css'
import Header from '../header/header'


const signup = () => {
  return (
    <>
    <Header/>
    <div className={styles.signup}>
    <h2 className={styles.h2}>Sign Up</h2>
    <form action="" className={styles.form}>
    <div className={styles.name}>
        <input type="text" name="name" id="name" placeholder='Enter your name' required/>
    </div>
    <div className={styles.email}>
        <input type="email" name="email" id="email" placeholder='Enter your email' required/>
    </div>
    <div className={styles.password}>
        <input type="password" name="password" id="password" placeholder='Enter your password' required/>
    </div>
    <button className={styles.btn} type="submit">Sign Up</button>
    </form>
    </div>
    </>
  )
}

export default signup