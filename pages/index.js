import Head from 'next/head';
import {useState} from "react"


//style 
import styles from "../styles/Home.module.scss";

//components
import Layout from "../components/Layout/layout";
import Slider from "../components/Slider/slider";



function  Home() {
  const [openLogin , setOpenLogin ] = useState(false);
  const [openRegister , setOpenRegister] = useState(false);


  
  return (
    <div >
      <Head>
        <title>Alensao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout 
        openLogin={openLogin}
        setOpenLogin={setOpenLogin} 
        setOpenRegister={setOpenRegister} 
        openRegister={openRegister}
        >
        <Slider></Slider>
        <div className={styles.speachContainer}>
          <h1>Mot du Président de l'ALENSAO  </h1>
          <div className={styles.mot}>   
              <div className={styles.img}></div>
              <p>Le monde évolue à une vitesse vertigineuse, il est donc primordial d'adapter un rythme au moins équivalent, ou d'encourir l'obsolescence. Cependant, un rythme ou une vitesse n'ont de sens qu'en la présence d'un repère. C'est ce qu'incarne, à mon sens, l'Association des Lauréats. Elle représente la référence grâce à laquelle le lauréat de l'ENSAO se localise, le point de départ depuis lequel il s'élance vers le monde du travail, et, enfin, le point de chute vers laquelle il revient, quand le besoin s'en fait sentir. Le rôle nous incombant donc, en tant que membres de cette association, ne diffère guère de celui d'une famille.
Notre raison d'être, fut, est, et demeurera toujours l'étudiant produit par l'ENSAO. Nous œuvrons donc pour créer une synergie entre le lauréat et l'école, en l'impliquant autant que faire se peut dans les projets réalisés par les étudiants actuels. L'engendrement de ce contact permet aussi aux étudiants de s'immiscer à la situation du marché du travail, leur permettant de mieux appréhender les défis professionnels. Cela leur octroie d'outrepasser l'expectatif, le réactif, et de devenir tout simplement actifs. 
En tant que repère, l'ALENSAO se doit d'être impassiblement et incessamment à la pointe de la contemporanéité, cette plateforme digitale en demeure la preuve indéniable. Nonobstant le gouffre inéluctable entre les lauréats inhérent à la suite de leurs ambitions propres, ladite plateforme permet de faciliter le contact entre lauréats et étudiants. De surcroît, l'ALENSAO jouie d'un fort réseau de contact, incluant des lauréats de l'école, des conférenciers, des formateurs, et des entreprises au Maroc et à l'international. Elle s'impose donc comme un acteur intrinsèque du tissu universitaire, capable de contribuer via le conseil et l'accompagnement.
Pour conclure, je dirais que l'ALENSAO se personnifie en la locomotive brandissant l'étendard de l'école, en quête de redorer son label, et d'intercéder en faveur de ses lauréats.</p>
          </div>
          <div  className={styles.sgnature}>
            <p>MELHAOUI OUASSIM</p>
            <p>Promotion 2005 , Génie informatique</p>
          </div>
        </div>
      </Layout>
    </div>
  )
};



export default Home;