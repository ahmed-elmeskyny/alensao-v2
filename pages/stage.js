import Head from 'next/head';
import {useState} from "react";

//style 
import styles from "../styles/stage.module.scss";


//components
import Layout from "../components/Layout/layout";
import StageMain from "../components/stageMain/stageMain";





export default function Stage() {

    
  const [openLogin , setOpenLogin ] = useState(false);
  const [openRegister , setOpenRegister] = useState(false);

  return (
    <div >
      <Head>
        <title>Alensao || offre de stage </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout 
        openLogin={openLogin}
        setOpenLogin={setOpenLogin} 
        setOpenRegister={setOpenRegister} 
        openRegister={openRegister}
        >
        <div className={styles.stageHeader}>
          <div className={styles.filter}>
             <h1> Offre de Stage </h1>
             <p>Acceuil / offre de stage </p>
          </div>
        </div>
        <StageMain></StageMain>

      </Layout>

    </div>
  )
};