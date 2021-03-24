import Head from 'next/head';
import {useRouter} from "next/router";
import Image from "next/image";

//style
import styles from "./episode.module.scss";

//components
import Layout from "../../components/Layout/layout";

//db
import { klam } from "../../db/dbklam";

//react-player
import React from "react";
import ReactPlayer from "react-player/youtube";
import {useState} from "react";




export default function Episode() {
  const router = useRouter();
  const { episode }= router.query;
  const guest = episode;
  const newKlam = klam.find( episode => episode.guest === guest );


  
  const [openLogin , setOpenLogin ] = useState(false);
  const [openRegister , setOpenRegister] = useState(false);

  return (
    <div >
      <Head>
        <title>Alensao || Episode </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout 
        openLogin={openLogin}
        setOpenLogin={setOpenLogin} 
        setOpenRegister={setOpenRegister} 
        openRegister={openRegister}
        >
          <div className={styles.episodeHeader}>
              <div className={styles.filter}>
                  <h1>K-LAM 2.0</h1>
                 <p>Accueil /  K-LAM 2.0 / {guest} </p>
              </div>
           </div>
           <div className={styles.episodeInfo}>
               <div className={styles.episodeTitle}>
                   <Image alt="k-lam 2.0 logo" src="/klamlogo.png" width="170px" height="30px" ></Image>
                   <h1>{newKlam.episode} - {newKlam.guest}</h1>              
                </div>
               <div className={styles.video}>
                    <ReactPlayer url={newKlam.link} controls={true} width="100%" height="100%" ></ReactPlayer>
               </div>
               <div className={styles.description}>
                  <p><span>Description :</span> {newKlam.description}</p>
                  <p><span>Pilotage:</span> Mohammed-Ayoub  El Maftouhi  </p>
                  <p><span>Proposé par :</span> Ouassim Melhaoui  </p>
                  <p><span>Présenté par :</span> Mohammed-Ayoub  El Maftouhi </p>
                  <p><span>Production:</span> Hicham Hajji & Ihab Biziz  </p>
               </div>
               <div className={styles.logos}>
                 <Image alt="alensao logo" src="/logo.png" width="170px" height="100px"></Image>
                 <Image alt="alensao logo" src="/ade.png" width="100px" height="100px"></Image>
                 <Image alt="alensao logo" src="/hicham.png" width="170px" height="100px"></Image>
               </div>
           </div>
      </Layout>

    </div>
  )
}
