import styles from "../styles/Footer.module.css"
import Link from "next/link"
import Image from "next/image"
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footersection}>
        <h3>Helpful links</h3>
        <Link href='/contact'>Contact</Link>
        <Link href='/about'>About Us</Link>
        <Link href='/about'>Privacy policy</Link>
        <Link href='/about'>Terms of use</Link>
      </div>
      <div className={styles.socialLinks}>
        <h3>Connect with us</h3>
        <div className={styles.icons}>
          <a href='/contact'>
            <SiFacebook />
          </a>
          <a href='/contact'>
            <SiInstagram />
          </a>
          <a href='/contact'>
            <SiTwitter />
          </a>
        </div>
      </div>
      <div className={styles.logo}>
        <Image src='/logo.svg' alt='Logo' width='50' height='50' />
      </div>
    </div>
  )
}

export default Footer
