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
                    <h4>Alensao</h4>
                    <ul>
                        <li><Link href="/about"><a> À propos </a></Link></li>
                        <li><Link href="/ade"><a> Trombinoscope </a></Link></li>
                        <li><Link href="/contact"><a>Contactez-nous</a></Link></li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <h4>Lien Rapid</h4>
                    <ul>
                        <li><Link href="/stage"><a> Offre de Stage récent </a></Link></li>
                        <li><Link href="/emission"><a> K-LAM 2.0</a></Link></li>
                        <li><Link href="/ade"><a>Association des étudiants</a></Link></li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <h4>Evénement récent</h4>
                    <ul>
                        <li><Link href="/"><a> Assise entre l'ade et Alensao </a></Link></li>
                        <li><Link href="/"><a> Gallerie</a></Link></li>
                        <li><Link href="/emission/Abdelmalek el hebil"><a> K-LAM 2.0 episode2 saison 1</a></Link></li>
                    </ul>
                </div>
                </div>
                <div className={styles.contactInfo}>
                    <div className={styles.info}>
                        <p>(+212) 6825918261</p>
                        <p style={{color:"red"}}>alensao.association@gmail.com</p>
                        <div className={styles.social}>
                        <a href="https://web.facebook.com/Association.ALENSAO?_rdc=1&_rdr" target="_blank"> <FaFacebookSquare className={styles.icon}></FaFacebookSquare></a>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyRight}>
                <p><FaRegCopyright className={styles.icon}></FaRegCopyright>Copyright 2021 Alensao. All rights reserved </p>
                <p>Crée avec <AiFillHeart className={styles.icon} style={{color:"red"}}></AiFillHeart> par <span><a href="http://ahmed-elmeskyny.herokuapp.com/" target="_blank">Ahmed El meskyny</a></span></p>
            </div>
        </div>
    )
}

export default Footer;