import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import styles from "../styles/Header.module.css"
import LinkButton from "./LinkButton"
import MobileHeader from "./MobileHeader"
import { useMediaQuery } from "react-responsive"

function Header() {
  const router = useRouter()
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" })

  if (isTabletOrMobile) {
    return <MobileHeader />
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src='/logo.svg' alt='Logo' width='50' height='50' />
      </div>
      <div className={styles.auth}>
        <LinkButton to='/login'>Login</LinkButton>
        <LinkButton to='/signup'>SignUp</LinkButton>
      </div>
    </header>
  )
}

export default Header
