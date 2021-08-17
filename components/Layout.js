import Header from "./Header"
import Head from "next/head"
import styles from "../styles/Layout.module.css"
import Footer from "./Footer"

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Get hired quickly' />
      </Head>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: "Adshop",
}

export default Layout
