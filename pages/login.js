import styles from "../styles/Login.module.css"
import Image from "next/image"
import Link from "next/link"

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginLeft}>
        <div className={styles.logintitle}>
          <h1>Adshop</h1>
          <p>Hire experts or be hired for any job, any time.</p>
        </div>
      </div>
      <div className={styles.loginRight}>
        <div className={styles.logo}>
          <Image src='/logo.svg' width='70' height='70' alt='logo' />
        </div>
        <form>
          <h3>Login</h3>
          <label>
            Email address
            <input type='text' />
          </label>
          <label>
            Password
            <input type='password' />
          </label>
          <button type='submit'>Login</button>
          <div className={styles.createaccount}>
            <p>
              Don't have an account ? <Link href='signup'>Create account</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
