//next
import Head from 'next/head';
import {useRouter} from "next/router"

//react
import { useState} from "react";

//styles 
import styles from "../styles/galerie.module.scss";

//components
import Layout from "../components/Layout/layout";

//db
import {galeriedb } from "../db/galeriedb";



function Galerie() {
  const [openLogin , setOpenLogin ] = useState(false);
  const [openRegister , setOpenRegister] = useState(false);

  const router = useRouter();
  return (
    <div >
      <Head>
        <title>Alensao || Galerie</title>
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
             <h1> Galerie </h1>
             <p>Acceuil / Galerie </p>
          </div>
        </div>
        <h1 className={styles.title}><div></div>Evénements<div></div></h1>
       <div className={styles.portfolioContainer}>
      { galeriedb.map(
         (event =>  
         <div className={styles.port}>
             <div className={styles.portfolio}  key={event.id} style={{backgroundImage: `url(${event.thumbnail})` , backgroundSize:"cover" , backgroundPosition:"center"}} onClick={() => router.push(`galerie/${event.id}`)} >
            </div>
            <p style={{color:"black"}}><strong>{event.eventName}</strong></p>
            <p>Lieu : {event.lieu}</p>
           <p>Date : {event.date}</p>
          </div>
          )
        ) }

     </div>

      </Layout>

    </div>
  )
}




export default Galerie;