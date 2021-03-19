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

//firebase
import {auth , storage} from "../../config/utils";
import {createUserProfile } from "../../config/utils";

import {Loader} from "../Loader/Loader";
import Notification from "../Notification/notification";

const Register = ({open,setOpen }) => {
    const {register , handleSubmit , errors } = useForm();

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword, setConfirm] = useState("");
    const [message , setMessage]= useState("");
    const [loader , isLoader]= useState(false);
    const [notif , setNotif]=useState(false);
    const [erreur , setErreur]=useState(false);
    const [fileURL , setFileURL]=useState(null);
    // const [file , setFile] = useState(null);


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
      {notif ?<Notification erreur={erreur}>{message}</Notification> : null};
        {open? 
        <div className={styles.registerFormContainer}>
         <div className={styles.filter}>
                <div className={styles.logo}>
                    <Image alt="alensao logo" src="/logo1.png" width="25px" height="25px"></Image>
                    <h3>ALENSAO</h3>
                    <TiDelete className={styles.icon} onClick={()=> setOpen(false)}></TiDelete>
                </div>
               {loader? <Loader></Loader> :<form onSubmit={handleSubmit(Submit)}>
                     <label>nom</label>
                     <input 
                       name="firstname" 
                       type="text" 
                       placeholder="nom"
                       ref={register({required : true})}
                     />
                     <label>Prenom</label>
                     <input 
                       name="lastname" 
                       type="text" 
                       placeholder="Prenom"
                       ref={register({ required : true})}
                     />
                     <label>Spécialité</label>
                      <input 
                       name="domaine" 
                       type="text" 
                       placeholder="génie informatique..."
                       ref={register({ required : true})}
                     />
                      <label>Promotion</label>
                      <input 
                       name="promotion" 
                       type="text" 
                       placeholder="2005...."
                       ref={register({ required : true})}
                     />
                     <label>email</label>
                     <input 
                       name="email" 
                       type="email" 
                       placeholder="email"
                       value={email}
                       onChange={(e)=> setEmail(e.target.value)}
                       ref={register({required : true})}
                     />
                     <label>Photo de profil</label>
                     <input
                     name="photo"
                     type="file"
                     placeholder="choisir une photo de profil"
                     onChange= { (e) => onFileChange(e)}
                     ></input>
                     <label>Mot de passe</label>
                      <input 
                       name="password" 
                       type="password" 
                       placeholder="mot de passe"
                       value={password}
                       onChange={(e)=> setPassword(e.target.value)}
                       ref={register({required : true})}
                     />
                     <label>Confirmer voter mot de passe</label>
                      <input 
                       name="password" 
                       type="password" 
                       placeholder="password"
                       value={confirmPassword}
                       onChange={ (e) => setConfirm(e.target.value)}
                       ref={register({ required : true})}
                     />
                     <button type="submit" className={email.length  <= 0 || password.length <= 0 ? null : styles.enabled} disabled={email.length  <= 0 || password.length <= 0 ? true: false}><RiUserSettingsFill style={{fontSize:"20px", marginRight:"5px"}}></RiUserSettingsFill>S'inscrire </button>
                </form>}
            </div>
        </div> 
        : null} </>
    )
};

export default Register;