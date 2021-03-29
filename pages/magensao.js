//next
import Head from 'next/head';
import Image from "next/image"

//react
import { useState} from "react";

//styles 
import styles from "../styles/magensao.module.scss";

//components
import Layout from "../components/Layout/layout";






function About() {
  const [openLogin , setOpenLogin ] = useState(false);
  const [openRegister , setOpenRegister] = useState(false);

  return (
    <div >
      <Head>
        <title>Alensao || A propos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout 
        openLogin={openLogin}
        setOpenLogin={setOpenLogin} 
        setOpenRegister={setOpenRegister} 
        openRegister={openRegister}
        >
        <div className={styles.aboutHeader}>
          <div className={styles.filter}>
             <h1> MagEnsao </h1>
             <p>Accueil / MagEnsao </p>
          </div>
        </div>
        <div className={styles.building} >
            <Image alt="construction" src="/building.svg" width="300px" height="300px"></Image>
            <h3>Un nouveau concept en cours de réalisation, en collaboration entre l'ALENSAO et l'ADE, d'un magazine bimestriel couvrant les événements au sein de l'ENSAO. Reportages, articles, news... soyez aux aguets pour notre nouvelle revue : MagEnsao!</h3>
        </div>
      </Layout>

    </div>
  )
}




export default About;