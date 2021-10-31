//next
import Head from "next/head";

//react
import { useState } from "react";

//styles
import styles from "../styles/convention.module.scss";

//components
import Layout from "../components/Layout/layout";
import AboutDynamic from "../components/about/about";

//react-icons
import { FaDirections } from "react-icons/fa";

//db
import { conventions } from "../db/conventions";

function MyEnsao() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <div>
      <Head>
        <title>Alensao || UniCard</title>
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
            <h1>UniCard </h1>
            <p>Accueil / Conventions </p>
          </div>
        </div>

        <div className={styles.about}>
          <h1>
            {" "}
            <div></div>
            Description
          </h1>
          <div className={styles.description}>
            <div className={styles.logo}>
              <img
                className={styles.img}
                alt="alensao logo"
                src="/front.png"
              ></img>
              <img
                className={styles.img}
                alt="alensao logo"
                src="/back.png"
              ></img>
            </div>
            <p>
              UniCard est un concept réalisé suite à une cogitation entre
              l'ALENSAO et l'ADE à une solution pour améliorer le style de vie
              des étudiants de notre école, plus précisément, leur budget, qui
              se conclu par une solution à ce même problème, mais à l'échelle
              universitaire. Il s'agit d'une carte de fidélité, que les deux
              associations fournissent, permettant de bénéficier de divers
              offres et réductions, chez plusieurs partenaires avec lesquels des
              conventions furent signées. Ces partenaires couvrent plusieurs
              services, tel que des restaurants, des cafés, salles de sport,
              salon de coiffure, parapharmacie , librairie, opticien, salle de
              jeux, conservatoire de musique...
            </p>
            <p> Pour plus de détails sur les offres, voir plus bas.</p>
          </div>
          <h2
            style={{
              textAlign: "center",
              width: "100%",
              marginTop: "20px",
              fontSize: "35px",
              color: "#0c97b4",
            }}
          >
            Tarif : 200 DH / Année{" "}
          </h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "30px",
              fontSize: "20px",
            }}
          >
            <p>
              Pour plus d'informations sur Unicard , merci de nous contacter sur
              :
            </p>
            <p>
              Tél :<span style={{ color: "#0c97b4" }}> 06 09 02 05 38</span>
            </p>
            <p>
              {" "}
              Whatsapp :
              <span style={{ color: "#0c97b4" }}> 06 09 02 05 38</span>{" "}
            </p>
            <p>
              Email :{" "}
              <a href="mailto:contact@alensao.com" style={{ color: "#0c97b4" }}>
                contact@alensao.com
              </a>
            </p>
          </div>
        </div>

        <div className={styles.conventionsContainer}>
          {conventions.map((convention) => (
            <div className={styles.conventionCard}>
              <div className={styles.logo}>
                <img src={convention.logo}></img>
              </div>
              <div className={styles.description}>
                <h3>{convention.title}</h3>

                <p>{convention.convention}</p>

                <p>{convention.convention1}</p>

                <p>{convention.convention2}</p>
                <p>{convention.convention3}</p>
                <p>{convention.convention4}</p>
                <p>{convention.convention5}</p>

                <p>
                  {convention.adress ? (
                    <p>
                      {" "}
                      <span>ADRESSE : </span>
                      {convention.adress}
                    </p>
                  ) : null}
                </p>
                {convention.map ? (
                  <a href={convention.map} className={styles.adress}>
                    <FaDirections></FaDirections>
                    <p>Direction</p>
                  </a>
                ) : null}
              </div>
            </div>
          ))}

          <p
            style={{ fontSize: "35px", padding: "15px", fontFamily: "Ubuntu" }}
          >
            Et d'autres conventions bientôt disponibles...
          </p>
        </div>
      </Layout>
    </div>
  );
}

export default MyEnsao;
