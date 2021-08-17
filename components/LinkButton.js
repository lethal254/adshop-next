import Link from "next/link"
import styles from "../styles/LinkButton.module.css"

const LinkButton = ({ to, children, outlined }) => {
  return (
    <Link href={to}>
      <a className={styles.linkButton}>{children}</a>
    </Link>
  )
}

export default LinkButton
