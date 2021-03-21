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
                        <li><Link href="/"><a> À propos </a></Link></li>
                        <li><Link href="/"><a> Trombinoscope </a></Link></li>
                        <li><Link href="/"><a>Contactez-nous</a></Link></li>
                        <li><Link href="/"><a> FAQs</a></Link></li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <h4>Lien Rapid</h4>
                    <ul>
                        <li><Link href="/"><a> Offre de Stage récent </a></Link></li>
                        <li><Link href="/"><a>Evénement</a></Link></li>
                        <li><Link href="/"><a> K-LAM 2.0</a></Link></li>
                        <li><Link href="/"><a>Association des étudiants</a></Link></li>
                    </ul>
                </div>
                <div className={styles.block}>
                    <h4>Evénement récent</h4>
                    <ul>
                        <li><Link href="/"><a> Assise entre l'ade et Alensao </a></Link></li>
                        <li><Link href="/"><a> Séminaire DataProtect Ensa Oujda</a></Link></li>
                        <li><Link href="/"><a> K-LAM 2.0 Teaser saison 1</a></Link></li>
                    </ul>
                </div>
                </div>
                <div className={styles.contactInfo}>
                    <div className={styles.info}>
                        <p>(+212) 6825918261</p>
                        <p style={{color:"red"}}>alensao.association@gmail.com</p>
                        <div className={styles.social}>
                         <FaFacebookSquare className={styles.icon}></FaFacebookSquare>
                         <FaLinkedin className={styles.icon} ></FaLinkedin>
                         <FaTwitter className={styles.icon} ></FaTwitter>
                         <AiFillInstagram className={styles.icon} ></AiFillInstagram>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyRight}>
                <p><FaRegCopyright className={styles.icon}></FaRegCopyright>Copyright 2021 Alensao. All rights reserved </p>
                <p>Crée avec <AiFillHeart className={styles.icon} style={{color:"red"}}></AiFillHeart> par <span>Ahmed El meskyny</span></p>
            </div>
        </div>
    )
}

export default Footer;