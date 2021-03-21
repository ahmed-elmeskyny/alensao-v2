import Head from 'next/head';
import Image from "next/image";
import React , {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
//styles 
import styles from "../styles/myspace.module.scss";

//components
import Layout from "../components/Layout/layout";
import Offre from "../components/offre/offre";

//react-icons
import {BsFillPersonFill} from "react-icons/bs";
import {HiOutlineMailOpen} from "react-icons/hi";
import {BsFillBookmarkFill} from "react-icons/bs";
import {BsFillPeopleFill} from "react-icons/bs";
import {FaNetworkWired} from "react-icons/fa";
import {AiFillCheckCircle} from "react-icons/ai";
import {TiDelete} from "react-icons/ti";
import {BsCheckAll} from "react-icons/bs";
import {VscEmptyWindow} from "react-icons/vsc";

//redux
import {connect} from "react-redux";

//loader
import{ Loader} from "../components/Loader/Loader";

//notif
import Notification from "../components/Notification/notification";

//firebase
import {createUserOffre, createOffre ,db, storage} from "../config/utils"
import { AddOffre } from '../redux/offreReducer/offre-action';

 function MySpace(props) {

  const {register , handleSubmit} = useForm()
  const [open , setOpen ]= useState(false);
  const [message , setMessage]= useState("");
  const [loader , isLoader]= useState(false);
  const [notif , setNotif]=useState(false);
  const [erreur , setErreur]=useState(false);
  const [fileURL , setFileURL]=useState(null);
  // const [offres , setOffres] = useState([]);
    
  const [openLogin , setOpenLogin ] = useState(false);
  const [openRegister , setOpenRegister] = useState(false);

  
  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileURL(await fileRef.getDownloadURL())
  }

  const submit =async (data) => {

    isLoader(true);
    setErreur(false);

    const {id} = props.user;
    try { 

  const offreId=  await createUserOffre(id  , data , fileURL);
    await createOffre(offreId,data,fileURL);

    props.AddOffre({
      ...data,
      fileURL:fileURL,
      id:offreId
    })
    isLoader(false);
    setOpen(false);
    setMessage("Votre offre a été publiée");
    setNotif(true) 
    setOpen(false);
    isLoader(false);
    setTimeout( ()=> {
      setNotif(false);
    }, 8000)
    } catch  (error){
      isLoader(false);
      setErreur(true);
      setMessage(error.message);
      setNotif(true);
      setTimeout(
        ()=> {
          setNotif(false);
        }
     , 8000 )
    }
    
  }


  return (
    <div >
      <Head>
        <title>Alensao || My Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout 
        openLogin={openLogin}
        setOpenLogin={setOpenLogin} 
        setOpenRegister={setOpenRegister} 
        openRegister={openRegister}
        >
        {notif ? <Notification  erreur={erreur} >{message}</Notification>:null}
        {props.user ?  
        <>  <div className={styles.mySpaceContainer}>
              <div className={styles.mySpace}>
                  <div className={styles.pdp} style={props.user.photoURL ?{ backgroundImage: `url(${props.user.photoURL})`} : null}></div>
                  <div className={styles.description}>
                      <p><BsFillPersonFill className={styles.icon}></BsFillPersonFill>{props.user.firstname} {props.user.lastname}</p>
                      <p><HiOutlineMailOpen className={styles.icon} ></HiOutlineMailOpen> {props.user.email} </p>
                      <p><BsFillPeopleFill className={styles.icon}></BsFillPeopleFill> {props.user.promotion}</p>
                     {props.user.verified? <p><BsCheckAll className={styles.icon } style={{color:"#32cd32"}}></BsCheckAll> email verifiee</p> :  <p><TiDelete className={styles.icon } style={{color:"#FF0000"}}></TiDelete> email non  verifiee</p>}
                      <p><BsFillBookmarkFill className={styles.icon}></BsFillBookmarkFill> Mes Offres</p>
                  </div>
                  <div onClick={() => setOpen(true)}>
                      <button><AiFillCheckCircle className={styles.icon} ></AiFillCheckCircle>Publiez une offre</button>
                  </div>
              </div>
              <div className={styles.publications}>
                  <h1>Mes Offres</h1>
                 { props.offres? 
                    <div>
                       {props.offres.map( 
                         offre =>
                          <Offre 
                             isLaureat 
                             UserId={props.user.id} 
                             key={offre.id} 
                             offre={offre}

                             >
                          </Offre>)
                      }
                   </div> 
                   :
                   <div className={styles.empty}>
                       <Image alt="no data" src="/noData.svg" width="100px" height="100px"></Image>
                        <p>Vous n'avez publier aucune offre</p>
                    </div> 
                 }
              </div>
          </div></> : <div className={styles.loaderContainer}> <Loader></Loader> </div>}


        {open? 
         <div className={styles.offreFormContainer}>
                  <div className={styles.filter}>
                     <div className={styles.logo}>
                         <Image alt="alensao logo" src="/logo1.png" width="25px" height="25px"></Image>
                         <h3>ALENSAO</h3>
                        <TiDelete className={styles.icon} onClick={()=> setOpen(false)}></TiDelete>
                      </div> 
                     { loader?<div className={styles.loaderContainer}> <Loader></Loader> </div> :<form autoComplete="off" onSubmit= {handleSubmit(submit)}>
                        <div>
                           <label>nom de l'entreprise <span style={{color:"red"}}> * </span> </label>
                            <input 
                                name="entreprise" 
                                type="text" 
                                placeholder="entreprise..."
                                ref={register({required : true})}
                            />

                            <label>Adresse</label>
                            <input 
                                name="adresse" 
                                type="text" 
                                placeholder="adresse / Non-défini..."
                                ref={register({required:false})}
                                  />

                             <label>Site Web</label>
                              <input 
                                  name="website" 
                                  type="text" 
                                  placeholder="www.exemple.com / Non-défini..."
                                  ref={register({required:false})}
                                  />
                                  </div>
                                  <div>
                              <label>E-mail <span style={{color:"red"}}> * </span></label>
                                  <input 
                                    name="email" 
                                    type="email" 
                                    placeholder="email..."
                                    ref={register({required : true})}
                                  />
                                  <label>Fonction <span style={{color:"red"}}> * </span></label>
                                  <input 
                                       name="fonction" 
                                       type="text" 
                                       placeholder="initulé du poste"
                                       ref={register({required : true})}
                                  />
                                  <label>Secteur d'activité <span style={{color:"red"}}> * </span></label>
                                 <input 
                                     name="secteur" 
                                     type="text" 
                                     placeholder="domaine..."
                                     ref={register({required : true})}
                                 />
                                 </div>
                                 <div>
                                <label>Début de stage <span style={{color:"red"}}> * </span></label>
                                 <input 
                                    name="debut" 
                                    type="date" 
                                    // placeholder="2 fev 2021 / Non-défini..."
                                    ref={register({required : true})}
                                 />
                                
   <label>Lieu <span style={{color:"red"}}> * </span></label>
     <input 
       name="lieu" 
       type="text" 
       placeholder="Rabat Morocco / Non-défini..."
       ref={register({required : true})}
    />
         <label>Type de contrat  <span style={{color:"red"}}> * </span> </label>
   <input 
      name="contrat" 
      type="text" 
      placeholder="stage / CDI / CDD / Non-défini ..."
      ref={register({required : true})}
   />
    </div>

        <div>
        <label>Fin de stage</label>
                                 <input 
                                    name="fin" 
                                    type="date" 
                                    // placeholder="2 fev 2021 / Non-défini..."
                                    ref={register({required:false})}
                                 />
   <label>Ajouté l'offre PDF </label>
<input 
  className={styles.file}
  name="upload" 
  type="file" 
  placeholder="l'offre en pdf / Non-défini.."
  onChange={e => onFileChange(e)}
/>
</div>
<div>
   <label>durée  <span style={{color:"red"}}> * </span> </label>
<input 
  name="durée" 
  type="text"
  placeholder="6mois / Non-défini ..." 
  ref={register({required : true})}

/>
</div>
<div>
   <label>Postulez avant le : <span style={{color:"red"}}> * </span> </label>
<input 
  name="postuler" 
  type="text"
  placeholder=" 1 janv 2021 / Non-défini ..." 
  ref={register({required : true})}

/>
</div>
<div className={styles.description}>
<label>Description  <span style={{color:"red"}}> * </span> </label>
<textarea type="text"name="description" placeholder="Missions / descriptif du profil recherché" ref={register({required : true})}></textarea>
</div>
<button type="submit" ><AiFillCheckCircle></AiFillCheckCircle> Publier </button>

                     </form> }
                  </div>
          </div>:null}

      </Layout>

    </div>
  )
}


const mapStateToProps = (state) => ({
  user : state.user.CurrentUser,
  offres : state.offres.offres,
})

const mapDispatch = (dispatch) => ({
  AddOffre : (offre) => dispatch(AddOffre(offre))
})

export default connect(mapStateToProps , mapDispatch)(MySpace);