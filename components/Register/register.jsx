//next
import Image from "next/image";
import { useState } from "react";

//style
import styles from "./register.module.scss";

//react-hook-form
import {useForm} from "react-hook-form"


//react-icons
import {RiUserSettingsFill} from "react-icons/ri";
import {TiDelete} from "react-icons/ti";
import {AiFillEye} from "react-icons/ai";
import {AiOutlineEyeInvisible} from "react-icons/ai";

//firebase
import {auth , storage} from "../../config/utils";
import {createUserProfile } from "../../config/utils";

import {Loader} from "../Loader/Loader";
import Notification from "../Notification/notification";

const Register = ({open,setOpen }) => {
    const {register , handleSubmit  } = useForm();

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword, setConfirm] = useState("");
    const [message , setMessage]= useState("");
    const [loader , isLoader]= useState(false);
    const [notif , setNotif]=useState(false);
    const [erreur , setErreur]=useState(false);
    const [fileURL , setFileURL]=useState(null);
    const [type , setType] = useState("password");
 


    const onFileChange = async (e) => {
      const file = e.target.files[0];
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name)
      await fileRef.put(file)
      setFileURL(await fileRef.getDownloadURL())
    }

    const Submit = async (data) => {

      if (password !== confirmPassword) {
        setErreur(true)
        setMessage("veuillez confirme votre mot de passe");
        setNotif(true);
        setTimeout( ()=> {
          setNotif(false);
        } , 8000);
        return;
      }
        isLoader(true);
        setErreur(false);

        try {
          const {user} = await auth.createUserWithEmailAndPassword(email,password);
          await createUserProfile(user,data,fileURL);
          user.sendEmailVerification().then(
            ()=> {
               setMessage("un mail de confirmation vous a été envoyé");
               setNotif(true)} 
          ).catch (
            (error)=> {

              alert("erreur");
              console.log(error)
            }
          )
          setEmail("");
          setPassword("");
          setOpen(false);
          isLoader(false);
          setTimeout( ()=> {
            setNotif(false);
          }, 8000)
        } catch (error) {
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
      <>
      {notif ?<Notification erreur={erreur}>{message}</Notification> : null}
        {open? 
        <div className={styles.registerFormContainer}>
         <div className={styles.filter}>
                <div className={styles.logo}>
                    <Image alt="alensao logo" src="/logo1.png" width="25px" height="25px"></Image>
                    <h3>ALENSAO</h3>
                    <TiDelete className={styles.icon} onClick={()=> setOpen(false)}></TiDelete>
                </div>
               {loader? <Loader></Loader> :<form onSubmit={handleSubmit(Submit)} autoComplete="off">
               <div style={{color:"red", marginTop:"10px", marginBottom:"10px"}}>
                 <p> (*) Obligatoire </p> 
                 <p> inscription juste pour lauréats</p>
                </div>
                     <label>nom <span style={{color:"red"}}> * </span></label>
                     <input 
                       name="firstname" 
                       type="text" 
                       placeholder="nom"
                       ref={register({required : true})}
                     />
                     <label>Prenom <span style={{color:"red"}}> * </span></label>
                     <input 
                       name="lastname" 
                       type="text" 
                       placeholder="Prenom"
                       ref={register({ required : true})}
                     />
                     <label>Spécialité <span style={{color:"red"}}> * </span> </label>
                     <select  name="domaine" placeholder="select" ref={register({required : true})}>
                     <option disabled defaultValue selected value> -- sélectionner une option  -- </option>
                          <option value="génie informatique">Génie informatique</option>
                          <option value="cyber sécurité">Cyber sécurité</option>
                          <option value="big data">Data science </option>
                          <option value="génie civil">Génie civil</option>
                          <option value="génie civil">Génie Electric</option>
                          <option value="génie industriel">Génie industriel</option>
                          <option value="génie télécommunication et réseaux">Génie télécommunication et réseaux</option>
                          <option value="génie des systémes electronique , informatique et réseaux">Génie des systémes electronique , informatique et réseaux</option>
                     </select>
                      <label>Promotion <span style={{color:"red"}}> * </span> </label>
                      <input type="number" name="promotion" min="2001" placeholder="2001" ref={register({required : true})}>

                      </input>
                     <label>email <span style={{color:"red"}}> * </span> </label>
                     <input 
                       name="email" 
                       type="email" 
                       placeholder="email"
                       value={email}
                       onChange={(e)=> setEmail(e.target.value)}
                       ref={register({required : true})}
                     />
                     <div className={styles.fileArea}>
                     <label>Photo de profil</label>
                     <input
                     name="photo"
                     type="file"
                     placeholder="choisir une photo de profil"
                     onChange= { (e) => onFileChange(e)}
                     ></input>
                     </div>
                     <label>Mot de passe <span style={{color:"red"}}> * </span> </label>
                     <div  className={styles.password}>
                      <input 
                       name="password" 
                       type={type}
                       placeholder="mot de passe..."
                       value={password}
                       onChange={(e)=> setPassword(e.target.value)}
                       ref={register({required : true})}
                     />
                     { type == "password" ?<AiFillEye className={styles.icon} onClick={()=> setType("text")}></AiFillEye>: <AiOutlineEyeInvisible className={styles.icon} onClick={()=> setType("password")}></AiOutlineEyeInvisible>}
                     </div>
                     <label>Confirmer voter mot de passe <span style={{color:"red"}}> * </span></label>
                      <input 
                       name="password" 
                       type={type} 
                       placeholder="password"
                       value={confirmPassword}
                       onChange={ (e) => setConfirm(e.target.value)}
                     />
                     <button type="submit" className={email.length  <= 0 || password.length <= 0 ? null : styles.enabled} disabled={email.length  <= 0 || password.length <= 0 ? true: false}><RiUserSettingsFill style={{fontSize:"20px", marginRight:"5px"}}></RiUserSettingsFill>S'inscrire </button>
                </form>}
            </div>
        </div> 
        : null} </>
    )
}

export default Register;