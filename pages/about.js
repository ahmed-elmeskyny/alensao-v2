import Head from 'next/head';
import Image from "next/image"

//styles 
import styles from "../styles/aboutus.module.scss";

//components
import Layout from "../components/Layout/layout";
import AboutDynamic from "../components/about/about";
import Tree from '../components/tree/tree';



export default function About() {
  return (
    <div >
      <Head>
        <title>Alensao || A propos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.aboutHeader}>
          <div className={styles.filter}>
             <h1> A Propos d' AlENSAO </h1>
             <p>Acceuil / alensao </p>
          </div>
        </div>
        <AboutDynamic title="à propos" img="/logo.png"  width="350px" height="200px"></AboutDynamic>
        <AboutDynamic isInverse title="notre mission" img="/mission.png" width="220px" height="200px" ></AboutDynamic>
        <Tree></Tree>
      </Layout>

    </div>
  )
}
