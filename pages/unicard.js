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
            <p>Accueil / Convention </p>
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum,It is a long established fact that a reader will be
            </p>
          </div>
        </div>

        <div className={styles.conventionsContainer}>
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
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default MyEnsao;
