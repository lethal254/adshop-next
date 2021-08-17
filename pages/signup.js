import { useState } from "react"
import styles from "../styles/Signup.module.css"
import Image from "next/image"
import Link from "next/link"

const SignupPage = () => {
  const [userType, setUserType] = useState("")
  if (userType) {
    return (
      <div className={styles.signup}>
        <div className={styles.signupLeft}>
          <div className={styles.signuptitle}>
            <h1>Adshop</h1>
            <p>Hire experts or be hired for any job, any time.</p>
          </div>
        </div>
        <div className={styles.signupRight}>
          <div className={styles.logo}>
            <Image src='/logo.svg' width='70' height='70' alt='logo' />
          </div>
          <form>
            <h3>Signup</h3>
            <label>
              Email address
              <input type='text' />
            </label>
            <label>
              Password
              <input type='password' />
            </label>
            <label>
              Repeat Password
              <input type='password' />
            </label>
            <button type='submit'>Signup</button>
          </form>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.signup}>
        <div className={styles.signupLeft}>
          <div className={styles.signuptitle}>
            <h1>Adshop</h1>
            <p>Hire experts or be hired for any job, any time.</p>
          </div>
        </div>
        <div className={styles.signupRight}>
          <div className={styles.logo}>
            <Image src='/logo.svg' width='70' height='70' alt='logo' />
          </div>
          <div className={styles.usertype}>
            <h4>Welcome to Adshop</h4>
            <p>Would you like to login as a creative or client?</p>
            <button
              onClick={() => {
                setUserType("Creative")
              }}>
              Creative
            </button>
            <button
              onClick={() => {
                setUserType("Client")
              }}>
              Client
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default SignupPage
