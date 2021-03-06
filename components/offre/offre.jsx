//next
import Image from "next/image"
import {useRouter} from "next/router";

//style
import styles from "./offre.module.scss";

//react-icons
import {VscDebugStart} from "react-icons/vsc";
import {IoIosArrowForward} from "react-icons/io";
import {FaHourglassStart} from "react-icons/fa";
import {ImLocation} from "react-icons/im";
import {BiCalendarMinus} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";


const Offre = ({ text , title , tags, start , duree , postuler , lieu , isNew , isLaureat}) => {
    const date = new Date();
    const router = useRouter();

    return (

        <div className={styles.offreContainer} style={isLaureat ? {margin: "0" ,width : "100%"} : null}>
            <div className={styles.offreDescription}>
            { isLaureat ?    <AiFillDelete style={{color:"red", fontSize:"20px" , cursor:"pointer" , display:"flex" }}></AiFillDelete> : null }
                <div className={styles.header}>
                    <div className={styles.title}>
                        <span> {isNew} -  {date.toDateString()}</span>
                        <h2>{title}</h2>
                    </div>
                   <div className={styles.img}>
                      <Image alt="societe" src="/logo1.png" width="25px" height="25px"></Image>
                   </div>
                </div>
                <p>{text}...</p>
                <div className={styles.conditions}>
                    <div className={styles.condition}>
                        <h4><VscDebugStart className={styles.icon}></VscDebugStart>Date de début</h4>
                        <p>{start}</p>
                    </div>
                    <div className={styles.condition}>
                        <h4><BiCalendarMinus className={styles.icon}></BiCalendarMinus> Durée</h4>
                        <p>{duree} </p>
                    </div>
                    <div className={styles.condition}>
                        <h4><FaHourglassStart className={styles.icon}></FaHourglassStart>Postulez avant le </h4>
                        <p>{postuler}</p>
                    </div>
                    <div className={styles.condition}>
                        <h4><ImLocation className={styles.icon}></ImLocation>Lieu </h4>
                        <p> {lieu}</p>
                    </div>
                
                    
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles.tag}>
                   {tags.map(tag => <p key={tag}>{tag}</p>)}
                </div>
                <div className={styles.detail} onClick={ () => router.push("stage/hehe")}>
                    <span>voir les détails</span>
                    <IoIosArrowForward></IoIosArrowForward>
                </div>
            </div>
        </div>
    )
};
export default Offre ;