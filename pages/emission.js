import Head from 'next/head';
import {useState} from "react";

//style
import styles from "../styles/emission.module.scss";

//components
import Layout from "../components/Layout/layout";
import EmissionMain from "../components/emissionMain/emissionMain";



export default function Emission() {

  
  const [openLogin , setOpenLogin ] = useState(false);
  const [openRegister , setOpenRegister] = useState(false);

  return (
    <div >
      <Head>
        <title>Alensao || Émission </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout 
        openLogin={openLogin}
        setOpenLogin={setOpenLogin} 
        setOpenRegister={setOpenRegister} 
        openRegister={openRegister}
        >
        <div className={styles.emissionHeader}>
          <div className={styles.filter}>
              <h1>K-LAM 2.0 Ensao</h1>
              <p>Acceuil /  K-LAM 2.0 </p>
          </div>
        </div>

        <EmissionMain ></EmissionMain>
      </Layout>

    </div>
  )
}
