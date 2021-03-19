

//style
import styles from "./stageMain.module.scss";

//react-icons
import {BiSearch} from "react-icons/bi";

//components
import Calendars from "../Calendar/Calendar";
import Offre from "../offre/offre";
import { useEffect, useState } from "react";

//firebase
import {db } from "../../config/utils";

//redux
import {connect} from "react-redux";
import { AddOffrePublic} from "../../redux/publicReducer/public-action";


const StageMain = () => {
    const [offres , setOffres] = useState(null);

    useEffect( () => {
        db.collection("offre")
        .get().then(
            snap => {
                const offres = snap.docs.map( doc => ({id:doc.id , ...doc.data()}));
                setOffres(offres)
            }
        )


    } , [])

console.log(offres)
    return (
        <div className={styles.stageContainer}>     
           <h1>Publiez votre CV - Postulez à des emplois depuis n'importe quel appareil</h1>      
        <div className={styles.main}>
            <div className={styles.leftside}>
                <div className={styles.search}>
                    <input type="text" placeholder="search" ></input>
                    <div  className={styles.icon} >
                    <BiSearch></BiSearch>
                    </div>
                </div>
                <Calendars></Calendars>
                <div className={styles.ad}>
                     <h2>AD</h2>
                </div>
            </div>
            <div className={styles.offres}>
              {  offres ? offres.map( offre => <Offre  key={offre.id} offre={offre}></Offre>) : <p>nani</p>}
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    offres : state.offresPublic.offresPublic
  });

const mapDispatchToProps = (dispatch) => ({
    AddOffrePublic : (offre ) => dispatch(AddOffrePublic(offre)),
  });
export default connect(mapStateToProps, mapDispatchToProps)(StageMain);