//next
import Link from "next/link";

//style
import styles from "./slider.module.scss";
import "react-slideshow-image/dist/styles.css";

//components
import { Slide } from "react-slideshow-image";

//react-icons
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

const slides = [
  "/slide1.jpeg",
  "/slide2.jpeg",
  "/slide4.jpeg",
  "/slide5.jpeg",
  "/slide6.jpeg",
  "/rencontre9.JPG",
  "/slide10.jpeg",
  "/remise.jpeg",
  "/nawal.jpeg",
  "/alensaobr.jpeg",
  "/alenslide.jpeg",
  "/annuel.png",
  "/slidee.jpg",
];

const properties = {
  prevArrow: (
    <AiOutlineLeft
      className={styles.slideArrowLeft}
      style={{
        fontSize: "40px",
        color: "black",
        cursor: "pointer",
        position: "absolute",
        left: "0px",
        backgroundColor: " rgba(250,250,250,0.5 )",
        borderRadius: "5px",
      }}
    ></AiOutlineLeft>
  ),
  nextArrow: (
    <AiOutlineRight
      className={styles.slideArrowRight}
      style={{
        fontSize: "40px",
        color: "black",
        cursor: "pointer",
        position: "absolute",
        right: "0px",
        backgroundColor: " rgba(250,250,250,0.5 )",
        borderRadius: "5px",
      }}
    ></AiOutlineRight>
  ),
  duration: 10000,
};

