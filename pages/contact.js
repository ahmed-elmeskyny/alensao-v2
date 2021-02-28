import Head from 'next/head';
import Image from "next/image";

//styles 
import styles from "../styles/contact.module.scss";

//components
import Layout from "../components/Layout/layout";

//react-icons
import {HiOutlineMailOpen} from "react-icons/hi";
import {FaPhoneAlt} from "react-icons/fa";



export default function About() {
  return (
    <div >
      <Head>
        <title>Alensao || A propos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.contactHeader}>
          <div className={styles.filter}>
             <h1> Nous-Contactez </h1>
             <p>Acceuil / contact </p>
          </div>
        </div>
        <div className={styles.contactContainer}>
            <span>Contact</span>
            <h2>Get in touch with us</h2>
            <div className={styles.contactInfo}>
                <div className={styles.info}>
                    <HiOutlineMailOpen className={styles.icon}></HiOutlineMailOpen>
                    <div className={styles.text}>
                         <span>E-mail :</span>
                        <p>alensao.association@gmail.com</p>
                    </div>
                </div>
                <div className={styles.info}>
                    <FaPhoneAlt className={styles.icon} ></FaPhoneAlt>
                    <div className={styles.text}>
                        <span>Phone :</span>
                        <p>(+212) 6782910935</p>
                    </div>
                </div>
            </div>
            <div className={styles.contact}>
                <form>
                    <div className={styles.info}>
                       <input type="text" placeholder="votre nom complet" required/>
                       <input type="numbre" placeholder="telephone" required/>
                    </div>
                    <div className={styles.email}>
                        <input type="email" placeholder="email" required/>
                        <input type="text" placeholder="objet" required/>
                    </div>
                    <textarea type="text" placeholder="Message">
                    </textarea>
                    <button> Envoyez </button>

                </form>
            </div>
        </div>

      </Layout>

    </div>
  )
}
