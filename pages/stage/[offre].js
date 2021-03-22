import Head from 'next/head';
import {useRouter} from "next/router";
import { useEffect, useState } from 'react';
import Image from "next/image";



//style
import styles from "./offreStage.module.scss";

//components
import Layout from "../../components/Layout/layout";
import {Loader} from "../../components/Loader/Loader";
import Notification from "../../components/Notification/notification";

//firebase
import {db,storage } from "../../config/utils";


//react-icons
import {VscDebugStart} from "react-icons/vsc";
import {VscGlobe} from "react-icons/vsc";
import {BiTimeFive} from "react-icons/bi";
import {ImLocation} from "react-icons/im";
import {FaUserGraduate} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BiCurrentLocation} from "react-icons/bi";
import {FaHourglassStart} from "react-icons/fa";
import {RiNewspaperLine}from "react-icons/ri";
import {BiCloudDownload} from "react-icons/bi";
import {BsFillPersonFill} from "react-icons/bs";
import {TiDelete} from "react-icons/ti";


//react-hook-form
import {useForm} from "react-hook-form"



//email.js
import emailjs from "emailjs-com"


export default function OffreStage() {
  const router = useRouter();
  const { offre }= router.query;
  const id = offre;
  
  const [offreDescription , setoffreDescription] = useState(null);
  const [openLogin , setOpenLogin ] = useState(false);
  const [openRegister , setOpenRegister] = useState(false);
  const [loader , setLoader]= useState(false);


  const [email , setEmail] = useState("");
  const [cv , setcv] = useState("");
  const [open , setOpen ]= useState(false);
  const [notif , setNotif] = useState(false);
  const [message , setMessage]= useState("");
  const [erreur , setErreur]=useState(false);

  const {register , handleSubmit  } = useForm();

const Submit = async (data)=> {

   setLoader(true);
   setErreur(false);
   const file = data.cv[0];
   const storageRef = storage.ref();
   const fileRef = storageRef.child(file.name)
   await fileRef.put(file)
   const fileURL = await fileRef.getDownloadURL();

  emailjs.send('service_vbdzu7n', 'template_2d1x7ri',{  offre: offreDescription.entreprise,email: data.email ,cv : `${fileURL}}`},"user_AgjG8swIUnDoTMoSmrZj6")
  .then((res) => {
      console.log(res.text);
      setMessage("envoyée");
      setNotif(true);
      setLoader(false);
  }, (error) => {
      console.log(error.text);
      setMessage(error.text);
      setErreur(true);
      setNotif(true);
      setLoader(false);
  });

  setTimeout( ()=> setNotif(false) ,  8000);
   setOpen(false);
 }

  useEffect(
   async ()=> {
     await db.collection("offre")
             .doc(`${id}`)
             .get().then(
               snap => {
                 const offre = snap.data();
                 setoffreDescription(offre);
               }
             )

    }
  , [])



  return (
    <div >
      <Head>
        <title>Alensao || offre de stage </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout 
        openLogin={openLogin}
        setOpenLogin={setOpenLogin} 
        setOpenRegister={setOpenRegister} 
        openRegister={openRegister}
        >
          {notif ? <Notification erreur={erreur}>{message}</Notification>: null}
          <div className={styles.offreStageHeader}>
              <div className={styles.filter}>
                  <h1>Stagiaire PFE en Développement informatique</h1>
                 <p>Acceuil /  offre de stage </p>
              </div>
           </div>
           {offreDescription ? 
           <div className={styles.offreDescription}>
             <h1>{offreDescription.fonction}</h1>
             <span>{offreDescription.entreprise}</span>
             <div className={styles.infos}>
               <div className={styles.info}>
                 <h3><ImLocation className={styles.icon}></ImLocation> Lieu  </h3>
                 <p>{offreDescription.lieu}</p>
               </div> 
               <div className={styles.info}>
                 <h3><RiNewspaperLine className={styles.icon}></RiNewspaperLine> Contrat  </h3>
                 <p>{offreDescription.contrat}</p>
               </div>
               <div className={styles.info}>
                 <h3> <HiOutlineMail className={styles.icon} />Email  </h3>
                 <p>{offreDescription.email}</p>
               </div>
               <div className={styles.info}>
                 <h3><VscGlobe className={styles.icon}/>Site web  </h3>
                <p>{offreDescription.website}</p>
               </div>
               <div className={styles.info}>
                 <h3><VscDebugStart className={styles.icon}></VscDebugStart>Début periode de stage   </h3>
                 <p>{offreDescription.debut}</p>
               </div>
               <div className={styles.info}>
                 <h3><BiTimeFive className={styles.icon}/> Durée du stage  </h3>
                 <p>{offreDescription.durée}</p>
               </div>
               <div className={styles.info}>
                 <h3> <BiCurrentLocation className={styles.icon} /> Adresse  </h3>
                 <p>{offreDescription.adresse}</p>
               </div>
               <div className={styles.info}>
                 <h3><FaHourglassStart className={styles.icon}></FaHourglassStart> Postulez avant le </h3>
                 <p>{offreDescription.postuler}</p>
               </div>
               <div className={styles.info}>
                 <h3><FaUserGraduate className={styles.icon}></FaUserGraduate> formation  </h3>
                 <p>{offreDescription.secteur}</p>
               </div>
             </div>
             <div className={styles.descriptionContainer}>
                <h2>Descriptif de la mission </h2>
                   <div className={styles.description} >
                     <div><p>{offreDescription.description}</p></div>
                   </div>
              </div>
              <div className={styles.postuler}>
             { offreDescription.pdf ? <button className={styles.pdf}><a href={offreDescription.pdf} target="_blank"><BiCloudDownload className={styles.icon}></BiCloudDownload>Télécharger l'offre</a></button> : null}
                <button onClick={()=>setOpen(true)}> <BsFillPersonFill className={styles.icon}></BsFillPersonFill>Postuler</button>
              </div>
           </div>
           :
           <div className={styles.loaderContainer}> <Loader></Loader> </div>}
          {open? <div className={styles.postulerOffre}>
                <div className={styles.filter}>
                     <div className={styles.logo}>
                         <Image alt="alensao logo" src="/logo1.png" width="25px" height="25px"></Image>
                         <h3>ALENSAO</h3>
                        <TiDelete className={styles.icon} onClick={()=> setOpen(false)}></TiDelete>
                      </div> 
                      {loader? <div className={styles.loaderContainer}> <Loader></Loader> </div>:<form onSubmit={handleSubmit(Submit)} className="offreForm">
                     <label>E-mail</label>
                     <input 
                       name="email" 
                       type="email" 
                       placeholder="email..."
                       ref={register({required : true})}
                       onChange={(e)=> setEmail(e.target.value)}
                     />
                     <label>votre CV</label>
                     <input 
                       name="cv" 
                       type="file" 
                       placeholder="votre cv"
                       ref={register({ required : true})}
                       onChange={(e)=>{ setcv(e.target.value);  
                        }}
                     />
                      <button type="submit" className={email.length  <= 0 || cv.length <= 0 ? null : styles.enabled} disabled={email.length  <= 0 || cv.length <= 0 ? true: false}> Confirmer</button>
                     </form>}
                </div>
           </div> : null}
      </Layout>

    </div>
  )
}
