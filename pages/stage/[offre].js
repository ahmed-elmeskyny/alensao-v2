import Head from 'next/head';
import {useRouter} from "next/router";
import Image from "next/image";

//style
import styles from "./offreStage.module.scss";

//components
import Layout from "../../components/Layout/layout";





export default function OffreStage() {
  const router = useRouter();
  const { offre }= router.query;
  const id = offre;
  return (
    <div >
      <Head>
        <title>Alensao || Episode </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <div className={styles.offreStageHeader}>
              <div className={styles.filter}>
                  <h1>Stagiaire PFE en Développement informatique</h1>
                 <p>Acceuil /  K-LAM 2.0 / offre </p>
              </div>
           </div>
           
          
      </Layout>

    </div>
  )
}
