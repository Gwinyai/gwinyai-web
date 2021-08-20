import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faGithub, faMedium } from "@fortawesome/free-brands-svg-icons"

export default function Home() {
  const handleContactAction = () => {
    window.location.href = "mailto:gwinyai@gwinyai.com";
  }
  return (
    <div className={["jumbotron", styles.verticalCenter].join(' ')}>
    <div className="container">
      <Head>
        <title>Gwinyai Nyatsoka</title>
        <meta name="description" content="Gwinyai Nyatsoka is an iOS (Swift), NodeJS and React developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.content}>
      <Image
              priority
              src="/images/profile.png"
              className={styles.borderCircle}
              height={200}
              width={200}
              alt="Gwinyai Nyatsoka"
            />
            <h1 className={styles.title}>Gwinyai Nyatsoka</h1>
            <h2 className={styles.subtitle}>iOS (Swift), NodeJS and React Developer</h2>
            <p className={styles.detail}>Gwinyai is CTO at <a href="https://cobbl.es">Cobbles LLC</a> based in Boston, Massachusetts. He is also a <a href="https://www.fingaz.co.zw/course-created-by-a-zimbabwean-course-attains-best-seller-status-on-udemy/">Udemy</a> best-selling iOS instructor with thousands of students across the globe.</p>
            <ul className={styles.socialList}>
                <li><a href="https://www.facebook.com/paulthesage" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon></a></li>
                <li><a href="https://www.linkedin.com/in/gwinyai-nyatsoka-4a026037/" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon></a></li>
                <li><a href="https://github.com/Gwinyai" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon></a></li>
                <li><a href="https://medium.com/@gwinyai" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faMedium} size="2x"></FontAwesomeIcon></a></li>
            </ul>
            <div className={styles.buttons}> <button onClick={handleContactAction} className="btn btn-outline-primary px-4">Contact</button> </div>
      </main>
    </div>
    </div>
  )
}
