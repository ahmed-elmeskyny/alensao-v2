//next
import Image from "next/image";

//react
import { useEffect, useState } from "react";

//style
import styles from "./stageMain.module.scss";

//react-icons
import {BiSearch} from "react-icons/bi";

//components
import Calendars from "../Calendar/Calendar";
import Offre from "../offre/offre";



//firebase
import {db } from "../../config/utils";




const StageMain = () => {
    const [offres , setOffres] = useState([]);



    useEffect( () => {

        db.collection("offre")
        .get().then(
            snap => {
                const offres = snap.docs.map( doc => ({id:doc.id , ...doc.data()}));
                setOffres(offres)
            }
        )

    } , [])



    return (
        <div className={styles.stageContainer}>     
           <h1>Publiez votre CV - Postulez depuis n'importe où</h1>      
        <div className={styles.main}>
            <div className={styles.leftside}>
                <div className={styles.search}>
                    <input type="text" placeholder="search" ></input>
                    <div  className={styles.icon} >
                    <BiSearch></BiSearch>
                    </div>
                </div>
                {/* <Calendars></Calendars> */}
                {/* <div className={styles.ad}>
                     <h2>AD</h2>
                </div> */}
            </div>
            <div className={styles.offres}>
              {  offres.length !=0 ? 
              offres.map( 
                  offre => <Offre  key={offre.id} offre={offre}></Offre>) 
              :  <div className={styles.empty}><Image alt="no data" src="/noData.svg" width="100px" height="100px"></Image><p>Aucune offre n' a ètè publiée </p></div>}
            </div>
            </div>
        </div>
    )
}


export default StageMain;