const Slider = () => {
  return (
    <Slide {...properties}>
      <div className={styles.eachSlide}>
        <div
          className={styles.slide}
          style={{
            backgroundImage: `url(${slides[12]})`,
            backgroundPosition: "top",
          }}
        >
          <div className={styles.filter}>
            <div className={styles.slideText}>
              <h1>Conférence</h1>
              <span>
                Conférence sous le thème « Le sport et les études
                universitaires, quelle corrélation en termes de performance »
                animée le 14 Avril 2023 par M.El Hebil Abdelmalek , conférencier
                et expert international au sein de la fédération
                internationale d’athlétisme.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div
          className={styles.slide}
          style={{
            backgroundImage: `url(${slides[11]})`,
            backgroundPosition: "center",
          }}
        >
          <div className={styles.filter}>
            <div className={styles.slideText}>
              <h1> Annuel des Associations de l'ENSAO</h1>
              <span>
                13/11/2021, l'ALENSAO et l'ADE fêtent un an d'activités
                communes, et rendent hommages aux partenaires qui ont contribué
                aux projets durant cette année. Un événement plein d'émotions,
                marquant une fin, certes, mais aussi un grand début pour les
                événements à venir.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div
          className={styles.slide}
          style={{
            backgroundImage: `url(${slides[10]})`,
            backgroundPosition: "center",
          }}
        >
          <div className={styles.filter}>
            <div className={styles.slideText}>
              <h3>
                Clôture du premier semestre des activités ADE/ALENSAO et
                inauguration officielle du nouveau bureau de l'ALENSAO.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div
          className={styles.slide}
          style={{ backgroundImage: `url(${slides[9]})` }}
        >
          <div className={styles.filter}>
            <div className={styles.slideText}>
              <h1>Nouveau bureau ALENSAO</h1>
              <span>
                L'ALENSAO est fière d'annoncer l'inauguration de son nouveau
                bureau au sein du bloc A, 1er étage. Preuve irréfutable de la
                coopération entre l'ENSAO et l'Association de ses Lauréats, et
                produit de la synergie entre ces deux organismes et l'ADE, ce
                bureau légitimise d'avantage le statut et les actions de
                l'ALENSAO.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div
          className={styles.slide}
          style={{
            backgroundImage: `url(${slides[8]})`,
            backgroundPositionX: "-150px",
          }}
        >
          <div className={styles.filter}>
            <div className={styles.slideText}>
              <h1>K-LAM 2.0 Nawal El Moutawakel </h1>
              <span>
                8 Mai 2021 : Coulisses du tournage de l'émission K-LAM 2.0, en
                compagnie de l'icone internationale du sport féminin, Nawal El
                Moutawakel
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div
          className={styles.slide}
          style={{
            backgroundImage: `url(${slides[0]})`,
            backgroundPosition: "center",
          }}
        >
          <div className={styles.filter}>
            <div className={styles.slideText}>
              <h1>Association des Lauréats de l'ENSAO </h1>
              <span>
                L'association des Lauréats de l'ENSAO se veut le lien entre les
                étudiants et les lauréats de l'école, à travers ses activités,
                ses partenariats et son vaste réseau de relations, elle facilite
                la transition du monde académique vers le monde du travail aux
                nouveaux lauréats.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div
          className={styles.slide}
          style={{ backgroundImage: `url(${slides[1]})` }}
        >
          <div className={styles.filter}>
            <div className={styles.slideText}>
              <h1>
                L'assise Entre l'ADE & l'ALENSAO & Soft Innovation - Paris{" "}
              </h1>
              <span>
                Premier événement en collaboration entre l’ADE et l’ALENSAO,
                marquant une nouvelle ère de synergie très prometteuse. Fut
                aussi l’invité d’honneur la société SoftInnovation, représentée
                par son Président, M. Samir OUAMASSI.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.eachSlide}>
        <div
          className={styles.slide}
          style={{
            backgroundImage: `url(${slides[2]})`,
            backgroundPosition: "center",
          }}
        >
          <div className={styles.filter}>
            <div className={styles.slideText}>
              <h1>Match de football contre les vétérans de la MCO</h1>
              <span>
                A l’occasion de la première édition du Forum Entreprises de
                l’ENSAO, un match amical fut organisé entre des étudiants et des
                professeurs de l’ENSAO, et des joueurs du MCO.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div
          className={styles.slide}
          style={{
            backgroundImage: `url(${slides[3]})`,
            backgroundPosition: "center",
          }}
        >
          <div className={styles.filter}>
            <div className={styles.slideText}>
              <h1>Ftour Ramadan</h1>
              <span>
                A l’occasion du saint mois de Ramadan, en 2015, l’ALENSAO a
                organisé un Ftour entre les anciens lauréats à Riad21 -
                Casablanca.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div
          className={styles.slide}
          style={{ backgroundImage: `url(${slides[4]})` }}
        >
          <div className={styles.filter}>
            <div className={styles.slideText}>
              <h1>Rencontre des Lauréats 28 Mars 2015</h1>
              <span>
                Une rencontre inédite et tant attendue par tant de lauréats,
                s'étant déroulé à Novotel de Casablanca.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div
          className={styles.slide}
          style={{ backgroundImage: `url(${slides[5]})` }}
        >
          <div className={styles.filter}>
            <div className={styles.slideText}>
              <h1>Point de rencontre</h1>
              <span>
                Cette rencontre a permis au comité de l'ALENSAO de réunir
                plusieurs lauréats, et des personnalités tel que Monsieur
                Mustapha KHALFI, Ministre de la Culture et de la Communication,
                ainsi que 3 directeurs de l'ENSAO : Messieurs BARBOUCHA
                Mohammed, ELEULDJ Mohcine et ROUBI Larbi.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div
          className={styles.slide}
          style={{
            backgroundImage: `url(${slides[6]})`,
            backgroundPosition: "center",
          }}
        >
          <div className={styles.filter}>
            <div className={styles.slideText}>
              <h1>Réunion de l'ALENSAO à l'hôtel Bourgreg de Salé </h1>
              <span>
                Réunion des membres de L'ALENSAO en Janvier 2015 dans
                l'intention de discuter et d'œuvrer sur la rencontre prévue pour
                Mars de la même année.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.eachSlide}>
                <div className={styles.slide} style={{backgroundImage: `url(${slides[7]})`,backgroundPosition:"center"  }}>
                    <div className={styles.filter}>
                        <div className={styles.slideText}>
                             <h1>Alensao</h1>
                            <span>Remise de l’attestation de remerciement pour Ahmed El Meskyny pour son grand dévouement et engagement dans la réalisation du premier siteweb de l’association des lauréats de l’ENSAO.</span>
                        </div>
                    </div>
                </div>
            </div> */}
    </Slide>
  );
};

export default Slider;
