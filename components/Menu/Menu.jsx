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
import {MdPermContactCalendar} from "react-icons/md";
import {BiGroup} from "react-icons/bi";
import {FaFacebookSquare} from "react-icons/fa";
import {CgScreen} from "react-icons/cg";
import {RiDeleteBack2Fill} from "react-icons/ri";
import {BiWorld} from "react-icons/bi";
import {FaRegCopyright} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {HiOutlinePhotograph} from "react-icons/hi";
import {BsBookmarks} from "react-icons/bs";
import {RiArrowDownSLine} from "react-icons/ri";
import {BsFillCameraVideoFill} from "react-icons/bs";

//nprogress
import NProgress from "nprogress";


const SideMenu = ({width , setwidth}) => {
    const [Fixed  , setFixed] = useState(false);
    const [open , isOpen] = useState(false);
    const [open1 , isOpen1] = useState(false);
    const [open2 , isOpen2] = useState(false)


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
                            <a className={styles.acceuil} ><RiDashboardFill style={{fontSize:"23px" , marginRight:"5px"}}></RiDashboardFill>Accueil</a>
                        </ActiveLink>
                    </li>
                    <li>
                            <a  className={styles.about} onClick={()=> isOpen(!open)} ><RiArrowDownSLine  style={{fontSize:"23px" , marginRight:"5px"}}></RiArrowDownSLine>Organismes</a>
                        {open? <div className={styles.submenu}>
                               <ul>
                                   <li>
                                      <ActiveLink href="/about" activeClassName={styles.activeLink}>
                                         <a  className={styles.about} onClick={()=> setwidth("0%")}><FaFire style={{fontSize:"23px" , marginRight:"5px"}} ></FaFire>ALENSAO</a>
                                      </ActiveLink>
                                   </li>
                                   <li>
                                     <ActiveLink href="/ad-hoc" activeClassName={styles.activeLink}>
                                         <a  className={styles.faq} onClick={()=> setwidth("0%")}><BiGroup style={{fontSize:"23px" , marginRight:"5px"}} ></BiGroup>Comité Ad-hoc</a>
                                     </ActiveLink>
                                   </li>
                               </ul>
                            </div>:null}
                    </li>
                    <li>
                        <ActiveLink href="/stage" activeClassName={styles.activeLink}>
                            <a  className={styles.blog}><MdEventNote style={{fontSize:"23px" , marginRight:"5px"}} ></MdEventNote> Offres de stages </a>
                        </ActiveLink>
                    </li>
                    <li>

                            <a  className={styles.space} onClick={()=> isOpen1(!open1)}><RiArrowDownSLine  style={{fontSize:"23px" , marginRight:"5px"}}></RiArrowDownSLine> Multimédia </a>
                        {open1? <div className={styles.submenu}>
                               <ul>
                                   <li>
                                   <ActiveLink href="/galerie" activeClassName={styles.activeLink}>
                            <a  className={styles.space} onClick={()=> setwidth("0%")}><HiOutlinePhotograph style={{fontSize:"23px" , marginRight:"5px"}} ></HiOutlinePhotograph> Galerie </a>
                        </ActiveLink>
                                   </li>
                                   <li>
                                     <ActiveLink href="/videotheque" activeClassName={styles.activeLink}>
                                         <a  className={styles.faq} onClick={()=> setwidth("0%")}><BsFillCameraVideoFill style={{fontSize:"23px" , marginRight:"5px"}} ></BsFillCameraVideoFill>Vidéothéque</a>
                                     </ActiveLink>
                                   </li>
                               </ul>
                            </div>:null}
                    </li>
                    <li>
                            <a  className={styles.faq} onClick={()=> isOpen2(!open2)}><RiArrowDownSLine  style={{fontSize:"23px" , marginRight:"5px"}}></RiArrowDownSLine>News & infos</a>
                        {open2? <div className={styles.submenu}>
                               <ul>
                                   <li>
                                   <ActiveLink href="/emission" activeClassName={styles.activeLink}>
                            <a  className={styles.faq} onClick={()=> setwidth("0%")}><CgScreen style={{fontSize:"23px" , marginRight:"5px"}} ></CgScreen>K-LAM 2.0</a>
                        </ActiveLink>
                                   </li>
                                   <li>
                                   <ActiveLink href="/ensaoiste" activeClassName={styles.activeLink}>
                            <a  className={styles.contact}><BiWorld style={{fontSize:"23px" , marginRight:"5px"}} ></BiWorld>Ensaoistes du monde</a>
                        </ActiveLink>
                                   </li>
                                   <li>
                        <ActiveLink href="/magensao" activeClassName={styles.activeLink}>
                            <a  className={styles.faq}><BsBookmarks style={{fontSize:"23px" , marginRight:"5px"}}  ></BsBookmarks> MagEnsao</a>
                        </ActiveLink>
                    </li>
                               </ul>
                            </div>:null}
                    </li>
                    <li>
                        <ActiveLink href="/contactez-nous" activeClassName={styles.activeLink}>
                            <a  className={styles.contact}><MdPermContactCalendar style={{fontSize:"23px" , marginRight:"5px"}} ></MdPermContactCalendar>Contactez-nous</a>
                        </ActiveLink>
                    </li>

                </ul>
                <div className={styles.social}>
                   <a href="https://web.facebook.com/Association.ALENSAO?_rdc=1&_rdr" target="_blank"> <FaFacebookSquare className={styles.icon} style={{color:"#1877F2"}}></FaFacebookSquare></a>
                   <a href="mailto:alensao.association@gmail.com"  target="_blank"> <MdEmail className={styles.icon} style={{fontSize:"22px"}}></MdEmail></a>
                </div>            
        </div>

        <div className={styles.filter} style={{width: width}}>
          <div className={styles.mobileMenu}>
            <RiDeleteBack2Fill className={styles.iconDelete} onClick={()=> setwidth("0%")}></RiDeleteBack2Fill>
                <ul>
                    <li>
                        <ActiveLink href="/" activeClassName={styles.activeLink}>
                            <a className={styles.acceuil} onClick={()=> setwidth("0%")}><RiDashboardFill style={{fontSize:"23px" , marginRight:"5px"}}></RiDashboardFill>Accueil</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/about" activeClassName={styles.activeLink}>
                            <a  className={styles.about} onClick={()=> setwidth("0%")}><FaFire style={{fontSize:"23px" , marginRight:"5px"}} ></FaFire>ALENSAO</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/ad-hoc" activeClassName={styles.activeLink}>
                            <a  className={styles.faq} onClick={()=> setwidth("0%")}><BiGroup style={{fontSize:"23px" , marginRight:"5px"}} ></BiGroup>Comité Ad-hoc</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/stage" activeClassName={styles.activeLink}>
                            <a  className={styles.blog} onClick={()=> setwidth("0%")}><MdEventNote style={{fontSize:"23px" , marginRight:"5px"}} ></MdEventNote> Offres de stages </a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/galerie" activeClassName={styles.activeLink}>
                            <a  className={styles.space} onClick={()=> setwidth("0%")}><HiOutlinePhotograph style={{fontSize:"23px" , marginRight:"5px"}} ></HiOutlinePhotograph> Galerie </a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/emission" activeClassName={styles.activeLink}>
                            <a  className={styles.faq} onClick={()=> setwidth("0%")}><CgScreen style={{fontSize:"23px" , marginRight:"5px"}} ></CgScreen>K-LAM 2.0</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/ensaoiste" activeClassName={styles.activeLink}>
                            <a  className={styles.contact}><BiWorld style={{fontSize:"23px" , marginRight:"5px"}} ></BiWorld>Ensaoistes du monde</a>
                        </ActiveLink>
                    </li>
                    <li>
                                     <ActiveLink href="/videotheque" activeClassName={styles.activeLink}>
                                         <a  className={styles.faq} onClick={()=> setwidth("0%")}><BsFillCameraVideoFill style={{fontSize:"23px" , marginRight:"5px"}} ></BsFillCameraVideoFill>Vidéothéque</a>
                                     </ActiveLink>
                                   </li>
                    <li>
                        <ActiveLink href="/magensao" activeClassName={styles.activeLink}>
                            <a  className={styles.faq}><BsBookmarks style={{fontSize:"23px" , marginRight:"5px"}}  ></BsBookmarks> MagEnsao</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/contactez-nous" activeClassName={styles.activeLink}>
                            <a  className={styles.contact} onClick={()=> setwidth("0%")}><MdPermContactCalendar style={{fontSize:"23px" , marginRight:"5px"}} ></MdPermContactCalendar>Contactez-nous</a>
                        </ActiveLink>
                    </li>

                </ul>
                <div>
                <div className={styles.social}>
                <a href="https://web.facebook.com/Association.ALENSAO?_rdc=1&_rdr" target="_blank"> <FaFacebookSquare className={styles.icon}></FaFacebookSquare></a>
                <a href="mailto:alensao.association@gmail.com"  target="_blank"> <MdEmail className={styles.icon} style={{fontSize:"22px"}}></MdEmail></a>
                </div>
                <div className={styles.copyRight}>
                    <p><FaRegCopyright className={styles.icon}></FaRegCopyright>Copyright 2021 Alensao. All rights reserved </p>
                    <p>Crée par <span>Ahmed El meskyny</span></p>
                </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default SideMenu;