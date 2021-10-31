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
            200DH / Année{" "}
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
              pour plus d'informations sur Unicard , merci de nous contacter sur
              :
            </p>
            <p>Tel: 06 09 02 05 38 </p>
            <p>Whatsapp: 06 09 02 05 38 </p>
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

                <p>{convention.adress ? <span>ADRESS: </span> : null}</p>
                {convention.map ? (
                  <a href={convention.map} className={styles.adress}>
                    <FaDirections></FaDirections>
                    <p>Direction</p>
                  </a>
                ) : null}
              </div>
            </div>
          ))}

          {/* <div
            className={styles.conventionCard}
            style={{
              backgroundImage: "url(/cardCover.png)",
              backgroundSize: "250%",
            }}
          >
            <div className={styles.convention}>
              <div
                className={styles.logo}
                style={{
                  backgroundImage: "url(/loftin.jpeg)",
                }}
              ></div>
              <div className={styles.description}>
                <h1>LOFTin</h1>

                <ul>
                  <li>
                    <p>
                      {" "}
                      <em>Réduction de 10% sur la restauration</em>
                    </p>
                    <p>
                      {" "}
                      <em>
                        Pack gouter : "Crêpe/gaufre + Boisson chaude" 26 DH
                      </em>
                    </p>
                    <p>
                      <em>
                        Pack déjeuner : "Poutine/tacos/sandwich + soda + frites"
                        30 DH
                      </em>
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.adress}>
                <FaDirections></FaDirections>
                <p>Direction</p>
              </div>
            </div>
          </div>
          <div
            className={styles.conventionCard}
            style={{
              backgroundImage: "url(/cardCover.png)",
              backgroundSize: "250%",
            }}
          >
            <div className={styles.convention}>
              <div
                className={styles.logo}
                style={{
                  backgroundImage: "url(/lunaria.jpeg)",
                }}
              ></div>
              <div className={styles.description}>
                <h1>Lunaria</h1>

                <ul>
                  <li>
                    <em>Soda offert sur tous tacos, burger, ou sandwich</em>
                  </li>
                </ul>
              </div>
              <div className={styles.adress}>
                <FaDirections></FaDirections>
                <p>Direction</p>
              </div>
            </div>
          </div>
          <div
            className={styles.conventionCard}
            style={{
              backgroundImage: "url(/cardCover.png)",
              backgroundSize: "300%",
            }}
          >
            <div className={styles.convention}>
              <div
                className={styles.logo}
                style={{
                  backgroundImage: "url(/sa7bi.jpeg)",
                }}
              ></div>
              <div className={styles.description}>
                <h1>Sa7bi</h1>

                <ul>
                  <li>
                    <em>Réduction de 10% sur tout le menu</em>
                  </li>
                </ul>
              </div>
              <div className={styles.adress}>
                <FaDirections></FaDirections>
                <p>Direction</p>
              </div>
            </div>
          </div>
          <div
            className={styles.conventionCard}
            style={{
              backgroundImage: "url(/cardCover.png)",
              backgroundSize: "450%",
            }}
          >
            <div className={styles.convention}>
              <div
                className={styles.logo}
                style={{
                  backgroundImage: "url(/inessbeauty.jpeg)",
                }}
              ></div>
              <div className={styles.description}>
                <h1>Iness Beauty</h1>

                <ul>
                  <li>
                    <em>Réduction de 20% sur le total du ticket</em>
                  </li>
                </ul>
              </div>
              <div className={styles.adress}>
                <FaDirections></FaDirections>
                <p>Direction</p>
              </div>
            </div>
          </div>
          <div
            className={styles.conventionCard}
            style={{
              backgroundImage: "url(/cardCover.png)",
              backgroundSize: "300%",
            }}
          >
            <div className={styles.convention}>
              <div
                className={styles.logo}
                style={{
                  backgroundImage: "",
                }}
              ></div>
              <div className={styles.description}>
                <h1>Librarie Chariqa</h1>

                <ul>
                  <li>
                    <em>Réduction 10% sur les polycopiés</em>
                  </li>
                  <li>
                    <em>
                      {" "}
                      Réduction 50% sur la récupération de données depuis les
                      clés USB et PCs endommagés
                    </em>
                  </li>
                </ul>
              </div>
              <div className={styles.adress}>
                <FaDirections></FaDirections>
                <p>Direction</p>
              </div>
            </div>
          </div>
          <div
            className={styles.conventionCard}
            style={{
              backgroundImage: "url(/cardCover.png)",
              backgroundSize: "150%",
            }}
          >
            <div className={styles.convention}>
              <div
                className={styles.logo}
                style={{
                  backgroundImage: "url(/smith.jpeg)",
                }}
              ></div>
              <div className={styles.description}>
                <h1>Mr. Smith </h1>
                <ul>
                  <li>
                    <em>
                      Réduction 30% sur le menu de restauration (toute la
                      journée)
                    </em>
                  </li>
                </ul>
              </div>
              <div className={styles.adress}>
                <FaDirections></FaDirections>
                <p>Direction</p>
              </div>
            </div>
          </div>
          <div
            className={styles.conventionCard}
            style={{
              backgroundImage: "url(/cardCover.png)",
              backgroundSize: "250%",
            }}
          >
            <div className={styles.convention}>
              <div
                className={styles.logo}
                style={{
                  backgroundImage: "url(/sami.jpeg)",
                }}
              ></div>
              <div className={styles.description}>
                <h1>Sami School of Music</h1>

                <ul>
                  <li>
                    <em>10% de remise sur l’abonnement mensuel </em>
                  </li>
                </ul>
              </div>
              <div className={styles.adress}>
                <FaDirections></FaDirections>
                <p>Direction</p>
              </div>
            </div>
          </div>
          <div
            className={styles.conventionCard}
            style={{
              backgroundImage: "url(/cardCover.png)",
              backgroundSize: "250%",
            }}
          >
            <div className={styles.convention}>
              <div
                className={styles.logo}
                style={{
                  backgroundImage: "url(/milli.jpg)",
                  backgroundSize: "60%",
                }}
              ></div>
              <div className={styles.description}>
                <h1>Milli Gusto</h1>

                <ul>
                  <li>
                    <em>20% de remise sur le ticket (sauf Soda ou Café) </em>
                  </li>
                </ul>
              </div>
              <div className={styles.adress}>
                <FaDirections></FaDirections>
                <p>Direction</p>
              </div>
            </div>
          </div>
          <div
            className={styles.conventionCard}
            style={{
              backgroundImage: "url(/cardCover.png)",
              backgroundSize: "250%",
            }}
          >
            <div className={styles.convention}>
              <div
                className={styles.logo}
                style={{
                  backgroundImage: "url(/parapharmacie.jpg)",
                }}
              ></div>
              <div className={styles.description}>
                <h1>Parapharmacie EL MESKYNY</h1>

                <ul>
                  <li>
                    <em>15% de remise sur les produits parapharmacie </em>
                  </li>
                </ul>
              </div>
              <div className={styles.adress}>
                <FaDirections></FaDirections>
                <p>Direction</p>
              </div>
            </div>
          </div>
          <div
            className={styles.conventionCard}
            style={{
              backgroundImage: "url(/cardCover.png)",
              backgroundSize: "250%",
            }}
          >
            <div className={styles.convention}>
              <div
                className={styles.logo}
                style={{
                  backgroundImage: "url(/lehlou.jpg)",
                }}
              ></div>
              <div className={styles.description}>
                <h1>Opticien Lehlou</h1>

                <ul>
                  <li>
                    <em>Test visuel gratuit </em>
                  </li>
                  <li>
                    <em>
                      20% de remise sur tous les services (Montures + Verres){" "}
                    </em>
                  </li>
                </ul>
              </div>
              <div className={styles.adress}>
                <FaDirections></FaDirections>
                <p>Direction</p>
              </div>
            </div>
          </div>
          <div
            className={styles.conventionCard}
            style={{
              backgroundImage: "url(/cardCover.png)",
              backgroundSize: "250%",
            }}
          >
            <div className={styles.convention}>
              <div
                className={styles.logo}
                style={
                  {
                    // backgroundImage: "url(/lunaria.jpeg)",
                  }
                }
              ></div>
              <div className={styles.description}>
                <h1>Gym Corsica </h1>

                <ul>
                  <li>
                    <em>
                      25% de réduction pour chaque groupe de 10 personnes{" "}
                    </em>
                  </li>
                </ul>
              </div>
              <div className={styles.adress}>
                <FaDirections></FaDirections>
                <p>Direction</p>
              </div>
            </div>
          </div>

          <div
            className={styles.conventionCard}
            style={{
              backgroundImage: "url(/cardCover.png)",
              backgroundSize: "250%",
            }}
          >
            <div className={styles.convention}>
              <div
                className={styles.logo}
                style={
                  {
                    // backgroundImage: "url(/lunaria.jpeg)",
                  }
                }
              ></div>
              <div className={styles.description}>
                <h1>Gym Men Fit</h1>

                <ul>
                  <li>
                    <em>
                      25% de réduction pour chaque groupe de 10 personnes{" "}
                    </em>
                  </li>
                </ul>
              </div>
              <div className={styles.adress}>
                <FaDirections></FaDirections>
                <p>Direction</p>
              </div>
            </div>
          </div>
          <div
            className={styles.conventionCard}
            style={{
              backgroundImage: "url(/cardCover.png)",
              backgroundSize: "250%",
              height: "800px",
            }}
          >
            <div className={styles.convention}>
              <div
                className={styles.logo}
                style={
                  {
                    // backgroundImage: "url(/lunaria.jpeg)",
                  }
                }
              ></div>
              <div className={styles.description} style={{ height: "100%" }}>
                <h1>City Play</h1>

                <ul>
                  <li>
                    <em>** SNOOKER 10' (petit) :</em>
                    <p>
                      <em>•• Pack Gold : 300dh = 22 parties </em>
                    </p>
                    <p>
                      {" "}
                      <em>•• Pack silver : 200dh = 14 parties </em>
                    </p>
                    <p>
                      <em>•• Pack bronze : 100dh = 7 parties </em>
                    </p>
                  </li>
                  <li>
                    <em>** SNOOKER 12' (Grand) : </em>
                    <p>
                      <em>•• Pack gold : 400dh = 22 parties </em>
                    </p>
                    <p>
                      {" "}
                      <em>•• Pack silver : 300 dh = 14 parties </em>
                    </p>
                    <p>
                      <em>•• Pack bronze : 150dh = 7 parties </em>
                    </p>
                  </li>
                  <li>
                    <em>** PS4 : </em>
                    <p>
                      <em>•• Pack gold : 300dh = 21 heures </em>
                    </p>
                    <p>
                      {" "}
                      <em>•• Pack silver : 200dh = 14 heures </em>
                    </p>
                    <p>
                      <em>•• Pack bronze : 100dh = 7 heures </em>
                    </p>
                  </li>
                  <li>
                    <em>** 8Ball pool </em>
                    <p>
                      <em>•• Pack GOLD : 150dh = 47 parties </em>
                    </p>
                    <p>
                      {" "}
                      <em>•• Pack SILVER : 100dh = 33 parties </em>
                    </p>
                    <p>
                      <em>•• Pack BRONZE : 50dh = 15 parties </em>
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles.adress}>
                <FaDirections></FaDirections>
                <p>Direction</p>
              </div>
            </div>
          </div> */}
        </div>
      </Layout>
    </div>
  );
}

export default MyEnsao;
