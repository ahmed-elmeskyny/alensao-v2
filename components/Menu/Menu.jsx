//next
import Image from "next/image";

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

const SideMenu = () => {

    return (
        <div className={styles.menuContainer}>
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
                        <ActiveLink href="/myspace" activeClassName={styles.activeLink}>
                            <a  className={styles.space}><BsFillChatDotsFill style={{fontSize:"23px" , marginRight:"5px"}} ></BsFillChatDotsFill> Evénement </a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/emission" activeClassName={styles.activeLink}>
                            <a  className={styles.faq}><CgScreen style={{fontSize:"23px" , marginRight:"5px"}} ></CgScreen>K-Lam 2.0</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/faqs" activeClassName={styles.activeLink}>
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
    )
};

export default SideMenu;