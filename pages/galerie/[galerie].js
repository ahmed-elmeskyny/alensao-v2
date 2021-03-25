import Head from 'next/head';
import {useRouter} from "next/router";


import React, { useState, useCallback } from "react";




//style
import styles from "./galeriee.module.scss";

//components
import Layout from "../../components/Layout/layout";

//db
import {galeriedb} from "../../db/galeriedb";

import {TiDeleteOutline} from "react-icons/ti"


export default function Episode() {
  const router = useRouter();
  const { galerie }= router.query;
  const id = galerie;
  const newEvent = galeriedb.find( event => event.id.toString() === id  );
  const photos = newEvent.photos;

  
  const [openLogin , setOpenLogin ] = useState(false);
  const [openRegister , setOpenRegister] = useState(false);

  const [open , setOpen]=useState(false);
  const [url ,setUrl]=useState("");



  return (
    <div >
      <Head>
        <title>Alensao || Galerie </title>
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
                  <h1>{newEvent.eventName}</h1>
                 <p>Accueil /  Galerie  </p>
              </div>
           </div>
           <h1 className={styles.title}><div></div>Galerie<div></div></h1>
           <div className={styles.photose}>
             {
               newEvent.photos.map(
                photoe => <div className={styles.photoee} key={photoe} onClick={()=> { setUrl(photoe); setOpen(true)}}>
                 <img src={photoe} width="100%" height="100%"></img>
                     </div>
               )
             }
              
             </div>
           { open? <div className={styles.zoom}>
               <div className={styles.filter}>
                 <TiDeleteOutline className={styles.icon} onClick={()=> setOpen(false)}></TiDeleteOutline>
               <img src={url} className={styles.img}></img>
               </div>
             </div> : null}
              
              
            

      </Layout>

    </div>
  )
}
