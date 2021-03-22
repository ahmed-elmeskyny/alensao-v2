import Image from "next/image";

//styles
import styles from "./tree.module.scss";


const Tree = ({name , stats , img}) => {
    
    return (
        <div className={styles.treeContainer}>
             <h1><div></div>MEET the TEAM<div></div></h1>
             <p>RESPONSIBLE FOR MAKING THE CHANGE HAPPEN</p>
             <div className={styles.profilContainer}>
                 <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage: "url(/president.jpeg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>MELHAOUI Ouassim</h3>
                         <p>Membre de l'ALENSAO</p>
                     </div>
                </div>
                <div className={styles.profile} >
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp1.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>ABBACI Mohammed</h3>
                         <p>Membre de l'ALENSAO</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp3.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>OUAMASSI Samir</h3>
                         <p>Président de SoftInnovation</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>LBOUR Youssef</h3>
                         <p>Membre de l'ADE</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp2.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>BENBRIK Jihane</h3>
                         <p>Membre de l'ADE</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp4.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>MHAMDI Hadil</h3>
                         <p>Membre de l'ADE</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp4.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>ELKHATIB Adnane</h3>
                         <p>Membre de l'ADE</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp4.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>EL MAFTOUHI Mohammed-Ayoub</h3>
                         <p>Membre de l'ADE</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp4.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>BIZIZ Ihab</h3>
                         <p>Membre de l'ADE</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp4.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>ELKADI Amina</h3>
                         <p>Membre de l'ADE</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp4.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>DINE Ismail</h3>
                         <p>Ancient Membre de l'ADE</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp4.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>AZDAD Mahmoud</h3>
                         <p>Ancient Membre de l'ADE</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp4.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>EL MESKYNY Ahmed</h3>
                         <p>Etudiant ENSAO</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp4.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>BELHAJ Ayoub</h3>
                         <p>Etudiant ENSAO</p>
                     </div>
                </div>
             </div>    
        </div>
    )
};

export default Tree ;