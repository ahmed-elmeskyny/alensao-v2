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
          <title>Alensao || Comité Ad-hoc</title>
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
               <h1> Comité ad-hoc </h1>
               <p>Accueil / Ad-hoc</p>
            </div>
          </div>
          <AboutDynamic title="A propos"    text="En vue de la collaboration étroite entre l'Association des Lauréats de l'ENSAO (ALENSAO), et l'Association des Etudiants de l'ENSAO (ADE), et dans le but de faciliter la coopération et la synergie entre les deux organismes, un comité ad-hoc a vu le jour, comprenant des membres des deux organismes, ainsi que des membres externes. L'objectif principal de ce comité est d'œuvrer sur la multitude d'événements et de projets incluant les deux associations. Les membres du comité sont comme suit :"></AboutDynamic>
          <Tree></Tree>
  
        </Layout>
  
      </div>
    )
  }
  
export default Ade ;