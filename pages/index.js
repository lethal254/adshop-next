import Layout from "../components/Layout"
import styles from "../styles/Home.module.css"
import Lottie from "react-lottie"
import BlogAnimation from "../assets/Blogging.json"
import Businessman from "../assets/businessman-23364 1.svg"
import Creative from "../assets/creative-23384 1.svg"
import Employee from "../assets/employee-23411 1.svg"
import LinkButton from "../components/LinkButton"
import { categories } from "../testdata"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  // Animation options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BlogAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <Layout title='Adshop || Hire experts or be hired for any job, any time. '>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            <span>Hire</span> experts or be hired for any job, any time.
          </h1>
          <h2 className={styles.heroSubtitle}>
            Adshop is the online boardroom where Africa's leading SMEs connect
            with a wide variety of creatives for all their brands' needs.
          </h2>
          <Link href='/briefs'>
            <a className={styles.linkButton}>Find Work</a>
          </Link>
          <LinkButton to='/find-creative'>Find Talent</LinkButton>
        </div>
        <div className={styles.heroRight}>
          <Lottie options={defaultOptions} height={500} width={500} />
        </div>
      </section>
      <section className={styles.category}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Popular Categories</h2>
          <hr />
        </div>
        <div className={styles.categoryCards}>
          {categories.map((category) => (
            <div className={styles.categoryCard} key={category.url}>
              <a href='/home' className={styles.imageContainer}>
                <div
                  className={styles.cardImage}
                  style={{
                    background: `url(${category.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}></div>
                <h3>{category.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>About Adshop</h2>
          <hr />
        </div>
        <div className={styles.aboutCards}>
          <div className={styles.aboutCard}>
            <Image
              src={Businessman}
              width='200'
              height='200'
              alt='About card image'
            />
            <h3>The Process</h3>
            <article>
              Here on Adshop it is quite simple. You create a brief that you
              need completed and receive competitive bids from creatives within
              the platform.
            </article>
          </div>
          <div className={styles.aboutCard}>
            <Image
              src={Creative}
              width='200'
              height='200'
              alt='About card image'
            />
            <h3>Why adshop</h3>
            <article>
              We have creatives with a vast array of skills that include graphic
              design, advertising, marketing, events, writing, multi-media
              production, web and many more.
            </article>
          </div>
          <div className={styles.aboutCard}>
            <Image
              src={Employee}
              width='200'
              height='200'
              alt='About card image'
            />
            <h3>Everything for everyone</h3>
            <article>
              We have just the right network of talent to cater to your needs.
              Both clients and creatives are assured to get value. As for
              clients they are guaranteed of delivery of services requested and
              as for creatives they are guaranteed of payment for services
              rendered.
            </article>
          </div>
        </div>
      </section>
    </Layout>
  )
}
