import Image from "next/image";

//styles
import styles from "./about.module.scss";


const AboutDynamic = ({isInverse , title , img ,width , height , text , ensa}) => {

    return (
        <div className={ isInverse ? styles.aboutinverse : styles.about}>
            <h1> <div></div>{title}</h1>
            <div className={styles.aboutContainer}>
               { img ?<div className={styles.logo}>
                    <Image alt="alensao logo" src={img} width={width} height={height}></Image>
                </div>: null}
                <div className={styles.description}>
                   {text}
                    {ensa ? <div style={{lineHeight:"30px"}}>
                        <p>Le concept de cette émission, dans le cadre d'un partenariat entre I'ADE
                            et I'ALENSAO, sera de diffuser des capsules vidéo d'une minute, durant
                             laquelle des lauréats de I'ENSAO se présenteront de la manière qui suit :</p>
                           <ul style={{marginLeft:"35px"}}>
                               <li>Nom & Prénom</li>
                               <li>Promotion et filière</li>
                               <li>Parcours professionnel (brièvement)</li>
                               <li>Conseil/mot pour les étudiants de I'ENSAO</li>
                               <li>Mot pour I'ADE et I'ALENSAO</li>
                           </ul>
                           <p>Le but de cette émission sera de promouvoir le poids du réseau des
ENSAOistes en explicitant la portée dudit réseau, ainsi que de prouver aux
étudiants de I'ENSAO que leurs prédécesseurs ont atteint des objectifs qu'ils
ne soupçonnaient même pas. Ces capsules seront diffusées sur la chaine
Youtube de I'ADE, et partagés sur les pages Facebook de I'ADE et de
I'ALENSAO.
Pour ceux qui veulent envoyer une capsule vidéo, ou bien veulent plus
d'informations, veuillez contacter le responsable de communication interne et
externe å travers le mail : ade.ensao@gmail.com</p>
                    </div>: null }
                    
                </div>
            </div>

        </div>
    )
}

export default AboutDynamic;