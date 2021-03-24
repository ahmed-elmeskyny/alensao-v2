//next
import Image from "next/image";
import Link from "next/link";

//style
import styles from "./footer.module.scss";

//react-icons
import {FaFacebookSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillHeart} from "react-icons/ai";
import {FaRegCopyright} from "react-icons/fa";
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
                        <li><Link href="/about"><a> À propos </a></Link></li>
                        <li><Link href="/ade"><a> Trombinoscope </a></Link></li>
                        <li><Link href="/contact"><a>Contactez-nous</a></Link></li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <h4>Lien Rapide</h4>
                    <ul>
                        <li><Link href="/stage"><a> Offres de stages récentes </a></Link></li>
                        <li><Link href="/emission"><a> K-LAM 2.0</a></Link></li>
                        <li><Link href="/ade"><a>Association Des Etudiants</a></Link></li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <h4>Evénements récents</h4>
                    <ul>
                        <li><Link href="/"><a> Assise ADE/ALENSAO </a></Link></li>
                        <li><Link href="/"><a> Galerie</a></Link></li>
                        <li><Link href="/emission/Mr Abdelmalek ELHEBIL"><a> K-LAM 2.0 Saison 1 Episode 2 </a></Link></li>
                    </ul>
                </div>
                </div>
                <div className={styles.contactInfo}>
                    <div className={styles.info}>
                        <p>(+212) 6825918261</p>
                        <p style={{color:"red"}}><a href="mailto:alensao.association@gmail.com" >alensao.association@gmail.com</a></p>
                        <div className={styles.social}>
                        <a href="https://web.facebook.com/Association.ALENSAO?_rdc=1&_rdr" target="_blank"> <FaFacebookSquare className={styles.icon}></FaFacebookSquare></a>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyRight}>
                <p><FaRegCopyright className={styles.icon}></FaRegCopyright>Copyright 2021 Alensao. All rights reserved </p>
                <p>Crée  par <span><a href="http://ahmed-elmeskyny.herokuapp.com/" target="_blank">Ahmed El meskyny</a></span></p>
            </div>
        </div>
    )
}

export default Footer;