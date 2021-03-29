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


//react-player
import React from "react";
import ReactPlayer from "react-player/youtube";


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
             <h1> Ensaoistes Du Monde </h1>
             <p>Accueil / Ensaoiste </p>
          </div>
        </div>
        <AboutDynamic title="Description" img="/ensaoiste.png" width="200px" height="200px" ensa></AboutDynamic>
        <h3 className={styles.title}><div></div>Episodes<div></div></h3>
        <div className={styles.episodesContainer}>
          <div className={styles.episodeContainer} >
                <div className={styles.video}>
                    <ReactPlayer url="https://www.youtube.com/watch?v=s-MwGJqI1tI" controls={true} width="100%" height="100%" ></ReactPlayer>
                </div>
                <div className={styles.text} >
                    <h3>Mourad MZIOUT </h3>
                    <p>Promotion 2007 </p><p>Génie informatique</p>
                </div>
          </div>
          <div className={styles.episodeContainer} >
                <div className={styles.video}>
                    <ReactPlayer url="https://youtu.be/mbNJrFc3BQs" controls={true} width="100%" height="100%" ></ReactPlayer>
                </div>
                <div className={styles.text} >
                    <h3>Kouassi Serge Brice</h3>
                    <p>Promotion 2006 </p><p>Génie telecommunication et réseau</p>
                </div>
          </div>

        </div>
      </Layout>

    </div>
  )
}




export default Ensa;