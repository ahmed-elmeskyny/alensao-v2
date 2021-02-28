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
                         <h3>OUASSIM MELHAOUI</h3>
                         <p>president</p>
                     </div>
                </div>
                <div className={styles.profile} >
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp1.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>YOUSSEF LBOUR</h3>
                         <p>Vice-President</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp3.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>ISMAIL DINE</h3>
                         <p>secretaire generale</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>ADNANE ELKHATIB</h3>
                         <p>Trésorier</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp2.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>FARID LAHBIL</h3>
                         <p>responsable</p>
                     </div>
                </div>
                <div className={styles.profile}>
                     <div className={styles.pdp} style={{backgroundImage : "url(/pdp4.jpg)"}}>

                     </div>
                     <div className={styles.name}>
                         <h3>SAMIR OUAMASSI</h3>
                         <p>responsable</p>
                     </div>
                </div>
             </div>    
        </div>
    )
};

export default Tree ;