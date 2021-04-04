//next
import Image from "next/image";
import Link from "next/link";

//style
import styles from "./footer.module.scss";

//react-icons
import {FaFacebookSquare} from "react-icons/fa";
import {FaRegCopyright} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

const Footer = () => {


    return (
        <div className={styles.footerContainer}>
             <div className={styles.logo}>
                <Image alt="alensao logo" src="/logo1.png" width="35px" height="35px"></Image>
                <h3>ALENSAO</h3>
            </div>
            <div className={styles.links}>
                <div className={styles.link}>
                <div className={styles.block}>
                    <h4>ALENSAO</h4>
                    <ul>
                        <li><Link href="/about"><a> A propos </a></Link></li>
                        <li><Link href="/contactez-nous"><a>Contactez-nous</a></Link></li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <h4>Lien rapide</h4>
                    <ul>
                        <li><Link href="/stage"><a> Offres de stages </a></Link></li>
                        <li><Link href="/emission"><a> K-LAM 2.0</a></Link></li>
                        <li><Link href="/ad-hoc"><a>Comité ad-hoc</a></Link></li>
                        <li><a href="https://www.youtube.com/channel/UCbBDkfV17rgQDyyJz-SxDfQ"  target="_blank">Chaîne youtube de l'ADE</a></li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <h4>Evénements </h4>
                    <ul>
                        <li><Link href="/galerie/4"><a>Forum ENSAO / 17 & 18 Mars 2005</a></Link></li>
                        <li><Link href="/galerie/2"><a>Rencontre des Lauréats - Hôtel Novotel / 28 Mars 2015</a></Link></li>
                        <li><Link href="/galerie/3"><a>Ftour Ramdan / 04 Juin 2015</a></Link></li>
                        <li><Link href="/galerie/6"><a>EUGO - saidia / 27 & 28 & 29 Fev 2020</a></Link></li>
                        <li><Link href="/galerie/5"><a>Déjeuner Alensao & ADE / 09 Janv 2021</a></Link></li>
                        <li><Link href="/galerie/1"><a>Assise ADE & ALENSAO / 15 Janv 2021</a></Link></li>
                    </ul>
                </div>
                </div>
                <div className={styles.contactInfo}>
                    <div className={styles.info}>
                        <h1>Contact</h1>
                        <p><a href="mailto:alensao.association@gmail.com" ><MdEmail style={{fontSize:"22px",marginRight:"5px"}}></MdEmail> : alensao.association@gmail.com</a></p>
                        <div className={styles.social}>
                        <a href="https://web.facebook.com/Association.ALENSAO?_rdc=1&_rdr" target="_blank"> Suivez-nous sur : <FaFacebookSquare className={styles.icon}></FaFacebookSquare></a>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyRight}>
                <p><FaRegCopyright className={styles.icon}></FaRegCopyright>Copyright 2021 Alensao. All rights reserved </p>
                <p>Crée  par <span><a href="http://ahmed-elmeskyny.herokuapp.com/" target="_blank">Ahmed El Meskyny</a></span></p>
            </div>
        </div>
    )
}

export default Footer;