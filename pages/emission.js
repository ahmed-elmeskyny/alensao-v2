import Head from 'next/head';

//style
import styles from "../styles/emission.module.scss";

//components
import Layout from "../components/Layout/layout";



export default function Emission() {
  return (
    <div >
      <Head>
        <title>Alensao || Émission </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.emissionHeader}>
          <div className={styles.filter}>
              <h1>K-LAM 2.0 Ensao</h1>
              <p>Acceuil /  K-LAM 2.0 </p>
          </div>
        </div>

      </Layout>

    </div>
  )
}
