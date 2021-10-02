//next
import Head from "next/head";
import Image from "next/image";

//react
import { useState, useEffect } from "react";

//styles
import styles from "../styles/magensao.module.scss";

//components
import Layout from "../components/Layout/layout";
import Popup from "../components/popup/popup";

//db
import { magdb } from "../db/dbMag";

function About() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setToggle(true);
    }, 5000);
  }, []);

  return (
    <div>
      <Head>
        <title>Alensao || MagEnsao</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="MagEnsao"></meta>
        <meta property="og:image" content="/og2.png"></meta>
        <meta
          property="og:description"
          content="Un nouveau concept , en collaboration entre l'ALENSAO et l'ADE, d'un magazine bimestriel couvrant les événements au sein de l'ENSAO. Reportages, articles, news... soyez aux aguets pour notre nouvelle revue : MagEnsao!"
        ></meta>
      </Head>

      <Layout
        openLogin={openLogin}
        setOpenLogin={setOpenLogin}
        setOpenRegister={setOpenRegister}
        openRegister={openRegister}
      >
        <div className={styles.aboutHeader}>
          <div className={styles.filter}>
            <h1> MagEnsao </h1>
            <p>Accueil / MagEnsao </p>
          </div>
        </div>
        <h1 className={styles.title}>
          <div></div>Le Premier Magazine de l'ENSAO<div></div>
        </h1>
        <div className={styles.magContainer}>
          {magdb.map((mag) => (
            <a href={mag.read} target="_blank">
              <div className={styles.mag}>
                <div
                  className={styles.thumbnail}
                  style={{ backgroundImage: `url(${mag.thumbnail})` }}
                ></div>
                <div className={styles.text}>
                  <h4>{mag.title}</h4>
                  <p>{mag.date}</p>
                </div>
              </div>
              <div className={styles.links}>
                <a href={mag.read} target="_blank">
                  Lecture interactive
                </a>
                <a href={mag.pdf} target="_blank">
                  PDF téléchargeable
                </a>
              </div>
            </a>
          ))}
        </div>
        {toggle ? <Popup setToggle={setToggle}></Popup> : null}
        {/* <div className={styles.building} >
          <h1 style={{color:"red"}}>En cours de construction ....</h1>
            <Image alt="construction" src="/building.svg" width="300px" height="300px"></Image>
            <h3>Un nouveau concept , en collaboration entre l'ALENSAO et l'ADE, d'un magazine bimestriel couvrant les événements au sein de l'ENSAO. Reportages, articles, news... soyez aux aguets pour notre nouvelle revue : MagEnsao!</h3>
        </div> */}
      </Layout>
    </div>
  );
}

export default About;
