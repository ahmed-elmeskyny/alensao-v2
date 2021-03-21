import Head from 'next/head';
import { useState} from "react";


//styles 
import styles from "../styles/ade.module.scss";




//components
import Layout from "../components/Layout/layout";
import AboutDynamic from "../components/about/about";
import Tree from '../components/tree/tree';




function Ade() {
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
               <h1> A Propos de l'ADE </h1>
               <p>Acceuil / ADE</p>
            </div>
          </div>
          <AboutDynamic title="à propos" img="/ade.png"  width="350px" height="200px"></AboutDynamic>
          <Tree></Tree>
  
        </Layout>
  
      </div>
    )
  }
  
export default Ade ;