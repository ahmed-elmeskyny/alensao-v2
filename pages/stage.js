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
        <title>Alensao || offres de stages </title>
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
             <h1> Offres de Stages </h1>
             <p>Acceuil / offres de stages </p>
          </div>
        </div>
        <StageMain></StageMain>

      </Layout>

    </div>
  )
};