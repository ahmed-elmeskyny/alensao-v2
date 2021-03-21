//next
import Image from "next/image"
import {useRouter} from "next/router";
import React , { useState} from "react";

//style
import styles from "./offre.module.scss";

//react-icons
import {VscDebugStart} from "react-icons/vsc";
import {IoIosArrowForward} from "react-icons/io";
import {FaHourglassStart} from "react-icons/fa";
import {ImLocation} from "react-icons/im";
import {BiCalendarMinus} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";
import {TiDelete} from "react-icons/ti";

//firebase
import {db} from "../../config/utils";

//redux
import { connect } from "react-redux";
import { DeleteOffre} from "../../redux/offreReducer/offre-action";


const Offre = ({offre, isLaureat , DeleteOffre , UserId}) => {
    const router = useRouter();
    const { description , fonction , debut , durée , postuler , lieu , secteur ,createdAt} = offre;
    const [confirm , setConfirm] = useState(false);

    const Delete= (id) => {
        DeleteOffre(id);
        
        db.collection("users")
        .doc(`${UserId}`)
        .collection("offre")
        .doc(`${id}`)
        .delete();

        db.collection("offre").doc(`${id}`).delete();
        
    }
    return (

        <div className={styles.offreContainer} style={isLaureat ? {margin: "0",marginBottom:"15px" ,width : "100%"} : null}>
            <div className={styles.offreDescription}>
            { isLaureat ?    <AiFillDelete style={{color:"red", fontSize:"20px" , cursor:"pointer" , display:"flex" }} onClick={()=> setConfirm(true)}></AiFillDelete> : null }
                <div className={styles.header}>
                    <div className={styles.title}>
                        <span> {createdAt}</span>
                        <h2>{fonction}</h2>
                    </div>
                   <div className={styles.img}>
                      <Image alt="societe" src="/logo1.png" width="25px" height="25px"></Image>
                   </div>
                </div>
                <div className={styles.descriptiontext}>
                   <p>{description}</p><span>...</span>
                </div>
                <div className={styles.conditions}>
                    <div className={styles.condition}>
                        <h4><VscDebugStart className={styles.icon}></VscDebugStart>Date de début</h4>
                        <p>{debut}</p>
                    </div>
                    <div className={styles.condition}>
                        <h4><BiCalendarMinus className={styles.icon}></BiCalendarMinus> Durée</h4>
                        <p>{durée} </p>
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
                 <p>{secteur}</p>
                </div>
                <div className={styles.detail} onClick={ () => router.push(`stage/${offre.id}`)}>
                    <span>voir les détails</span>
                    <IoIosArrowForward></IoIosArrowForward>
                </div>
            </div>
            {
            confirm ?
             <div className={styles.Confirm}>
               <div className={styles.filter}>
                  <div className={styles.logo}>
                   <Image alt="alensao logo" src="/logo1.png" width="25px" height="25px"></Image>
                   <h3>ALENSAO</h3>
                  </div> 
                  <div className={styles.text}>
                    <p>Vous voulez supprimer cette offre ?</p>
                  </div>
                  <div className={styles.confirmer}>
                  <button className={styles.pdf } onClick={() => setConfirm(false)}>Annluer</button>
                  <button onClick= { 
                      ()=> {
                          Delete(offre.id);
                          setConfirm(false);
                      }
                  }>Confirmer</button>
                  </div>
                </div>
                </div>:null
          }
        </div>
    )
};


const mapDispatchToProps = (dispatch) => ({
    DeleteOffre: (id) => dispatch(DeleteOffre(id)),
})

export default connect(null,mapDispatchToProps)(Offre) ;