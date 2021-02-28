

//style
import styles from "./stageMain.module.scss";

//react-icons
import {BiSearch} from "react-icons/bi";

//components
import Calendars from "../Calendar/Calendar";
import Offre from "../offre/offre";



const StageMain = () => {

    return (
        <div className={styles.stageContainer}>     
           <h1>Publiez votre CV - Postulez à des emplois depuis n'importe quel appareil</h1>      
        <div className={styles.main}>
            <div className={styles.leftside}>
                <div className={styles.search}>
                    <input type="text" placeholder="search" ></input>
                    <div  className={styles.icon} >
                    <BiSearch></BiSearch>
                    </div>
                </div>
                <Calendars></Calendars>
                <div className={styles.ad}>
                     <h2>AD</h2>
                </div>
            </div>
            <div className={styles.offres}>
                <Offre 
                isNew="nouveau"
                title="Stagiaire PFE en Développement informatique"
                text="od. Ut sagittis laoreet venenatis. Curabitur nulla orci, rhoncus sit amet quam eget, hendrerit ultricies nisi. Etiam sem nibh, ornare ut tortor scelerisque,"
                tags={["génie informatique", "stage", "developpement mobile"]}
                start="immédiatement"
                duree="6 mois"
                postuler="1 december 2021"
                lieu="Rabat"
                />
                <Offre
                title="Stage d'ingénieur PFE & Automatisation Industrielle"
                text="rem ipsum dolor sit amet, consectetur  . Curabitur nulla orci, rhoncus sit amet quam  adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut "
                tags={["génie industrielle", "automatisation"]}
                start="immédiatement"
                duree=" 1 mois"
                postuler="2 fevrier 2021"
                lieu="Casablanca"

               />
                <Offre
                title="Stage de pré-embauche dans le développement informatique"
                text="orbi non nulla consequat, dictum massa nec, euismod sapien. Duis sit amet euismod massa. Vivamus luctus tincidunt metus, ut condimentum ligula molestie sit amet. "
                tags={["génie informatique" , "developpement web"]}
                start="immédiatement"
                duree=" 3 mois"
                postuler="29 fevrier 2021"
                lieu="Tanjer"
                /> 
                <Offre
                title="Ingénieur développement d’outils automobile"
                text="Duis scelerisque venenatis imperdiet. Phasellus iaculis odio in orci placerat, sit amet faucibus libero euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in"
                tags={["system embarquée"]}
                start="immédiatement"
                duree=" 4 mois"
                postuler="23 mars 2021"
                lieu="Marrakesh"
                />
            </div>
            </div>
        </div>
    )
}
export default StageMain;