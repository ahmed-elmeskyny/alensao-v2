import Head from 'next/head';

//style 
import styles from "../styles/Stage.module.scss";


//components
import Layout from "../components/Layout/layout";
import StageMain from "../components/stageMain/stageMain";





export default function Stage() {
  return (
    <div >
      <Head>
        <title>Alensao || offre de stage </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.stageHeader}>
          <div className={styles.filter}>
          <h1> Offre de Stage </h1>
          <p>Acceuil / offre de stage </p>
          </div>
        </div>
        <StageMain></StageMain>

      </Layout>

    </div>
  )
};