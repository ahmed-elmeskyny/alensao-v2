//next
import Head from 'next/head';

//react
import { useState} from "react";

//styles 
import styles from "../styles/aboutus.module.scss";

//components
import Layout from "../components/Layout/layout";
import AboutDynamic from "../components/about/about";





function About() {
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
             <h1> A Propos de l'AlENSAO </h1>
             <p>Accueil / alensao </p>
          </div>
        </div>
        <AboutDynamic title="A propos" img="/logo.png"  width="350px" height="200px" text="L'ALENSAO (Association des Lauréats de l'Ecole Nationale des Sciences Appliquées d'Oujda) est l'organisme regroupant les lauréats de l'école. L'association se veut le porte parole des lauréats, ainsi que leur représentant vis à vis de l'école. Elle est donc le principal médiateur des lauréats désirant reprendre contact avec l'école et ses étudiants, que ce soit à travers des activités et évènement organisés par les étudiants ou par les lauréats, des séminaires, des conférences ou des formations. De plus, de par son vaste réseau de contacts, elle fournit un soutient aux étudiants organisant des évènements au niveau de l'école, que cela soit à travers des mise en contact avec des personnalités clés, par la fourniture de certains service ou par une aide financière. L'ALENSAO travaille elle même sur plusieurs projets, en collaboration avec l'ADE (Association Des Etudiants) de l'ENSAO, dont le but est de redorer l'image de la seule grande école d'ingénieurs de l'Oriental, à savoir, l'Ecole Nationale des Sciences Appliquées d'Oujda."></AboutDynamic>
        <AboutDynamic isInverse title="Notre mission" img="/mission.png" width="220px" height="200px" text="Le but de notre association, et le centre de tout son intérêt, est primordialement et avant tout : l'ingénieur que produit l'ENSAO. Comme il incombe à l'école de lui fournir une formation complète dans le domaine de son choix, nous nous donnons la tâche de peaufiner sa formation en mettant à sa disposition des séminaires, des conférences et des activités qui lui permettent d'aguerrir ses Soft Skills. Ainsi, nous œuvrons à les préparer non seulement à être prêts à affronter le marché du travail, mais aussi à l'appréhender. L'association représente pour ses nouveaux lauréats donc une interface entre le monde académique et le monde professionnel. De plus, nous croyant fermement en le potentiel de chacun de ces ingénieurs, et encourageons l'esprit d'entrepreneuriat, que cela soit en invitant des entrepreneurs et des chefs d'entreprises qui traitent le sujet, en sensibilisant les étudiants à la vie socio-économique de la région et du pays à travers des émissions, ou en leur donnant des exemples d'ancient lauréats. Enfin, nous nous efforçons de dénicher des opportunités de stages et d'emplois aux étudiants et lauréats de l'école, à travers nos partenariats avec certaines entreprises, comme SoftInnovation Paris."></AboutDynamic>

      </Layout>

    </div>
  )
}




export default About;