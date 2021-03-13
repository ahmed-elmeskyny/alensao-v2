import Head from 'next/head';
import Image from "next/image";
import {useState} from "react";
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



export default function About() {

    const {register , handleSubmit , errors } = useForm();
    const [open , setOpen] = useState(false);
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const Submit = (data) => {
        console.log(data)
        setEmail("");
        setPassword("");
        setOpen(false);
  
    }

  return (
    <div >
      <Head>
        <title>Alensao || A propos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <div className={styles.mySpaceContainer}>
              <div className={styles.mySpace}>
                  <div className={styles.pdp}></div>
                  <div className={styles.description}>
                      <p><BsFillPersonFill className={styles.icon}></BsFillPersonFill>Ouassim Melhaoui</p>
                      <p><HiOutlineMailOpen className={styles.icon} ></HiOutlineMailOpen> ouassimmelhaoui@gmail.com</p>
                      <p><BsFillPeopleFill className={styles.icon}></BsFillPeopleFill> Soft Innovation</p>
                      <p><FaNetworkWired className={styles.icon }></FaNetworkWired> Senior Consultant</p>
                      <p><BsFillBookmarkFill className={styles.icon}></BsFillBookmarkFill> Mes Offres</p>
                  </div>
                  <div onClick={() => setOpen(true)}>
                      <button><AiFillCheckCircle className={styles.icon} ></AiFillCheckCircle>Publiez une offre</button>
                  </div>
              </div>
              <div className={styles.offreFormContainer}>
              { open ?  
                    <div className={styles.formContainer}>
                         <form onSubmit={handleSubmit(Submit)}>
                             <TiDelete className={styles.icon} onClick={() => setOpen(false)} ></TiDelete>
                             <div className={styles.container} >
                                 <label>nom de l'entreprise </label>
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
                                     placeholder="adresse..."
                                     ref={register({ required : true})}
                                  />
                             </div>
                            <div className={styles.container}  >
                                  <label>Site Web</label>
                                  <input 
                                     name="website" 
                                     type="text" 
                                     placeholder="www.exemple.com"
                                     ref={register({ required : true})}
                                  />
                                  <label>E-mail</label>
                                  <input 
                                    name="email" 
                                    type="email" 
                                    placeholder="email..."
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)}
                                    ref={register({required : true})}
                                  />
                            </div>
                            <div className={styles.container} >
                                  <label>Fonction</label>
                                  <input 
                                       name="fonction" 
                                       type="text" 
                                       placeholder="initulé du poste"
                                      ref={register({ required : true})}
                                  />
                                 <label>Secteur d'activité</label>
                                 <input 
                                     name="secteur" 
                                     type="text" 
                                     placeholder="domaine..."
                                     ref={register({required : true})}
                  />
</div>

<div className={styles.container}  >
    <label>Début de stage</label>
    <input 
       name="debut" 
       type="text" 
       placeholder="2 fev 2021 "

      ref={register({required : true})}
   />
   <label>Fin de stage</label>
    <input 
       name="fin" 
      type="text" 
      placeholder="3 juin 2021"
      ref={register({required : true})}
   />
</div>
<div className={styles.container}  >
    <label>Lieu</label>
     <input 
       name="lieu " 
       type="text" 
       placeholder="Rabat Morocco"

       ref={register({required : true})}
    />
   <label>Type de contrat</label>
   <input 
      name="contrat" 
      type="text" 
      placeholder="stage / CDI / CDD ..."
     ref={register({required : true})}
   />
</div>
<label>Ajouté une offre PDF </label>
<input 
  className={styles.file}
  name="upload" 
  type="file" 
  ref={register({required : true})}
/>
<label>Description</label>
<textarea type="text" placeholder="Missions / descriptif du profil recherché"></textarea>
<button type="submit" className={email.length  <= 0 || password.length <= 0 ? null : styles.enabled} disabled={email.length  <= 0 || password.length <= 0 ? true: false}><AiFillCheckCircle></AiFillCheckCircle> Publier </button>
</form> 
</div>: null }
                  <h1>Mes Offres</h1>
                  <Offre 
                      isLaureat   
                      isNew="nouveau"
                      title="Stagiaire PFE en Développement informatique"
                      text="od. Ut sagittis laoreet venenatis. Curabitur nulla orci, rhoncus sit amet quam eget, hendrerit ultricies nisi. Etiam sem nibh, ornare ut tortor scelerisque,"
                      tags={["génie informatique", "stage", "developpement mobile"]}
                      start="immédiatement"
                      duree="6 mois"
                      postuler="1 december 2021"
                      lieu="Rabat">
                  </Offre>             
              </div>
          </div>
      </Layout>

    </div>
  )
}
