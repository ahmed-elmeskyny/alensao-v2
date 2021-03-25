//next
import Head from 'next/head';

//react
import { useState} from "react";

//styles 
import styles from "../styles/ensaoiste.module.scss";

//components
import Layout from "../components/Layout/layout";

//component
import AboutDynamic from "../components/about/about";



function Ensa() {
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
             <h1> Ensaoiste Du Monde </h1>
             <p>Accueil / Ensaoiste </p>
          </div>
        </div>
        <AboutDynamic title="Description" img="/ensaoiste.png" width="200px" height="200px" ensa></AboutDynamic>
        <h3 className={styles.title}><div></div>Episodes<div></div></h3>
      </Layout>

    </div>
  )
}




export default Ensa;