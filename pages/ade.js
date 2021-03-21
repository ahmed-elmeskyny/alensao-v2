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
          <AboutDynamic title="à propos" img="/ade.png"  width="200px" height="200px" text="L'ADE (Association Des Etudiants) de l'Ecole Nationale des Sciences Appliquées d'Oujda est l'organisme responsable de la communication entre les étudiants de l'école et tout autre organisme, qu'il soit interne, ou externe. Elle est donc le principal organisme avec lequel l'ALENSAO traite, pour toute affaire touchant les étudiants de l'école, soit, leur totalité. De part l'implication de l'ADE au niveau de la vie estudiantine, l'ALENSAO la compte comme un organisme frère. La preuve de cela se manifeste en la multitude de projets sur lesquels les deux associations ont œuvré. On comptera une émission portant sur la vie socio-économique du pays, un événement culinaire, un événement de soirées musicales, un concept audiovisuel faisant appel à d'ancient lauréats... pour n'en citer que certains. De plus, un noyau s'est imposé entre les deux organismes, et oeuvre sur les projets liant les deux associations. Il compte comme membres :"></AboutDynamic>
          <Tree></Tree>
  
        </Layout>
  
      </div>
    )
  }
  
export default Ade ;