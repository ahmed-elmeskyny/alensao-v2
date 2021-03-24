import Head from 'next/head';
import {useRouter} from "next/router";
import Image from "next/image";
import {useState} from "react";


//style
import styles from "./galeriee.module.scss";

//components
import Layout from "../../components/Layout/layout";

//db
import {galeriedb} from "../../db/galeriedb";

export default function Episode() {
  const router = useRouter();
  const { galerie }= router.query;
  const id = galerie;
  const newEvent = galeriedb.find( event => event.id.toString() === id  );
  console.log(id)
console.log(newEvent)
  
  const [openLogin , setOpenLogin ] = useState(false);
  const [openRegister , setOpenRegister] = useState(false);

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
                photoe => <div className={styles.photoee} key={photoe} style={{backgroundImage : `url(${photoe})`}}>
            
                     </div>
               )
             }
             </div>

      </Layout>

    </div>
  )
}
