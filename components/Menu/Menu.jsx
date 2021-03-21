//next - react
import Head from "next/head";
import React, {useState , useEffect} from "react";
import Router from "next/router";

//style
import styles from "./Menu.module.scss";


//components
import ActiveLink from "../ActiveLink/activeLink";

//react-icons
import {RiDashboardFill} from "react-icons/ri";
import {FaFire} from "react-icons/fa";
import {MdEventNote} from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs";
import {MdPermContactCalendar} from "react-icons/md";
import {BiGroup} from "react-icons/bi";
import {FaFacebookSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {CgScreen} from "react-icons/cg";
import {RiDeleteBack2Fill} from "react-icons/ri";
import {AiFillHeart} from "react-icons/ai";
import {FaRegCopyright} from "react-icons/fa";

//nprogress
import NProgress from "nprogress";


const SideMenu = ({width , setwidth}) => {
    const [Fixed  , setFixed] = useState(false);
    // Router.events.on("routeChangeStart" , (url)=> NProgress.start());

    Router.onRouteChangeStart = () => {
        NProgress.start()
    }
    Router.onRouteChangeComplete = () => {
        NProgress.done()
    }
    const handleScroll = ()=> {
        const offset= window.scrollY;
        if(offset > 40 ){
          setFixed(true);
        }
        else{
          setFixed(false);
        }
      }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })


    return (
        <>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" ></link>
        </Head>
        <div className={Fixed ?styles.fixedMenuContainer : styles.menuContainer}>
                <ul>
                    <li>
                        <ActiveLink href="/" activeClassName={styles.activeLink}>
                            <a className={styles.acceuil}><RiDashboardFill style={{fontSize:"23px" , marginRight:"5px"}}></RiDashboardFill>Acceuil</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/about" activeClassName={styles.activeLink}>
                            <a  className={styles.about} ><FaFire style={{fontSize:"23px" , marginRight:"5px"}} ></FaFire>À propos</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/stage" activeClassName={styles.activeLink}>
                            <a  className={styles.blog}><MdEventNote style={{fontSize:"23px" , marginRight:"5px"}} ></MdEventNote> Offre de Stage </a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/gallerie" activeClassName={styles.activeLink}>
                            <a  className={styles.space}><BsFillChatDotsFill style={{fontSize:"23px" , marginRight:"5px"}} ></BsFillChatDotsFill> Gallerie </a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/emission" activeClassName={styles.activeLink}>
                            <a  className={styles.faq}><CgScreen style={{fontSize:"23px" , marginRight:"5px"}} ></CgScreen>K-Lam 2.0</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/ade" activeClassName={styles.activeLink}>
                            <a  className={styles.faq}><BiGroup style={{fontSize:"23px" , marginRight:"5px"}} ></BiGroup>ADE</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/contact" activeClassName={styles.activeLink}>
                            <a  className={styles.contact}><MdPermContactCalendar style={{fontSize:"23px" , marginRight:"5px"}} ></MdPermContactCalendar>Contact</a>
                        </ActiveLink>
                    </li>
                </ul>
                <div className={styles.social}>
                    <FaFacebookSquare className={styles.icon}></FaFacebookSquare>
                    <FaLinkedin className={styles.icon} ></FaLinkedin>
                    <FaTwitter className={styles.icon} ></FaTwitter>
                    <AiFillInstagram className={styles.icon} ></AiFillInstagram>
                </div>            
        </div>
        <div className={styles.filter} style={{width: width}}>
          <div className={styles.mobileMenu}>
            <RiDeleteBack2Fill className={styles.iconDelete} onClick={()=> setwidth("0%")}></RiDeleteBack2Fill>
                <ul>
                    <li>
                        <ActiveLink href="/" activeClassName={styles.activeLink}>
                            <a className={styles.acceuil} onClick={()=> setwidth("0%")}><RiDashboardFill style={{fontSize:"23px" , marginRight:"5px"}}></RiDashboardFill>Acceuil</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/about" activeClassName={styles.activeLink}>
                            <a  className={styles.about} onClick={()=> setwidth("0%")}><FaFire style={{fontSize:"23px" , marginRight:"5px"}} ></FaFire>À propos</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/stage" activeClassName={styles.activeLink}>
                            <a  className={styles.blog} onClick={()=> setwidth("0%")}><MdEventNote style={{fontSize:"23px" , marginRight:"5px"}} ></MdEventNote> Offre de Stage </a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/myspace" activeClassName={styles.activeLink}>
                            <a  className={styles.space} onClick={()=> setwidth("0%")}><BsFillChatDotsFill style={{fontSize:"23px" , marginRight:"5px"}} ></BsFillChatDotsFill> Gallerie </a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/emission" activeClassName={styles.activeLink}>
                            <a  className={styles.faq} onClick={()=> setwidth("0%")}><CgScreen style={{fontSize:"23px" , marginRight:"5px"}} ></CgScreen>K-Lam 2.0</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/faqs" activeClassName={styles.activeLink}>
                            <a  className={styles.faq} onClick={()=> setwidth("0%")}><BiGroup style={{fontSize:"23px" , marginRight:"5px"}} ></BiGroup>ADE</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/contact" activeClassName={styles.activeLink}>
                            <a  className={styles.contact} onClick={()=> setwidth("0%")}><MdPermContactCalendar style={{fontSize:"23px" , marginRight:"5px"}} ></MdPermContactCalendar>Contact</a>
                        </ActiveLink>
                    </li>
                </ul>
                <div>
                <div className={styles.social}>
                    <FaFacebookSquare className={styles.icon}></FaFacebookSquare>
                    <FaLinkedin className={styles.icon} ></FaLinkedin>
                    <FaTwitter className={styles.icon} ></FaTwitter>
                    <AiFillInstagram className={styles.icon} ></AiFillInstagram>
                </div>
                <div className={styles.copyRight}>
                    <p><FaRegCopyright className={styles.icon}></FaRegCopyright>Copyright 2021 Alensao. All rights reserved </p>
                    <p>Crée avec <AiFillHeart className={styles.icon} style={{color:"red"}}></AiFillHeart> par <span>Ahmed El meskyny</span></p>
                </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default SideMenu;