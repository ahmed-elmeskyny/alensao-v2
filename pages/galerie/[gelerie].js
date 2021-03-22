import Head from 'next/head';
import {useRouter} from "next/router";
import Image from "next/image";
import {useState} from "react";


//style
import styles from "./galeriee.module.scss";

//components
import Layout from "../../components/Layout/layout";






export default function Episode() {
  const router = useRouter();
  const { galerie }= router.query;
  const event = galerie;


  
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
                  <h1>Galerie</h1>
                 <p>Acceuil /  Galerie / {galerie} </p>
              </div>
           </div>
           
      </Layout>

    </div>
  )
}
