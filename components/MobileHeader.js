import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import styles from "../styles/MobileHeader.module.css"
import LinkButton from "./LinkButton"
import { useState } from "react"

function MobileHeader() {
  const router = useRouter()
  const [showNav, setShowNav] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src='/logo.svg' alt='Logo' width='50' height='50' />
      </div>
      <div className='hamburger'>
        <Image
          src='/menu.svg'
          alt='Hamburger'
          width='40'
          height='40'
          onClick={() => {
            setShowNav(!showNav)
          }}
        />
      </div>
      <nav
        className={styles.nav}
        style={{ transform: `translateX(${showNav ? "0" : "-100%"})` }}>
        <div className={styles.auth}>
          <LinkButton to='/login'>Login</LinkButton>
          <LinkButton to='/signup'>SignUp</LinkButton>
        </div>
        <ul className={styles.navlinks}>
          <li className={router.pathname === "/" ? styles.active : ""}>
            <Link href='/'>Home</Link>
          </li>
          <li className={router.pathname === "/briefs" ? styles.active : ""}>
            <Link href='/briefs'>Briefs</Link>
          </li>
          <li className={router.pathname === "/clients" ? styles.active : ""}>
            <Link href='/clients'>Clients</Link>
          </li>
          <li
            className={
              router.pathname === "/find-creative" ? styles.active : ""
            }>
            <Link href='/find-creative'>Find a Creative</Link>
          </li>
          <li className={router.pathname === "/postbrief" ? styles.active : ""}>
            <Link href='/postbrief'>Post A Brief</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MobileHeader
