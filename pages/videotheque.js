//next
import Head from 'next/head';

//react
import { useState} from "react";

//styles 
import styles from "../styles/aboutus.module.scss";

//components
import Layout from "../components/Layout/layout";






function About() {
  const [openLogin , setOpenLogin ] = useState(false);
  const [openRegister , setOpenRegister] = useState(false);

  return (
    <div >
      <Head>
        <title>Alensao || videothéque</title>
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
             <h1> Videothéque </h1>
             <p>Accueil / Videothéque </p>
          </div>
        </div>

      </Layout>

    </div>
  )
}




export default About;