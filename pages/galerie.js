//next
import Head from 'next/head';
import {useRouter} from "next/router"

//react
import { useState} from "react";

//styles 
import styles from "../styles/galerie.module.scss";

//components
import Layout from "../components/Layout/layout";






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

          <div className={styles.portfolio} style={{backgroundImage: "url(/gg.jpg)" , backgroundSize:"100%"}} onClick={() => router.push(`galerie/nani`)} >
              <span>Assise ADE / ALENSAO</span>
          </div>

           <div className={styles.portfolio} style={{backgroundImage: "url(/gg2.jpg)" , backgroundSize:"100%"}} >
            <span>Lorem Ipsum 2015</span>
           </div>

          <div className={styles.portfolio} style={{backgroundImage: "url(/gg3.jpg)" , backgroundSize:"100%"}} >
            <span> Ipsum Lorem 2016 </span>
          </div>

          <div className={styles.portfolio} style={{backgroundImage: "url(/gg4.jpg)" , backgroundSize:"100%"}}>
            <span>ALENSAO 2016</span>
          </div>
       </div>
     

      </Layout>

    </div>
  )
}




export default Galerie;