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
              <p>Le monde évolue à une vitesse vertigineuse, il est donc impératif d'adapter un rythme au moins équivalent, au risque d'être dépassé. Cependant, un rythme ou une vitesse n'ont de sens qu'en la présence d'un repère. C'est ce que représente, à mon avis, l'Association des Lauréats. Elle incarne la référence grâce à laquelle le lauréat de l'ENSAO se localise, le point de départ depuis lequel il s'élance vers le monde du travail, et, enfin, le point de chute vers lequel il revient, quand le besoin s'en fait sentir. Le rôle nous incombant donc, en tant que membres de cette association, n'est pas si différent de celui d'une famille.
Notre raison d'être, a été, est, et sera toujours l'étudiant produit par l'ENSAO. Nous œuvrons donc pour créer une synergie entre le lauréat et l'école, en l'impliquant le plus possible dans les projets réalisés par les étudiants actuels. Ce contact permet aussi d'initier les étudiants à la situation du marché du travail, leur permettant de mieux appréhender les défis professionnels. Cela leur permet de devenir des membres actifs de la société, et non pas de simples éléments réactifs. 
En tant que repère, l'ALENSAO se doit d'être tout le temps à jour, et cette plateforme digitale en est la preuve. Malgré le manque de contact inévitable entre les lauréats, dû à la suite de leurs ambitions personnelles, cette plateforme permet de faciliter le contact entre lauréats et étudiants. De plus, l'ALENSAO bénéficie d'un fort réseau de contact, incluant des lauréats de l'école, des conférenciers, des formateurs, et des entreprises au Maroc et à l'international. Elle s'impose donc comme un acteur incontournable du tissu universitaire, capable de contribuer via le conseil et l'accompagnement.
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